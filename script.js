console.log("from script file");

let i = 0; //count of turn
let xrow0 = 0, xrow1 = 0, xrow2 = 0; //count of each row with x mark
let orow0 = 0, orow1 = 0, orow2 = 0; //count of each row with o mark
let xcol0 = 0, xcol1 = 0, xcol2 = 0; //count of each column with x mark
let ocol0 = 0, ocol1 = 0, ocol2 = 0; //count of each column with o mark

function mark(x,y) { // x : row index & y : column index
  if(document.getElementById("xwin").style.visibility == "visible" || document.getElementById("owin").style.visibility == "visible" ){
    return; //pre-test for end of game
  }
  b = document.getElementById("b" + x + y); //gets clicked cell<td> by id 

  if (i%2 == 0){ //even turn
    b.innerHTML = "X"; //marks X

    switch(x){
      case 0:
        xrow0++; // counts x in row 0
        if (y == 0){b00 = 'x'}; // counts top left corner as x
        if (y == 2){b02 = 'x'}; // counts top right corner as x
        break;
      case 1:
        xrow1++; // counts x in row 1
        if (y == 1){center = 'x'}; // counts center as x
        break;
      case 2:
        xrow2++; // counts x in row 2
        if (y == 0){b20 = 'x'}; // counts bottom left corner as x
        if (y == 2){b22 = 'x'}; // counts bottom right corner as x
        break;
    }

    switch(y){
      case 0:
        xcol0++; // counts x in column 0
        break;
      case 1:
        xcol1++; // counts x in column 1
        break;
      case 2:
        xcol2++; // counts x in column 2
        break;
    }
  }

  else{ //odd turn
    b.innerHTML = "O"; //marks O
    
    switch(x){
      case 0:
        orow0++; // counts o in row 0
        if (y == 0){b00 = 'o'}; // counts top left corner as o
        if (y == 2){b02 = 'o'}; // counts top right corner as o
        break;
      case 1:
        orow1++; // counts o in row 1
        if (y == 1){center = 'o'}; // counts center as o
        break;
      case 2:
        orow2++; // counts o in row 2
        if (y == 0){b20 = 'o'}; // counts bottom left corner as o
        if (y == 2){b22 = 'o'}; // counts bottom right corner as o
        break;
    }

    switch(y){
      case 0:
        ocol0++; // counts o in column 0
        break;
      case 1:
        ocol1++; // counts o in column 1
        break;
      case 2:
        ocol2++; // counts o in column 2
        break;
    }
  };

  
  if(xrow0 == 3 || xrow1 == 3 || xrow2 == 3 || xcol1 == 3 || xcol2 == 3 || xcol0 == 3){ // if one column/row has 3 x's ----- x wins.
    document.getElementById("xwin").style.visibility = "visible";
  }

  if(orow0 == 3 || orow1 == 3 || orow2 == 3 || ocol1 == 3 || ocol2 == 3 || ocol0 == 3){ // if one column/row has 3 o's ----- o wins.
    document.getElementById("owin").style.visibility = "visible";  
  }
  
  i++;

  switch (center) { // for diagonal win ----- applies to only the one which has center
    case 'o':
      if((b00 == 'o' && b22 == 'o') || (b02 == 'o' && b20 == 'o')){document.getElementById("owin").style.visibility = "visible";}
      break; //checks if opposite corners have o ----- if yes, wins.
  
    case 'x':
      if((b00 == 'x' && b22 == 'x') || (b02 == 'x' && b20 == 'x')){document.getElementById("xwin").style.visibility = "visible";}
      break; //checks if opposite corners have x ----- if yes, wins.
  }

}
