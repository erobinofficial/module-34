function loadQuotes() {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data));
}
loadQuotes();
function displayQuotes(quotes) {
    const section = document.getElementById('quote');
    const quote = document.createElement('p');
    quote.innerHTML = quotes;
    section.appendChild(quote);
}