const projects = [
    {
        number: "01",
        title: "Portfolio Website",
        description:
            "Mijn persoonlijke portfolio voor Webprogramming, Frameworks & Usability.",
        details:
            "De website is gebouwd met semantische HTML5, responsive CSS3 en werkt op desktop, tablet en mobiel.",
        category: "web",
        tags: ["HTML5", "CSS3", "Responsive"]
    },

    {
        number: "02",
        title: "MBO Software Project",
        description:
            "Hier plaats ik later een project uit mijn MBO 4 Software Development opleiding.",
        details: "",
        category: "software",
        tags: ["Software Development", "Git"]
    },

    {
        number: "03",
        title: "Nieuw HBO Project",
        description:
            "Tijdens mijn HBO-opleiding voeg ik nieuwe softwareprojecten aan deze portfolio toe.",
        details: "",
        category: "school",
        tags: ["HBO", "Development"]
    }
];


const projectsContainer = document.querySelector(".projects-page");


function createProjectCard(project) {

    const article = document.createElement("article");
    article.classList.add("large-project-card");


    const div = document.createElement("div");


    const number = document.createElement("p");
    number.classList.add("project-number");
    number.textContent = project.number;


    const title = document.createElement("h2");
    title.textContent = project.title;


    const description = document.createElement("p");
    description.textContent = project.description;


    div.append(number, title, description);


    if (project.details !== "") {

        const details = document.createElement("p");
        details.textContent = project.details;

        div.append(details);
    }


    const tags = document.createElement("div");
    tags.classList.add("tags");


    project.tags.forEach((tag) => {

        const tagElement = document.createElement("span");

        tagElement.textContent = tag;

        tags.append(tagElement);

    });


    div.append(tags);

    article.append(div);

    return article;
}


function renderProjects(projectList) {

    projectsContainer.replaceChildren();

    projectList.forEach((project) => {

        const projectCard = createProjectCard(project);

        projectsContainer.append(projectCard);

    });
}


function filterProjects(category) {

    if (category === "all") {

        renderProjects(projects);

        return;
    }


    const filteredProjects = projects.filter(
        (project) => project.category === category
    );


    renderProjects(filteredProjects);
}


function createFilterButtons() {

    const filterContainer = document.createElement("div");

    filterContainer.classList.add("hero-buttons");


    const filters = [
        { text: "Alle", category: "all" },
        { text: "Web", category: "web" },
        { text: "Software", category: "software" },
        { text: "School", category: "school" }
    ];


    filters.forEach((filter) => {

        const button = document.createElement("button");

        button.type = "button";

        button.textContent = filter.text;

        button.classList.add("btn", "secondary-btn");


        button.addEventListener("click", () => {

            filterProjects(filter.category);

        });


        filterContainer.append(button);

    });


    projectsContainer.before(filterContainer);
}


createFilterButtons();

renderProjects(projects);