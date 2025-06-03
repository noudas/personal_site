import { useEffect, useState } from "react";
import ProjectComponent from "../../components/projectComponent/projectComponent";
import TitleComponent from "../../components/titleComponent/titleComponent";
import "./projects.css";

const extensionTechMap = {
  ts: ["typescript", "javascript", "react", "node"],
  jsx: ["react", "javascript", "node"],
  js: ["javascript", "node"],
  py: ["python"],
  sql: ["mysql"],
  kt: ["kotlin"],
  php: ["php"],
};

const detectTechsFromText = (text = "") => {
  const techKeywords = ["react", "node", "typescript", "mongodb", "mysql", "python", "express"];
  const found = new Set();

  const lower = text.toLowerCase();
  techKeywords.forEach((tech) => {
    if (lower.includes(tech)) found.add(tech);
  });

  // Detect extensions
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
    const res = await fetch(url);
    const data = await res.json();
    return Object.keys(data).map((lang) => lang.toLowerCase());
  } catch {
    return [];
  }
};

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      const res = await fetch("https://api.github.com/users/noudas/repos", {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      });
      const raw = await res.json();

      const sorted = raw.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

      // Build full tech info per repo
      const enriched = await Promise.all(
        sorted.map(async (repo) => {
          const langList = await fetchLanguages(repo.languages_url);
          const detectedFromText = detectTechsFromText(repo.description || repo.name || "");

          const allTechs = Array.from(new Set([
            ...(repo.topics || []),
            ...langList,
            ...detectedFromText,
          ]));

          return {
            ...repo,
            techs: allTechs,
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
          description={repo.description || "No description provided."}
          link={repo.html_url}
          techs={repo.techs || []}
        />
      ))}
    </>
  );
};

export default Projects;
