let no_of_turn = 0;
let no_of_X=0; 
let no_of_O=0;
let index_of_x = [];
let index_of_o = [];
let element;

window.addEventListener("click", exe);

function exe(){

	let main = event.srcElement;
	let id = main.id;
  
	if(id != "" && main.innerHTML==""){
    write(main, id);
  }

  if(index_of_x.length>=3){
    if(checkit('x')){
      window.removeEventListener("click", exe);
    }
  }
  if(index_of_o.length>=3){
    if(checkit('o')){
      window.removeEventListener("click", exe);
    }
  }
  if(no_of_O==5){
    window.removeEventListener("click", exe);
    document.getElementById('reload').classList.remove('hidden');
    document.getElementById('display').innerHTML = "Game is a Draw!";
  }
}


function checkit(symbol){
  
  let array = [];

  switch(symbol){
    case 'x':
      array = index_of_x;
      break;
    case 'o':
      array = index_of_o;
      break;
  }

  //for diagonal win
  if((array.includes('00') && array.includes('11') && array.includes('22')) ||(array.includes('02') && array.includes('11') && array.includes('20')) ){
    switch(symbol){
      case 'x':
        document.getElementById('display').innerHTML = "X wins";
        break;
      case 'o':
        document.getElementById('display').innerHTML = "O wins";
        break;
    }
    document.getElementById('reload').classList.remove('hidden');
    return true;
  }

  //for horizontal win
  if(array.includes('00') && array.includes('01') && array.includes('02') || array.includes('10') && array.includes('11') && array.includes('12') || array.includes('20') && array.includes('21') && array.includes('22') ){
    switch(symbol){
      case 'x':
        document.getElementById('display').innerHTML = "X wins";
        break;
      case 'o':
        document.getElementById('display').innerHTML = "O wins";
        break;
    }
    document.getElementById('reload').classList.remove('hidden');
    return true;
  }


  //for vertical win
  if(array.includes('00') && array.includes('10') && array.includes('20') || array.includes('01') && array.includes('11') && array.includes('21') || array.includes('02') && array.includes('12') && array.includes('22') ){
  {
    switch(symbol){
      case 'x':
        document.getElementById('display').innerHTML = "X wins";
        break;
      case 'o':
        document.getElementById('display').innerHTML = "O wins";
        break;
    }
    document.getElementById('reload').classList.remove('hidden');
    return true;
  }
}
}

function write(element, id){
  if(no_of_turn%2==0){
    element.innerHTML = "<img src='O.png'>";
    no_of_turn++;
    no_of_O++;
    index_of_o.push(id);
  }else{
    element.innerHTML = "<img src='X.png'>";
    no_of_turn++;
    no_of_X++;
    index_of_x.push(id);
  }
}
