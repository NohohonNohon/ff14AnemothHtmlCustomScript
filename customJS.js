//マップの移動、ズーム操作を無効
map1.touchZoom.disable();
map1.doubleClickZoom.disable();
map1.scrollWheelZoom.disable();
map1.boxZoom.disable();
map1.keyboard.disable();
map1.dragging.disable();

//result関数を上書き
function result(){

var radio = document.getElementsByName('trigger');
var NM = [];
for(let i = 0; i < 20; i++) {
if (!(document.getElementById("NM" + ('00' + (i+1)).slice(-2)).value)){
NM[i] = -1
}else
{
NM[i] = document.getElementById("NM" + ('00' + (i+1)).slice(-2)).value
}
}
var NNM = [];
var NH = [];
  var jikan = new Date();
  var hour =('00'+jikan.getHours()).slice(-2);
  var minute =('00'+jikan.getMinutes()).slice(-2);
  var now = parseInt("" + hour + minute,10);
  var NMb = []
for(let i = 0; i < NM.length; i++) {

  if(NM[i] == -1){
  NH[i] = "[--:--]";
  }else{
  NH[i]='[' + (('00' + NM[i]).slice(-4)).slice(-4,2) + ':' + ('00' + NM[i]).slice(-2) + ']';
  }
	if(document.getElementById('CH1').checked){
		if(NM[i] != -1){
		  if(hour<4 && NM[i] > 2100){
		  NMb[i]=NM[i]-2400;}
		  else{
		 	NMb[i]=NM[i];
		 }
		 }
		 else{
		  NMb[i] = 3000
		 }}
		NMb[i] = parseInt(NMb[i],10);
		if (NMb[i] +200 <= now){
		NH[i] = '[OK!]';
		}
	
}
NNM[0] = "[1]サボテンダー・コリード" + NH[0];
NNM[1] = "[2]ロード・オブ・アネモス" + NH[1];
NNM[2] = "[3]テレス" + NH[2];
NNM[3] = "[4]アネモス・エンペラー" + NH[3];
NNM[4] = "[5]カリスト" + NH[4];
NNM[5] = "[6]ナンバーズ" + NH[5];
NNM[6] = "[7]ジャハンナム" + NH[6];
NNM[7] = "[8]アミメット" + NH[7];
NNM[8] = "[9]カイム" + NH[8];
NNM[9] = "[10]ボンバディール" + NH[9];
NNM[10] = "[11]セルケト" + NH[10];
NNM[11] = "[12]ジャッジメンタル・ジュリカ" + NH[11];
NNM[12] = "[13]ホワイトライダー" + NH[12];
NNM[13] = "[14]ポリュペモス" + NH[13];
NNM[14] = "[15]シームルグ・ストライダー" + NH[14];
NNM[15] = "[16]キング・ハズマット" + NH[15];
NNM[16] = "[17]ファヴニル" + NH[16];
NNM[17] = "[18]アマロック" + NH[17];
NNM[18] = "[19]ラマシュトゥ" + NH[18];
NNM[19] = "[20]パズズ" + NH[19];

var NMR = [];
NMR[0] = "サボテン" + NH[0];
NMR[1] = "タコ" + NH[1];
NMR[2] = "テレス" + NH[2];
NMR[3] = "エンペラ" + NH[3];
NMR[4] = "カリスト" + NH[4];
NMR[5] = "ナンバ" + NH[5];
NMR[6] = "ジャハン" + NH[6];
NMR[7] = "アミメ" + NH[7];
NMR[8] = "カイム" + NH[8];
NMR[9] = "ボンバ" + NH[9];
NMR[10] = "セルケト" + NH[10];
NMR[11] = "ジュリカ" + NH[11];
NMR[12] = "Wライダ" + NH[12];
NMR[13] = "ポリュ" + NH[13];
NMR[14] = "シムルグ" + NH[14];
NMR[15] = "ハズマ" + NH[15];
NMR[16] = "ファヴ" + NH[16];
NMR[17] = "アマロ" + NH[17];
NMR[18] = "ラマシュ" + NH[18];
NMR[19] = "パズズ" + NH[19];




var jikan = new Date();
var hour = jikan.getHours()
for(let i = 0; i < NM.length; i++) {

  if(NM[i] == -1){
  NM[i] = 3000;
  }
  
  else if(hour<4 && NM[i] > 2100){
  NM[i]=NM[i]-2400;
  }
  
    NM[i]=parseInt(NM[i],10);
}
var users = [
    {id:1, time:NM[0], name:NNM[0], namer:NMR[0]},
    {id:2, time:NM[1], name:NNM[1], namer:NMR[1]},
    {id:3, time:NM[2], name:NNM[2], namer:NMR[2]},
    {id:4, time:NM[3], name:NNM[3], namer:NMR[3]},
    {id:5, time:NM[4], name:NNM[4], namer:NMR[4]},
    {id:6, time:NM[5], name:NNM[5], namer:NMR[5]},
    {id:7, time:NM[6], name:NNM[6], namer:NMR[6]},
    {id:8, time:NM[7], name:NNM[7], namer:NMR[7]},
    {id:9, time:NM[8], name:NNM[8], namer:NMR[8]},
    {id:10, time:NM[9], name:NNM[9], namer:NMR[9]},
    {id:11, time:NM[10], name:NNM[10], namer:NMR[10]},
    {id:12, time:NM[11], name:NNM[11], namer:NMR[11]},
    {id:13, time:NM[12], name:NNM[12], namer:NMR[12]},
    {id:14, time:NM[13], name:NNM[13], namer:NMR[13]},
    {id:15, time:NM[14], name:NNM[14], namer:NMR[14]},
    {id:16, time:NM[15], name:NNM[15], namer:NMR[15]},
    {id:17, time:NM[16], name:NNM[16], namer:NMR[16]},
    {id:18, time:NM[17], name:NNM[17], namer:NMR[17]},
    {id:19, time:NM[18], name:NNM[18], namer:NMR[18]},
    {id:20, time:NM[19], name:NNM[19], namer:NMR[19]}
];





if(radio[0].checked){
const order = [
    {key: "id", reverse: false}];
users.sort(sort_by(order));
var shout="/sh " + users[0].name + "、" + users[1].name + "、" + users[2].name + "、" + users[3].name + "、" + users[4].name + "、\n/wait 1\n/sh " + users[5].name + "、" + users[6].name + "、" + users[7].name + "、" + users[8].name + "、" + users[9].name + "、\n/wait 1\n/sh " + users[10].name + "、" + users[11].name + "、" + users[12].name + "、" + users[13].name + "、" + users[14].name + "、\n/wait 1\n/sh " + users[15].name + "、" + users[16].name + "、" + users[17].name + "、" + users[18].name + "、" + users[19].name;
}
else if(radio[1].checked){
const order = [
    {key: "time", reverse: false},
    {key: "id", reverse: false}];
users.sort(sort_by(order));
var shout="/sh " + users[0].name + "、" + users[1].name + "、" + users[2].name + "、" + users[3].name + "、" + users[4].name + "、\n/wait 1\n/sh " + users[5].name + "、" + users[6].name + "、" + users[7].name + "、" + users[8].name + "、" + users[9].name + "、\n/wait 1\n/sh " + users[10].name + "、" + users[11].name + "、" + users[12].name + "、" + users[13].name + "、" + users[14].name + "、\n/wait 1\n/sh " + users[15].name + "、" + users[16].name + "、" + users[17].name + "、" + users[18].name + "、" + users[19].name;
}
if(radio[2].checked){
const order = [
    {key: "id", reverse: false}];
users.sort(sort_by(order));
var shout="/sh " + users[0].namer + "、" + users[1].namer + "、" + users[2].namer + "、" + users[3].namer + "、" + users[4].namer + "、" + users[5].namer + "、" + users[6].namer + "、" + users[7].namer + "、" + users[8].namer + "、" + users[9].namer + "、" + users[10].namer + "、" + users[11].namer + "、" + users[12].namer + "、" + users[13].namer + "、" + users[14].namer + "、" + users[15].namer + "、" + users[16].namer + "、" + users[17].namer + "、" + users[18].namer + "、" + users[19].namer;
}
else if(radio[3].checked){
const order = [
    {key: "time", reverse: false},
    {key: "id", reverse: false}];
users.sort(sort_by(order));
var shout="/sh " + users[0].namer + "、" + users[1].namer + "、" + users[2].namer + "、" + users[3].namer + "、" + users[4].namer + "、" + users[5].namer + "、" + users[6].namer + "、" + users[7].namer + "、" + users[8].namer + "、" + users[9].namer + "、" + users[10].namer + "、" + users[11].namer + "、" + users[12].namer + "、" + users[13].namer + "、" + users[14].namer + "、" + users[15].namer + "、" + users[16].namer + "、" + users[17].namer + "、" + users[18].namer + "、" + users[19].namer;
}




document.getElementById("result").value=shout;
}