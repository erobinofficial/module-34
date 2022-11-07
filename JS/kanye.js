const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data));
}
const displayQuotes = quotes => {
    const section = document.getElementById('quote');
    section.innerHTML = quotes.quote;
}