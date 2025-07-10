fetch("projects.json")
  .then((res) => res.json())
  .then((projects) => {
    const container = document.getElementById("projects-container");
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech Stack:</strong> ${project.tech}</p>
        <a href="${project.link}" target="_blank">View on GitHub</a>
      `;
      container.appendChild(card);
    });
  });
