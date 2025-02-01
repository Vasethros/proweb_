document.addEventListener("DOMContentLoaded", function() {
    const charactersContainer = document.getElementById("characters-container");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageNumber = document.getElementById("pageNumber");

    let currentPage = 1;
    const itemsPerPage = 3;

    const characters = [
        { id: 1, name: "Kratos", description: "El Fantasma de Esparta.", image: "img/kratos.jpg" },
        { id: 2, name: "Esposa e hija", description: "Esposa e Hija de kratos.", image: "img/esposa.jpg" },
        { id: 3, name: "Zeus", description: "Dios del Olimpo.", image: "img/zeus.jpg" },
        { id: 4, name: "Ares", description: "Dios de la Guerra antes de Kratos.", image: "img/ares.jpg" },
        { id: 5, name: "Poseidón", description: "Dios de los mares.", image: "img/poseidon.jpg" },
        { id: 6, name: "Hades", description: "Dios del inframundo.", image: "img/hades.jpg" }
    ];

    function renderCharacters() {
        charactersContainer.innerHTML = "";
        let start = (currentPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;
        let paginatedItems = characters.slice(start, end);

        paginatedItems.forEach(character => {
            let card = document.createElement("div");
            card.classList.add("character-card");
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>${character.description}</p>
            `;
            charactersContainer.appendChild(card);
        });

        pageNumber.innerText = currentPage;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = end >= characters.length;
    }

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderCharacters();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage * itemsPerPage < characters.length) {
            currentPage++;
            renderCharacters();
        }
    });

    renderCharacters();
});