import { useEffect, useRef } from "react";
import styles from "./project.module.scss";

export function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.projectCard}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projectList = [
    { 
      title: "Portfolio em angular", 
      description: "Meu portfólio pessoal criado com angular.", 
      link: "https://github.com/lucascauanh/portfolio" // Link para o projeto no GitHub
    },
    { title: "PokeDex", description: "Esse é só o bâsico sendo mostrado", link: "https://github.com/lucascauanh/pokedex/tree/main/meu-pokemon" },
    { title: "Projeto de uma app de receitas ( ainda incompleto)", description: "testando habilidades em angular", link: "https://github.com/lucascauanh/app-receitas" },
    { title: "Spotify", description: "Utilizando react criei um app fake do spotify", link: "https://github.com/lucascauanh/spot-clone" },
  ];

  return (
    <section ref={sectionRef} className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsContainer}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.projectLink}
              >
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

