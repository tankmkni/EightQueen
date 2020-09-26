/**
 * ルートチェック
 */

//【１マスのクラス名を変える】------------------------------------------------------------------------------------------
function changeClass( tg , name ){
	tg.className = name;					//受け取ったnameにクラス名を変更する
}


//【移動範囲のマスのクラス名を変える】----------------------------------------------------------------------------------
function changeClassOnRoot( xy , tgs ){

	var x , y , ind;								//使用する変数

	//【縦横のマスのクラス名を変える】
	for( i = 0 ; i < range ; i++ ){
		ind = index( xy[0] , i );					//x(横)を固定してy(縦)の添え字を増やす
		changeClass( tgs[ind] , "ban" );			//マスのクラス名を"ban"(禁止)に変更

		ind = index( i , xy[1] );					//y(縦)を固定してx(横)の添え字を増やす
		changeClass( tgs[ind] , "ban" );			//マスのクラス名を"ban"(禁止)に変更
	}


	//【斜めのマスのクラス名を変える】
	for( i = 0 ; i < range ; i++ ){ 			// 置いたコマの左上方向
		if( xy[0] - i < 0 || xy[1] - i < 0 ){		//ボードからはみ出たら
			break;									//ループ終了
		}
		x = xy[0] - i;								//ループ変数で添え字を加減
		y = xy[1] - i;
		ind = index( x , y );						//加減した添え字でマスを特定
		changeClass( tgs[ind] , "ban" );			//マスのクラス名を"ban"(禁止)に変更
	}											//以下同

	for( i = 0 ; i < range ; i++ ){ 			// 置いたコマの右上方向
		if( xy[0] + i >= range || xy[1] - i < 0 ){
			break;
		}
		x = xy[0] + i;
		y = xy[1] - i;
		ind = index( x , y );
		changeClass( tgs[ind] , "ban" );
	}

	for( i = 0 ; i < range ; i++ ){				 // 置いたコマの右下方向
		if( xy[0] + i >= range || xy[1] + i >= range ){
			break;
		}
		x = xy[0] + i;
		y = xy[1] + i;
		ind = index( x , y );
		changeClass( tgs[ind] , "ban" );
	}

	for( i = 0 ; i < range ; i++ ){				 // 置いたコマの左下方向
		if( xy[0] - i < 0 || xy[1] + i >= range ){
			break;
		}
		x = xy[0] - i;
		y = xy[1] + i;
		ind = index( x , y );
		changeClass( tgs[ind] , "ban" );
	}
}