function printLinha(comprimento, largura){
	function printLinePar(comprimento){
		var avenca = "";
		preta = "#";
		branca = " ";
		for(col=0;col<comprimento;col++){
 			if(col % 2 == 0 ){
 				avenca = avenca + preta; 
 			}else{
 				avenca = avenca + branca;
 			}
		}
		return avenca;
	}

	function printLineImpar(comprimento){
		var avenca = "";
		preta = "#";
		branca = " ";
		for(col=0;col<comprimento;col++){
 			if(col % 2 == 0 ){
 				avenca = avenca + branca; 
 			}else{
 				avenca = avenca + preta;
 			}
		}
		return avenca;
	}
	
	var chessBoard = "";

	for(linha=0;linha<largura;linha++){
		if(linha % 2 == 0){
			chessBoard = chessBoard + printLinePar(comprimento) + "\n";
		}else{
			chessBoard = chessBoard + printLineImpar(comprimento) + "\n";
		}
	}
	console.log(chessBoard);
}