const blogButtons = document.querySelectorAll(".blog-toggle");

function toggleBlogItem(button) {
    const targetId = button.getAttribute("aria-controls");
    const extraContent = document.getElementById(targetId);
    const isOpen = button.getAttribute("aria-expanded") === "true";

    extraContent.hidden = isOpen;
    button.setAttribute("aria-expanded", String(!isOpen));
    button.textContent = isOpen ? "Lees meer" : "Lees minder";
}

function initializeBlogToggles() {
    blogButtons.forEach((button) => {
        button.addEventListener("click", () => toggleBlogItem(button));
    });
}

initializeBlogToggles();
