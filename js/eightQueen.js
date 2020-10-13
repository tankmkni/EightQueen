/**
 * エイト・クイーン
 */

 //【 グローバル変数 】

	var range = 8;							//【縦横の列の数を決める変数(初期値は８)】

	var maxRange = 100;						//【rangeの最高値を設定する変数(初期値は100)】

	var count = range;						//【置いたコマをカウントダウン】

	var pieceSrc = "queen_1";		//【コマの初期設定】

	var easy = false;						//【EASYモードのON(true)/OFF(false)】


//【引数のマスにコマを表記する関数】------------------------------------------------------------------------------------
function set( cell ){						//cell = クリックしたマスのtdタグ

	var xy = getXY( cell.id );						//tdのidからxy座標を取り出す
	var tbl = document.getElementById("board");		//id のboard table
	var tds = tbl.getElementsByTagName("td");		//↑からtdを全て取り出す

	if( cell.className == "ban" ){					//className ⇒ allow(許可) or ban(禁止)

		alert("そこには置けません");

	}else{											//classNameがallowだったら

		setBackgroundImg( cell , pieceSrc );		//背景にコマのimgをセット

		setSquareColor( cell );						//セットしたマスの色を塗り替える
		changeClassOnRoot( xy , tds );				//縦横斜めのマスのクラス名を変える

		if( easy == true ){							//assistモードがonだったら
			changeBansColor();						//class banのマスの色を変える
		}

		count--;									//カウントを減らす
		countDraw();								//カウントを表記

		if( count == 0 ){							//パズルクリア時の表記
			alert("やったね！");
		}

		checkStalemate( tds );						//手詰まり(Stalemate)の確認
	}
}


//【タグの背景にimgをセット】-------------------------------------------------------------------------------------------
function setBackgroundImg( tag , src ){
	tag.style.backgroundImage = 'url(img/' + src + '.png)';	//imgのセット
}


//【手詰まり(Stalemate)の確認】-----------------------------------------------------------------------------------------
function checkStalemate( tds ){

	var countAllow = 0;								//置けるマスの数を代入する変数

	for( i = 0 ; i < tds.length ; i++ ){			//boardの全tdを確認
		if( tds[i].className == "allow" ){
			countAllow++;							//allowだけを数える
			break;
		}
	}

	if( countAllow == 0 && count != 0 ){			//置けるマスが無く、コマが残っていたら
		alert("残り " + count + " ヶで手詰まりです。");
	}
}


//【選択したbuttonの色とコマのsrcを変える】-----------------------------------------------------------------------------
function changePiece( button ){

    //buttonのidをそのままsrcに利用してグローバル変数に代入
	pieceSrc = button.id;

	//buttonの背景色を取得
	var buttonStyle = window.getComputedStyle( button );
	var buttonColor = buttonStyle.backgroundColor;

	//クラス名pieceのbuttonを全て取得
	var pieces = document.getElementsByClassName( "piece" );

	//クラス名pieceのbuttonの数だけループを回す
	for( i = 0 ; i < pieces.length ; i++ ){

		//i番目のクラス名pieceのbuttonの背景色を取得
		var tagStyle = window.getComputedStyle( pieces[i] );
		var tagColor = tagStyle.backgroundColor;

		//色が元の色と違ったら
		if( buttonColor != tagColor ){

			//buttonの色を元に戻す
			pieces[i].style.backgroundColor = "lightsalmon";
			pieces[i].style.borderColor = "orange";
		}
	}//選んだbuttonの色を変える
	changeButtonColor( button );
}


//【ボタンの背景色を変える】--------------------------------------------------------------------------------------------
function changeButtonColor( button ){
	button.style.backgroundColor = "lime";
	button.style.borderColor = "limegreen";
}


//【ルール説明の表記】--------------------------------------------------------------------------------------------------
function rule(){
	alert("n×nの盤にn個のクイーンを、"
		+ "\n互いの移動範囲に干渉しないよう盤に配置するパズル"
		+ "\n\n※クィーンは、縦・横・斜めに何マスでも動ける"
		+ "\n※n = 任意の数値");
}


//【ウィンドウを更新する関数(盤のリセット)】----------------------------------------------------------------------------
function f5(){
	window.location.reload();
}


//【補助の有り無しを設定する関数】--------------------------------------------------------------------------------------
function easyMode( buttonTg ){

	var str;

	if( easy == false ){
		easy = true;
		str = "OFF";
		changeBansColor();
	}else{
		easy = false;
		str = "ON";
		boardColor();
	}

	buttonTg.innerHTML = '<span class="verticalText">補助' + str + '</span>';
}


//【盤のサイズ(n×n)を変更する】----------------------------------------------------------------------------------------
function changeSize(){

	var input = prompt("数値(n)を変更すると、「ｎ・クイーン」になります。\n"
					+ "( n×n の盤に n 個のクイーン )","8");

		//入力値の適正を確認
	var tmp = input % 1;

	if( input == null || input <= 0 || tmp != 0 ){
		alert("1以上の数値を入力してください");
		return;
	}else if( input == 2 || input == 3 ){
		alert("解の無い選択です");
		return;
	}else if( input > maxRange ){
		alert("数が大き過ぎます");
		return;
	}

	range = input;
	boardDraw();
}

