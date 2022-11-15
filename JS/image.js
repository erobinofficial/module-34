const loadImages = () => {
    fetch('https://picsum.photos/seed/picsum/200/300')
    .then(res => res.blob())
    .then(data => displayImages(data));
}
loadImages();
const displayImages = image => {
    const section = document.getElementById('images');
    section.innerHTML = image;
}