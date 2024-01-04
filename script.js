console.log("from script file");

let i = 0;
let xrow1 = 0, xrow2 = 0, xrow0 = 0, orow1 = 0, orow2 = 0, orow0 = 0, xcol0 = 0, xcol1 = 0, xcol2 = 0, ocol0 = 0, ocol1 = 0, ocol2 = 0;

function mark(x,y) {
  if(document.getElementById("win").style.visibility == "visible"){
    return;
  }
  b = document.getElementById("b" + x + y);
  if (i%2 == 0){
    b.innerHTML = "X";

    switch(x){
      case 0:
        xrow0++;
        break;
      case 1:
        xrow1++;
        break;
      case 2:
        xrow2++;
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

    if(x == 1 && y == 1){
      center = 'x';
    }
  }
  else{
    b.innerHTML = "O";
    
    switch(x){
      case 0:
        orow0++;
        break;
      case 1:
        orow1++;
        break;
      case 2:
        orow2++;
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


    if (x==1 && y==1){
      center = 'o';
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
      if(ocol0 >= 1 && ocol1 >= 1 && ocol2 >= 1 && orow0 >= 1 && orow1 >= 1 && orow2 >= 1){document.getElementById("owin").style.visibility = "visible";}
      break;
  
    case 'x':
      if( xcol0 >= 1 && xcol1 >= 1 && xcol2 >= 1 && xrow0 >= 1 && xrow1 >= 1 && xrow2 >= 1){document.getElementById("xwin").style.visibility = "visible";}
      break;
  }

}