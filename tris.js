var cell;
var symbol = "X";
var numMoves= 0;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
currentmove = "X";

function changeBox(cell){
	if (cell.value=="")
	 	{cell.value=symbol;
	 	numMoves ++;
	 	document.secondForm.currentmove.value= currentmove;
		 }
	 else {
	  alert("La cella è occupata");
	}
	if (checkWin()){
		alert ("giocatore " + cell.value + " vince " )
		
		clearBtn();
		return;		
	}
	if (numMoves == 9) {
		alert ("Pareggio");
		clearBtn();
		return;
	}
	else {
		changeSymbol();
	}
}

function changeSymbol(){
	if (symbol== "X")
		{symbol="O";
		currentmove= "O"
		}
	 else {
	  symbol="X";
	 	currentmove="X"
		 }
}

function checkWin(){
	with (document.simpleForm) { 
		if ((b1.value == "X") && (b2.value=="X") && (b3.value == "X"))  
			return true;	
		else if ((b4.value == "X") && (b5.value=="X") && (b6.value == "X"))  
			return true;
		else if ((b7.value == "X") && (b8.value=="X") && (b9.value == "X"))  
			return true;
		else if ((b1.value == "X") && (b4.value=="X") && (b7.value == "X"))  
			return true;
		else if ((b2.value == "X") && (b5.value=="X") && (b8.value == "X"))  
			return true;	
		else if ((b3.value == "X") && (b6.value=="X") && (b9.value == "X"))  
			return true;	
		else if ((b1.value == "X") && (b5.value=="X") && (b9.value == "X"))  
			return true;
		else if ((b3.value == "X") && (b5.value=="X") && (b7.value == "X"))  
		 	return true;
	
		
		
		else if ((b1.value == "O") && (b2.value=="O") && (b3.value == "O"))  
			return true;
		if ((b4.value == "O") && (b5.value=="O") && (b6.value == "O"))  
			return true;
		if ((b7.value == "O") && (b8.value=="O") && (b9.value == "O"))  
			return true;	
		if ((b1.value == "O") && (b4.value=="O") && (b7.value == "O"))  
			return true;	
		if ((b2.value == "O") && (b5.value=="O") && (b8.value == "O"))  
			return true;	
		if ((b3.value == "O") && (b6.value=="O") && (b9.value == "O"))  
			return true;
		if ((b1.value == "O") && (b5.value=="O") && (b9.value == "O"))  
			return true;
		if ((b3.value == "O") && (b5.value=="O") && (b7.value == "O"))  
			return true;

	}
}
