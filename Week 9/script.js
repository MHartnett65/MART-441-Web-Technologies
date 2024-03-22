$(document).ready(async function() {
    try {
        const response = await fetch("pokedex.json");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        displayPokemonData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        $("#pokemonData").html("<p>Error fetching data. Please try again later.</p>");
    }
});

function displayPokemonData(data) {
    if (!data || data.length === 0) {
        $("#pokemonData").html("<p>No Pokémon data available.</p>");
        return;
    }

    var pokemonHtml = "<table><tr><th>Name</th><th>Type(s)</th><th>Abilities</th><th>Stats</th></tr>";
    
    $.each(data, function(index, pokemon) {
        var types = pokemon.types.join(", ");
        var abilities = pokemon.abilities.join(", ");
        var stats = Object.entries(pokemon.stats).map(([stat, value]) => `${stat}: ${value}`).join(", ");
        
        pokemonHtml += `<tr><td>${pokemon.name}</td><td>${types}</td><td>${abilities}</td><td>${stats}</td></tr>`;
    });
    
    pokemonHtml += "</table>";
    
    $("#pokemonData").html(pokemonHtml);
}
