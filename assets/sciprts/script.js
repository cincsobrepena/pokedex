let searchName = document.querySelector("#searchBar");addEventListener("click", getPokemon);

function getPokemon(e) {
    const name = searchName.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".entityCard").innerHTML = ` 
            <h1 id="PokemonName" style=" margin 20px;">${data.name.toUpperCase()} </h1>
            <img 
                class="pokemonIMG"
                src="${data.sprites.other["home"].front_default}"
                alt="${data.name}"
                style="width: 300px; margin 20px; filter: drop-shadow(30px 30px 20px rgba(70, 70, 70, 0.3))"
            />
            `;
        })
        .catch((err) => {
            alert("Pokemon not fount", err);
        })

        e.preventDefault();
}