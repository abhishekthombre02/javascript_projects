//select elements
const meme=document.querySelector('#meme');
const btn=document.querySelector('#btn');

//declare variables
const memes=[
    'images/meme1.jpg',
    'images/meme2.jpg',
    'images/meme3.jpg',
    'images/meme4.jpg'
];

//function to generate a meme
function generateMeme(){
    let randomMemeNum=Math.floor(Math.random() * memes.length)
    meme.setAttribute('src',`${memes[randomMemeNum]}`);
}

//generate meme event
btn.addEventListener('click',()=>generateMeme());