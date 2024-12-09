let word =document.querySelector(".word"),
text=document.querySelector("#text"),
results=document.querySelector(".score"),
times=document.getElementById("time"),
faild=document.querySelector(".faild"),
option=document.querySelector(".levels"),
res=document.getElementById("form"),
hard=document.getElementById("options"),
btns=document.querySelector(".btn-sts")

// Liste de mots pour le jeu
const words=[
    'juice',
    'north',
    'south',
    'golden',
    'east',
    'west',
    "wonderful",
    'bad',
    'ball',
    'airplane',
    'silver',
    'women',
    'son',
    'feeble',
    'drag',
    'eight',
    'men'
]
// Init score
let score=0;
// Init time
let time=10;
let timeIntervale=setInterval(timeTack,1000);
// Init word
let allwords;
let options = localStorage.getItem('options')!==null?localStorage.getItem('options'):'medium'
// Définir la valeur de sélection de la difficulté
hard.value=localStorage.getItem('options')!==null? localStorage.getItem('options'):'medium'
text.focus();
// Génère un mot aléatoire à partir d'un tableau
function characters(){
    return words[Math.floor(Math.random() * words.length )]

}
// Update score
function totalScore(){
    score++;
    results.innerHTML = score;
}
function wordsPower(){
    allwords=characters();
    word.innerHTML=allwords;
}
// Update time
function timeTack(){
    time--
    times.innerHTML=time +"s"
    if(time == 0){
        clearInterval(timeIntervale)
        endGame()
    }
}
//affiche dans le  ecrans faild
function endGame(){
    faild.innerHTML=
        `<h1>Time over</h1>
        <p>Final score is ${score}</p>
        <button onclick="location.reload()">Play Again</button>`;
    faild.style.display="flex"
}
wordsPower()
text.addEventListener('input',(e)=>{
    const insertedText=e.target.value
    if(insertedText===allwords){
         // Clear le champ
        e.target.value='';
        wordsPower()
        totalScore()
        //on ajouter dans les  temps une valeur si on selectioner une options
        if(options==='difficult') time +=2;
        else if(options==='medium') time +=3;
        else time+=5;
        timeTack();
    }
});
wordsPower();
//pour sauvegardée les element dans localstorage
 res.addEventListener('change',(e)=>{
    options=e.target.value;
    localStorage.setItem("options",options);
    
 });