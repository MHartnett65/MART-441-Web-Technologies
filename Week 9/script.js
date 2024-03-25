$(document).ready(async function() {
    try {
        const response = await fetch("pokedex.json");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        displayPokemonNames(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        $("#pokemonData").html("<p>Error fetching data. Please try again later.</p>");
    }
});

function displayPokemonNames(data) {
    if (!data || data.length === 0) {
        $("#pokemonData").html("<p>No Pokémon data available.</p>");
        return;
    }

    var pokemonList = "<ul>";
    $.each(data, function(index, pokemon) {
        pokemonList += `<li>${pokemon.name} - ${pokemon.number}</li>`;
    });
    pokemonList += "</ul>";
    
    $("#pokemonData").html(pokemonList);
}
