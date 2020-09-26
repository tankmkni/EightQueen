/**
 * ボタンの出し入れ
 */

//【最初のボタン】------------------------------------------------------------------------------------------------------
function drawTopButtons(){

	var tag = document.getElementById("buttons");		//挿入されるタグの取得

	var top = '<button onclick="';						//挿入するタグの最初の文
	var middle = '"><span class="verticalText">';		//挿入するタグの真ん中の文
	var end = '</span></button>';						//挿入するタグの最後の文

	tag.innerHTML = top + 'drawMenuButtons()' + middle + 'MENU' + end
		  		  + top + 'easyMode(this)' + middle + 'ASSIST' + end
				  + top + 'boardDraw()' + middle + 'RESET' + end
				  ;

	setButtonAttribute( "class" , "topButtons" );		//各ボタンに属性を追加
}


//【MENUで呼び出されるボタン】------------------------------------------------------------------------------------------
function drawMenuButtons(){

	var tag = document.getElementById("buttons");		//挿入されるタグの取得

	var top = '<button onclick="';	//挿入するタグの最初の文
	var middle = '">';									//挿入するタグの真ん中の文
	var end = '</button>';								//挿入するタグの最後の文

	tag.innerHTML = top + 'drawTopButtons()' + middle + '戻る' + end
		  		  + top + 'rule()' + middle + 'ルール' + end
				  + top + 'randomBoardColor()' + middle + '盤の色' + end
				  + top + 'randomBodyColor()' + middle + '背景色' + end
				  + top + 'changeSize()' + middle + 'n数変更' + end
				  + top + 'pieceChangeButton()' + middle + 'コマ変更' + end
				  ;

	setButtonAttribute( "class" , "menuButtons" );		//各ボタンに属性を追加
}


//【コマの変更ボタンを表示する】----------------------------------------------------------------------------------------
function pieceChangeButton(){

	var tag = document.getElementById("buttons");

	var pieceNames = new Array("beetle","alf","DarthVader","JollyRoger","knight"
								,"hat","penguin","mario","Luffy","naruto","edo");	//駒の種類

	var top = '<button id="';		//挿入するタグの最初の文
	var end = '"></button>';		//挿入するタグの最後の文
	var tags = "";					//挿入するタグを記載する文

	for( i = 0 ; i < pieceNames.length ; i++ ){
		tags += top + pieceNames[i] + end;		//駒の種類の数分、buttonタグの文を作成して連結
	}

	tag.innerHTML = tags;						//タグの挿入

	for( i = 0 ; i < pieceNames.length ; i++ ){
		var button = document.getElementById( pieceNames[ i ] );		//駒をidで取得
		setBackgroundImg( button , pieceNames[ i ] );					//各駒にimgを挿入
	}

	setButtonAttribute( "onclick" , "changePiece( this )" );			//各駒に属性を追加

	tags = '<button onclick="drawMenuButtons()"><span>戻る</span></button>';
	tag.innerHTML = tags + tag.innerHTML;								//戻るボタンを先頭に追加

	setButtonAttribute( "class" , "piece" );							//各ボタンに属性を追加

	var buttons = document.getElementsByTagName( "button" );			//buttonタグを取得
	for( i = 0 ; i < buttons.length ; i++ ){
		var id = buttons[ i ].id;										//全てのボタンのidを確認して、
		if( id == pieceSrc ){											//選択している駒のボタンの色を変更
			changeButtonColor( buttons[ i ] );
		}
	}
}


//【buttonタグに属性を追加する】----------------------------------------------------------------------------------------
function setButtonAttribute( attribute , value ){
	var buttons = document.getElementsByTagName( "button" );		//buttonタグを取得
	for( i = 0 ; i < buttons.length ; i++ ){
		buttons[i].setAttribute( attribute , value );				//全てのボタンに属性と値を追加
	}
}
