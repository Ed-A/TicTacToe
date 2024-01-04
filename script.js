console.log("from script file");

let i = 0;
let xrow1 = 0, xrow2 = 0, xrow0 = 0, orow1 = 0, orow2 = 0, orow0 = 0, xcol0 = 0, xcol1 = 0, xcol2 = 0, ocol0 = 0, ocol1 = 0, ocol2 = 0;

function mark(x,y) {
  if(document.getElementById("xwin").style.visibility == "visible" || document.getElementById("owin").style.visibility == "visible" ){
    return;
  }
  b = document.getElementById("b" + x + y);
  if (i%2 == 0){
    b.innerHTML = "X";

    switch(x){
      case 0:
        xrow0++;
        if (y == 0){b00 = 'x'};
        if (y == 2){b02 = 'x'};
        break;
      case 1:
        xrow1++;
        if (y == 1){center = 'x'};
        break;
      case 2:
        xrow2++;
        if (y == 0){b20 = 'x'};
        if (y == 2){b22 = 'x'};
        break;
    }

    switch(y){
      case 0:
        xcol0++;
        break;
      case 1:
        xcol1++;
        break;
      case 2:
        xcol2++;
        break;
    }
  }
  else{
    b.innerHTML = "O";
    
    switch(x){
      case 0:
        orow0++;
        if (y == 0){b00 = 'o'};
        if (y == 2){b02 = 'o'}; 
        break;
      case 1:
        orow1++;
        if (y == 1){center = 'o'};
        break;
      case 2:
        orow2++;
        if (y == 0){b20 = 'o'};
        if (y == 2){b22 = 'o'};
        break;
    }

    switch(y){
      case 0:
        ocol0++;
        break;
      case 1:
        ocol1++;
        break;
      case 2:
        ocol2++;
        break;
    }
  };

  
  if(xrow0 == 3 || xrow1 == 3 || xrow2 == 3 || xcol1 == 3 || xcol2 == 3 || xcol0 == 3){
    document.getElementById("xwin").style.visibility = "visible";
  }

  if(orow0 == 3 || orow1 == 3 || orow2 == 3 || ocol1 == 3 || ocol2 == 3 || ocol0 == 3){
    document.getElementById("owin").style.visibility = "visible";  
  }
  
  i++;

  switch (center) {
    case 'o':
      if((b00 == 'o' && b22 == 'o') || (b02 == 'o' && b20 == 'o')){document.getElementById("owin").style.visibility = "visible";}
      break;
  
    case 'x':
      if((b00 == 'x' && b22 == 'x') || (b02 == 'x' && b20 == 'x')){document.getElementById("xwin").style.visibility = "visible";}
      break;
  }

}
