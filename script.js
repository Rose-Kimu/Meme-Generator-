const memeTitle = document.querySelector('.meme-title h1');
const memeImage = document.querySelector('.meme-image img');
const memeAuthor = document.querySelector('.meme-author p');
const generateMemeButton = document.querySelector('.generate-meme-btn button');

console.log(memeAuthor);
console.log(memeImage);
console.log(memeTitle);
console.log(generateMemeButton);

function updateContents (title, author,url){
    memeImage.setAttribute("src", url);
    memeTitle.textContent = title;
    memeAuthor.textContent = `Author: ${author}`;
}

function generateNewMeme() {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then(response => response.json())
    .then(data =>{
        console.log(data.title)
        console.log(data.url)
        updateContents(data.title, data.author, data.url)
    })
    .catch(error =>{
        console.log('Exited with an error!')
        console.log(error)
    })

}
generateNewMeme()

generateMemeButton.addEventListener('click', generateNewMeme)




