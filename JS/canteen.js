const searchFood = () =>{
    const searchBox = document.getElementById('search-field');
    const searchText = searchBox.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    searchBox.value = '';
    fetch(url)
       .then(response => response.json())
       .then(data => console.log(data.meals));   
}
const input = document.getElementById("search-field");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});