/**
 * ボードを描く
 */
	var col;								//【色を指定する文を代入する変数】
	var c1 = "red";							//【色を指定する文を代入する変数(初期値=赤)】
	var c2 = "black";						//【色を指定する文を代入する変数(初期値=黒)】
	var c3 = "whitesmoke";					//【色を指定する文を代入する変数(初期値=灰)】
	var ac = "orange";					    //【assistモードが ON の時の色(初期値=オレンジ)】


//【boardタグ内のHTMLを書き換える】-------------------------------------------------------------------------------------
function boardDraw(){

	var str = boardString();							//挿入するタグを生成
	document.getElementById('board').innerHTML = str;	//タグを挿入

	count = range;										//カウントを設定
	countDraw();										//カウントを表記
	boardColor();										//盤に色をつける
	capChange();										//タイトルを書き換える
}


//【tableに挿入するタグを作製】-----------------------------------------------------------------------------------------
function boardString(){

	var str = '';

	for( y = 0 ; y < range ; y++ ){			//【縦(y)の列を表記するループ】

		str += "<tr>";											//<tr>タグ

		for( x = 0 ; x < range ; x++ ){		//【横(x)の列を表記するループ】

			//td tagの属性を代入
			str += '<td'										//<td>タグ開始
				+ ' id="' + makeId( x , y ) + '"'				// id
				+ ' class="allow"'								// class
				+ ' onclick="set( this )"'						// onclick
				+ '></td>';										//<td>綴じタグ
		}

		str +=  "</tr>" ;  										//<tr>綴じタグ
	}

	return str;
}


//【タイトルの内容を書き換える】-----------------------------------------------------------------------------------
function capChange(){

	var str = '<span class="verticalText">エイト・クイーン</span>';

	if( range != 8 ){
		str = '<span class="verticalText"><span id="n">ｎ</span>'
			+ '<span id="bracket">（' + range + '）</span>'
			+ '・クイーン</span>';
	}

	document.getElementById('title').innerHTML = str;
}


//【盤の色を変える関数】------------------------------------------------------------------------------------------------
function boardColor(){

	var tbl = document.getElementById( "board" );						//id名 boardの<table>の取得
	var tds = tbl.getElementsByTagName( "td" );							//↑の<td>の取得

	tbl.style.borderColor = c3;											//枠線の色の変更

	for( y = 0 ; y < range ; y++){						//y(縦)軸のループ
		for( x = 0 ; x < range ; x++){					//x(横)軸のループ

			var cell = tds[ index( x , y ) ];		//座標から配列内での位置を特定
			setSquareColor( cell );			//マスの座標で色を塗り分ける
		}
	}
}


//【マスの座標で色を塗り分ける】----------------------------------------------------------------------------------------
function setSquareColor( cell ){

	var xy = getXY( cell.id );			//tdのidからxy座標を取り出す

	if( ( xy[0] + xy[1] ) % 2 == 0 ){	//市松模様にするための分岐
		col = c1;
	}else{
		col = c2;
	}

	cell.style.backgroundColor = col;	//色の変更
	cell.style.border = "0px";			//マスの枠を消す
}


//【idからXY座標を取り出す】-------------------------------------------------------------------------------------------
function getXY( id ){
	for( y = 0 ; y < range ; y++ ){
		for( x = 0 ; x < range ; x++ ){
			var tmpId = makeId( x , y );	//tdのidと同じ方法でサンプルを作る
			if( id == tmpId ){				//idとサンプルが一致したら
			    return new Array(x,y);		//その時点のxとyを配列にして返す
			}
		}
	}
}


//【id名を作製して返す関数】--------------------------------------------------------------------------------------------
function makeId( x , y ){
	return "X" + x + "Y" + y;
}


//【x,y座標から１次配列の添え字を導き出す】-----------------------------------------------------------------------------
function index( x , y ){
	return ( y * range ) + x;
}


//【class = ban の色の塗り替え】----------------------------------------------------------------------------------------
function changeBansColor(){
	var bans = document.getElementsByClassName('ban');	//class名banを全て取り出して
	for( i = 0 ; i < bans.length ; i++ ){
		bans[i].style.backgroundColor = ac;				//１つ１つ色を塗り替える
		bans[i].style.border = "0.1px";					//borderの太さを指定（１が最小？）
		bans[i].style.borderStyle = "solid";			//borderの種類を指定
	}
}


//【カウントを表記】----------------------------------------------------------------------------------------------------
function countDraw(){
	var counter = document.getElementsByTagName( "legend" )[0];			//legend tagを取得
//	var msg = "Remaining   " + count + " / " + range;					//残りカウント文
	var msg = "残り   " + count + " / " + range;						//残りカウント文
	counter.innerText = msg;											//タグに残りカウント表記
}