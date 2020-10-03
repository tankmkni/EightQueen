<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<title>index</title>
<style>
body{
	background:tomato;
	color:white;
	font-size:24px;
}
#container{
	margin:auto;
	max-width:70vw;
	min-width:850px;
}
fieldset{
	border:5px double white;
}
legend{
	
	font-size:26px;
}

.navigation {
  font-weight:bold;
  /* flexboxで要素を真ん中に指定 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  width:100%;
  padding: 0;
  margin: 0;
  height: 60px;
  /* ポジションを相対的な位置に指定 */
  position:relative;
}
.navigation ul {
  display: block;
  width:100%;
  background: tomato;
  /* リストの無駄なスタイルを削除 */
  list-style:none;
  padding:0 20px;
  margin: 0;
  height: 60px;
}
.navigation ul li {
  display: inline-block;
  background: chocolate;
  border: 4px groove chocolate;
  border-radius:3%;
}
.navigation ul li a {
  color:white;
  display:block;
  padding:0px 40px;
  /* リンク指定した要素のスタイルを削除 */
  text-decoration:none;
  float: left;
  height: 50px;
  line-height: 50px;
}
.navigation ul li:hover {
  /* ナビゲーションをマウスオーバーした際のアニメーションと速度を指定 */
  transition: .7s;
  background: maroon;
}
.navigation ul li:hover > a{
  /* ナビゲーションの文字をマウスオーバーした際のアニメーションと速度を指定 */
  transition: .5s;
  color:white;
}


</style>
</head>
<body>
<div id="container">
	<h1>Eight Queen</h1>
	
  <div class="navigation">
    <ul>
      <li><a href="EightQueen.html" target="_blank">ゲーム開始</a></li>
      <li><a href="SourceCode.zip">ソースコード</a></li>
      <li><a href="ProjectDocuments.zip">プロジェクト文書</a></li>
    </ul>
  </div>
	
	<fieldset>
		<legend>作品プロフィール</legend>
		<dl>
			<dt>使用言語：</dt>
			<dd>HTML , JavaScript , CSS</dd>
			<dt>概要：</dt>
			<dd>8×8マスの盤に、8ヶのクイーンを移動範囲が重ならないように配置するパズルゲーム</br>
				レスポンシブデザインを取り入れ、画面長の縦/横に合わせてボタンなどの配置が変わる</dd>
		</dl>
	</fieldset>
</div>
</body>
</html>
