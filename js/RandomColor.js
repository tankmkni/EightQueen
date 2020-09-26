/**
 * ランダムカラー
 */

	//【16進数１桁の最大値を10進数に変換して代入(f⇒16)】
	var hexa = parseInt( "f" , 16 ) + 1;
//	var hexa = 16;	←のように単純に"16"でもいいけれど...


//【色指定番号を生成】--------------------------------------------------------------------------------------------------
function randomColor( hexa ){
	var code = "#";											//指定コードの頭文字
	for( i = 0 ; i < 6 ; i++){								//６桁の16進数を取得するループ
		var rnd = Math.floor( Math.random() * hexa );		//ランダム値（0～15）を取得
		code += rnd.toString( 16 );							//10進数のランダム値を16進数にして合体
	}
	return code;											//指定コードを返す
}


//【ランダムで背景の色を変える関数】------------------------------------------------------------------------------------
function randomBodyColor(){

	col = randomColor( hexa );									//ランダムで色指定番号を取得
	document.getElementById("main").style.color = col;			//文字の色を変える
	col = randomColor( hexa );									//ランダムで色指定番号を取得
	document.getElementById("title").style.textShadow = "0.5vmin 0.5vmin 0 " + col;			//文字の色を変える

	var bc1,bc2,bc3;
	bc1 = randomColor( hexa );
	bc2 = randomColor( hexa );
	bc3 = randomColor( hexa );

	document.body.style.background = "linear-gradient(45deg," + bc1 + "," + bc2 + "," + bc3 + ")";	//背景色を変える
	document.body.style.backgroundSize = "1000% 100%";
}


//【ランダムで３色を用意する関数】--------------------------------------------------------------------------------------
function randomBoardColor(){
	c1 = randomColor( hexa );					//１つ目の色の取得
	c2 = randomColor( hexa );					//２つ目の色の取得
	c3 = randomColor( hexa );					//３つ目の色の取得

	boardColor()								//盤の色を変える

	col = randomColor( hexa );
	document.getElementsByTagName("legend")[0].style.color = col;	//カウンターの文字の色を変える

	if( easy == true ){							//assistモードがonだったら
		changeBansColor();						//class banのマスの色を変える
	}
}
