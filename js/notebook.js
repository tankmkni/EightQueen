/**************************************************************
 *
 *HTML を書き換える
 *document.getElementById('choice').textContent = new Date();
 *
 *
 *************************************************************/
/**************************************************************
 *
 * cssの値を取得
div {
	color: red ;
	border: 1px solid #888 ;
	background-color: #fffff0 ;
}
*//*

// <div id="target"> ... </div>
var element = document.getElementById( "target" ) ;

var cssStyleDeclaration = getComputedStyle( element, null ) ;

var a = cssStyleDeclaration.getPropertyValue( "color" ) ;

 *
 *************************************************************/
/**************************************************************

*styleの値を取得
function test(){

//	var tag = document.getElementsByTagName("table");
	var tag = document.getElementById("board");
	var style = window.getComputedStyle(tag);
	var color = style.color;
	var width = style.width;
	var height = style.height;

	var a = style.getPropertyValue( "height" );
	alert(a);

	alert("color:"+color
		+ "//width:"+width
		+ "//height:"+height);
}
/**************************************************************/
/**************************************************************
 *
 * //コマをinnerHTMLで入れていた場合、うまくstyleが適用できず、cellが大きくなってしまった
 *
//		var tdStyle = window.getComputedStyle(cell);
//		var tdHeight = tdStyle.height;
//		var tdWidth = tdStyle.width;
//		alert("td "+tdHeight+":"+ tdWidth);
//
//		var str = '<img src="' + pieceSrc + '" alt="コマ">';		//img tag
//		cell.innerHTML = str;										//img tag の挿入

//		var img = cell.getElementsByTagName("img");
//		img[0].style.width = '90%';
//		img[0].style.height = '90%';
//		img[0].style.margin = '0 auto';
//		img[0].style.position = 'center center';


	//タグのstyleの値を取得する
//		var img = cell.getElementsByTagName("img");
//		var imgStyle = window.getComputedStyle(img[0]);
//		var imgHeight = imgStyle.height;
//		var imgWidth = imgStyle.width;
//
//		var tdStyle = window.getComputedStyle(cell);
//		var tdHeight = tdStyle.height;
//		var tdWidth = tdStyle.width;
//
//		alert("img "+imgHeight+":"+ imgWidth +" / td "+tdHeight+":"+ tdWidth);

	//背景にimgをセット
//	cell.style.background = 'url(' + pieceSrc + ') no-repeat center center';

 **************************************************************/

	//テーブルの枠線と枠線の隙間の有無を指定
//	/*border-collapse:collapse;*/←大外のセルだけ大きくなってしまう？？？
//	/*border-collapse:separate;*/


	/*cssで縦中央寄せ
	display:table-cell;
	vertical-align:middle;
	*/
