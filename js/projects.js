const projects = [
    {
        number: "01",
        title: "Portfolio Website",
        description: "Mijn persoonlijke portfolio voor Webprogramming, Frameworks & Usability.",
        details: "Gebouwd met semantische HTML, responsive CSS en JavaScript.",
        category: "web",
        tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        number: "02",
        title: "MBO Software Project",
        description: "Een voorbeeld van een softwareproject uit mijn MBO 4 Software Development opleiding.",
        details: "Dit project laat zien dat ik ook buiten webontwikkeling programmeerervaring heb.",
        category: "software",
        tags: ["Software Development", "Git"]
    },
    {
        number: "03",
        title: "WPFW Portfolio",
        description: "Mijn HBO-project waarin ik mijn portfolio stap voor stap interactiever maak.",
        details: "De projectenlijst op deze pagina wordt dynamisch vanuit JavaScript opgebouwd.",
        category: "school",
        tags: ["HBO", "DOM", "ES6+"]
    },
    {
        number: "04",
        title: "Frontend Experiment",
        description: "Een klein project waarin ik werk met componenten en moderne frontendtechnieken.",
        details: "Hier kan ik later een echt React- of Angular-project toevoegen.",
        category: "web",
        tags: ["React", "TypeScript"]
    }
];

const projectsContainer = document.querySelector("#projects-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function createProjectCard(project) {
    const article = document.createElement("article");
    article.classList.add("large-project-card");

    const number = document.createElement("p");
    number.classList.add("project-number");
    number.textContent = project.number;

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const details = document.createElement("p");
    details.textContent = project.details;

    const tags = document.createElement("div");
    tags.classList.add("tags");

    project.tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        tags.append(tagElement);
    });

    article.append(number, title, description, details, tags);
    return article;
}

function renderProjects(projectList) {
    projectsContainer.replaceChildren();

    projectList.forEach((project) => {
        projectsContainer.append(createProjectCard(project));
    });
}

function filterProjects(category) {
    if (category === "all") {
        renderProjects(projects);
        return;
    }

    const filteredProjects = projects.filter((project) => project.category === category);
    renderProjects(filteredProjects);
}

function setActiveFilter(activeButton) {
    filterButtons.forEach((button) => button.classList.remove("active"));
    activeButton.classList.add("active");
}

function initializeProjectFilters() {
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setActiveFilter(button);
            filterProjects(button.dataset.filter);
        });
    });
}

renderProjects(projects);
initializeProjectFilters();
