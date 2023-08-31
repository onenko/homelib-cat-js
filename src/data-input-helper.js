
var nameOptions = [
    "John",
    "Jane",
    "Robert",
    "Alice",
    // Add more names as needed
];

function autocompleteAuthor(event) {
    var input = document.getElementById("author");
    var inputValue = input.value.toLowerCase(); // Convert input to lowercase for case-insensitive matching
    var suggestions = [];

    // Clear any previous suggestions
    clearSuggestions();

    if (inputValue.length < 1) {
        return; // No need to display suggestions when the input is empty
    }

    // Find matching options from the database
    for (var i = 0; i < nameOptions.length; i++) {
        var option = nameOptions[i].toLowerCase(); // Convert option to lowercase
        if (option.startsWith(inputValue)) {
            suggestions.push(nameOptions[i]);
        }
    }

    // Display suggestions
    displaySuggestions(suggestions);
}

function clearSuggestions() {
    var suggestionsContainer = document.getElementById("author-suggestions-container");
    suggestionsContainer.innerHTML = ""; // Clear the suggestions container
    suggestionsContainer.classList.add("hidden");
}

function displaySuggestions(suggestions) {
    var suggestionsContainer = document.getElementById("author-suggestions-container");

    // Clear any previous suggestions
    clearSuggestions();

    // Create and display the suggestion list
    if (suggestions.length === 0) {
        return; // No suggestions to display
    }

    var suggestionList = document.createElement("ul");

    suggestions.forEach(function(suggestion) {
        var listItem = document.createElement("li");
        listItem.textContent = suggestion;
        listItem.addEventListener("click", function() {
            // Fill the input field with the selected suggestion
            document.getElementById("author").value = suggestion;
            clearSuggestions(); // Clear suggestions after selection
        });

        suggestionList.appendChild(listItem);
    });

    suggestionsContainer.appendChild(suggestionList);
    suggestionsContainer.classList.remove("hidden");
}
