$(document).ready(function() {
    // Read embedded JSON data from the script tag
    var jsonData = JSON.parse($("#pokemonData").text());
    displayPokemonDetails(jsonData);
});

function displayPokemonDetails(data) {
    var pokemonList = "<ul>";
    $.each(data, function(index, pokemon) {
        pokemonList += `<li>${pokemon.name} - ${pokemon.number} - Weight: ${pokemon.weight}, Height: ${pokemon.height}</li>`;
    });
    pokemonList += "</ul>";
    
    $("#pokemonDataContainer").html(pokemonList);
}
