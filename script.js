let iniciar = document.getElementById('iniciar');
let gameContainer = document.querySelector('.main-game');
let gameIntro = document.querySelector('.main');
let words = ["html","javascript", "css","nodejs","tailwind","react","angular","bootstrap","express","python", "sql","firebase","vue"]
let huge = document.querySelectorAll('.hr')
let wordContainer = document.getElementById('word')
let word;
let btn = document.getElementById('enter');
let useLettersContainer = document.getElementById('no-letters');
let input = document.getElementById('input');
let backMenu = document.getElementById('backMenu');
let newGame = document.getElementById('newGame');
let newWordContainer = document.querySelector('.container');
let palabra = document.getElementById('palabra');
let newWord = document.getElementById('addWord')
let saveWord = document.getElementById('saveWord');
let cancel = document.getElementById('cancel');
let giveUp = document.getElementById('giveUp');
console.log(huge[0]);


iniciar.addEventListener('click', ()=>{
    gameContainer.style.display = 'block';
    gameIntro.style.display = 'none';
})

word = words[Math.floor(Math.random()* words.length)];
let array = word.split("");
console.log(array);
array.map((item) => {
  let tag = document.createElement("p");
  tag.innerText = item;
  return wordContainer.appendChild(tag);
});

let counter = 0;
let loose = 0;
let useLetters = [];
btn.addEventListener("click", () => {
  let letter = input.value;
  if (letter.length > 0 && letter.length < 2) {
    let letra = useLetters.includes(letter);
    console.log(letra);
    if (letra === false) {
      useLetters.push(letter);
      let ps = document.getElementsByTagName("p");
      for (let i = 0; i < ps.length; i++) {
        if (ps[i].innerText === letter) {
          ps[i].style.color = "black";
          counter++;
        }
      }
      if(array.includes(letter) !== true){
        loose++
        if(loose === 1){
            huge[0].style.display = 'block';
        };
        if(loose === 2){
            huge[1].style.display = 'block';
        };
        if(loose === 3){
            huge[2].style.display = 'block';
        };
        if(loose === 4){
            huge[3].style.display = 'block';
        };
        if(loose === 5){
            huge[4].style.display = 'block';
        };
        if(loose === 6){
            huge[5].style.display = 'block';
        };
        if(loose === 7){
            huge[6].style.display = 'block';
        };
        if(loose === 8){
            huge[7].style.display = 'block';
        };
        if(loose === 9){
            huge[8].style.display = 'block';
            btn.disabled= true;
            alert("Sorry you fail");
        }
      }
      display(letter);
    }
  } else {
    alert("Fuegooo");
  }
  if (counter === array.length) {
    alert("you won");
    btn.disabled = true;
  }
  console.log(useLetters);
  console.log(loose);

});

function display(letter) {
  useLetters.map((items) => {
    if (items === letter) {
      let tag = document.createElement("p");
      tag.innerText = items;
      return useLettersContainer.appendChild(tag);
    }
  });
}

backMenu.addEventListener('click', ()=>{
    gameContainer.style.display = 'none';
    gameIntro.style.display = 'flex';
})
newGame.addEventListener('click', ()=>{
  input.value = "";
  useLettersContainer.innerHTML = "";
  wordContainer.innerHTML ="";
  huge.forEach(element=>{
    element.style.display = 'none';
  })
  counter = 0;
  loose = 0;
  useLetters.length = 0;
  let number = Math.floor(Math.random()* words.length);
  word = words[number];
  console.log(word);
  console.log(useLetters.length)
  array = word.split("");
  array.map((item) => {
    let tag = document.createElement("p");
    tag.innerText = item;
    return wordContainer.appendChild(tag);
  });
  btn.disabled = false;
})

newWord.addEventListener('click',()=>{
  gameIntro.style.display = 'none';
  newWordContainer.style.display = 'flex';
})

cancel.addEventListener('click',()=>{
  gameIntro.style.display = 'flex';
  newWordContainer.style.display = 'none';
})

saveWord.addEventListener('click',()=>{
  let texto = palabra.value;
  if(upperCase(texto) !== false || texto.length > 8 || texto === ''){
    alert('Recorda no mayusculas y no mas de 8 letras');
  }else if(words.includes(texto)){
      alert('Esta palabra ya esta guardada');
  } else{
    words.push(texto);
    alert('Palabra guardada');
    newWordContainer.style.display = 'none';
    gameContainer.style.display = 'block';
  }
})
console.log(words);
function upperCase(str) {
  let texto = str.split("");
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === texto[i].toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
}

giveUp.addEventListener('click', ()=>{
  alert('Next time you will get it')
  huge.forEach(element=>{
    element.style.display = 'block';
  })
  wordContainer.innerHTML = word;
})