const loadFriends = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayFriends(data));
}
loadFriends();
const displayFriends = data => {
    const users = data.results;
    const usersDiv = document.getElementById("friends");
    for(const user of users){
        console.log(user);
        const p = document.createElement("p");
        p.classList.add("user");
        p.innerText =  `Name: ${user.name.title} ${user.name.first} ${user.name.last}
        email: ${user.email}`;
        usersDiv.appendChild(p);
    }
}