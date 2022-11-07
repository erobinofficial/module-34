function loadQuotes() {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data));
}
loadQuotes();
function displayQuotes(quotes) {
    const section = document.getElementById('quote');
    for(const quote of quotes) {
    const quote1 = document.createElement('p');
    quote1.innerHTML = quote;
    section.appendChild(quote);
    }
}