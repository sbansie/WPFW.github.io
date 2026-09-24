const apiStatus = document.querySelector("#api-status");
const apiData = document.querySelector("#api-data");
const reactRepositoryUrl = "https://api.github.com/repos/facebook/react";

function createStat(label, value) {
    const item = document.createElement("div");
    item.classList.add("api-stat");

    const labelElement = document.createElement("span");
    labelElement.classList.add("api-label");
    labelElement.textContent = label;

    const valueElement = document.createElement("strong");
    valueElement.textContent = value;

    item.append(labelElement, valueElement);
    return item;
}

function renderApiData(repository) {
    apiData.replaceChildren();

    const numberFormat = new Intl.NumberFormat("nl-NL");
    const updatedDate = new Date(repository.updated_at).toLocaleDateString("nl-NL");

    apiData.append(
        createStat("Sterren", numberFormat.format(repository.stargazers_count)),
        createStat("Forks", numberFormat.format(repository.forks_count)),
        createStat("Open issues", numberFormat.format(repository.open_issues_count)),
        createStat("Laatst bijgewerkt", updatedDate)
    );

    const link = document.createElement("a");
    link.href = repository.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.classList.add("api-link");
    link.textContent = "Bekijk React op GitHub →";
    apiData.append(link);
}

async function loadApiData() {
    apiStatus.textContent = "Gegevens laden...";

    try {
        const response = await fetch(reactRepositoryUrl);

        if (!response.ok) {
            throw new Error(`HTTP-fout: ${response.status}`);
        }

        const repository = await response.json();
        renderApiData(repository);
        apiStatus.textContent = "Actuele GitHub-gegevens geladen.";
    } catch (error) {
        console.error("API kon niet worden geladen:", error);
        apiStatus.textContent = "De GitHub-gegevens konden niet worden geladen. Probeer het later opnieuw.";
    }
}

loadApiData();
