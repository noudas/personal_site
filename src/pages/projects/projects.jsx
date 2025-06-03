import { useEffect, useState } from "react";
import ProjectComponent from "../../components/projectComponent/projectComponent";
import TitleComponent from "../../components/titleComponent/titleComponent";
import "./projects.css";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const extensionTechMap = {
  ts: ["typescript", "javascript", "react", "node"],
  jsx: ["react", "javascript", "node"],
  js: ["javascript", "node"],
  py: ["python"],
  sql: ["mysql"],
  kt: ["kotlin"],
  php: ["php"],
  csharp: ["c#"],
  cplusplus: ["c++"],
};

const detectTechsFromText = (text = "") => {
  const techKeywords = ["react", "node", "typescript", "mongodb", "mysql", "python", "express"];
  const found = new Set();

  const lower = text.toLowerCase();
  techKeywords.forEach((tech) => {
    if (lower.includes(tech)) found.add(tech);
  });

  const extensionMatch = lower.match(/\.(ts|jsx|js|py|sql|kt|php)/g);
  if (extensionMatch) {
    extensionMatch.forEach((ext) => {
      const clean = ext.replace(".", "");
      extensionTechMap[clean]?.forEach((t) => found.add(t));
    });
  }

  return Array.from(found);
};

const fetchLanguages = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    return Object.keys(data).map((lang) => lang.toLowerCase());
  } catch {
    return [];
  }
};

const fetchReadme = async (owner, repo) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) return null;

    const data = await res.json();
    // README content is base64 encoded
    return atob(data.content);
  } catch {
    return null;
  }
};

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      const res = await fetch("https://api.github.com/users/noudas/repos", {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      const raw = await res.json();

      // SORT repos by updated_at descending (most recent first)
      const sorted = raw.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

      const excludedTechs = ["batchfile", "assembly", "plpgsql", "cython"];

      const maxReadmeLength = 100; // max chars for README snippet

      const enriched = await Promise.all(
        sorted.map(async (repo) => {
          const langList = await fetchLanguages(repo.languages_url);
          const detectedFromText = detectTechsFromText(repo.description || repo.name || "");

          const readmeContent = await fetchReadme(repo.owner.login, repo.name);

          // Trim README content to snippet
          let readmeSnippet = "";
          if (readmeContent) {
            readmeSnippet =
              readmeContent.length > maxReadmeLength
                ? readmeContent.slice(0, maxReadmeLength) + "..."
                : readmeContent;
          }

          let descriptionCombined = "";
          if (repo.description && readmeSnippet) {
            descriptionCombined = repo.description + "\n\n" + readmeSnippet;
          } else if (repo.description) {
            descriptionCombined = repo.description;
          } else if (readmeSnippet) {
            descriptionCombined = readmeSnippet;
          } else {
            descriptionCombined = "No description provided.";
          }

          let allTechs = Array.from(
            new Set([
              ...(repo.topics || []),
              ...langList,
              ...detectedFromText,
            ])
          ).filter((tech) => !excludedTechs.includes(tech.toLowerCase()));

          if (allTechs.length === 0) {
            allTechs = ["Unknown"];
          }

          return {
            ...repo,
            techs: allTechs,
            description: descriptionCombined,
          };
        })
      );

      setRepos(enriched);
    };

    loadRepos();
  }, []);

  return (
    <>
      <TitleComponent title={"PROJECTS"} color={"var(--azulClaro)"} />
      {repos.length === 0 && <p>Loading projects...</p>}
      {repos.map((repo) => (
        <ProjectComponent
          key={repo.id}
          title={repo.name}
          description={repo.description}
          link={repo.html_url}
          techs={repo.techs || []}
        />
      ))}
    </>
  );
};

export default Projects;
