
document.getElementById('btn-play').addEventListener('click',function(){
  play()
})

function play(){
  // prendo il value in base alla difficoltà selezionata
  const level = parseInt(document.getElementById('level').value)

  // ricavo il numero dei quadrati
  let numSquare;
  let squareRow;
  switch(level){
    case 1:
      numSquare = 100;
      squareRow = 10;
      break;
    case 2:
      numSquare = 81;
      squareRow = 9;
      break;
    case 3:
      numSquare = 49;
      squareRow = 7;
      break;
  }

  
  const NUM_BOMBS = 16;
  const bombs = bombsGenerator();
  console.log(bombs);


  console.log(numSquare);
  console.log(squareRow);
  // reset del main
  document.querySelector('main').innerHTML = '';
  // creo table
  createTable();


  function createTable(){
    const table = document.createElement('div');
    table.className = 'table';

    // creazione quadrati nella table
    for (let i = 1; i <= numSquare; i++) {
      // creo i quadrati
      const square = document.createElement('div');
      square.className = 'square';
      square.innerHTML = `<span>${i}</span>`;
      // do una grandezza ai quadrati
      const squareSize = `calc(100% / ${squareRow})`;
      square.style.width = squareSize;
      square.style.height = squareSize;

      // click sul quadrato chiamando una funzione
      square.addEventListener('click',clickSquare);

      // append dei quadrati a table
      table.append(square)
    }

    // append di table al main
    document.querySelector('main').append(table);
  }


  function clickSquare(event){
    console.log(event.target.innerText);

    // aggiungo calsse al quadrato cliccato
    this.classList.add('clicked');
  }


  function bombsGenerator(){
    const bombs = [];
    // creo bombe
    console.log('numero bombe =',NUM_BOMBS);
    while(bombs.length < NUM_BOMBS){
      const bomb = getRandomNum(1,numSquare);
      if(!bombs.includes(bomb)) bombs.push(bomb);
    }

    // restituisco array 
    return bombs;
  }
}


function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


