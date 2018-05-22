//ローカル内のサウンドファイルの名前
var sound_name;

/*ドレミの画像*/
/*ド：ドーナツ　レ：レモン　ミ：みんな組体操　ファ：ファイトがんばる　ソ：空　ラ：ラッパ　シ：幸せ*/

//おみくじ関数
function omikuji (){
    //0~6までの乱数の生成
    var dice = Math.floor(Math.random() * 7);
    //画像のパス
    var image_name;
    //音色の名称
    var notes_name;

    //おみくじの結果の分岐
    if (dice == 0) {
        image_name = "do.png";
        sound_name = "piano-c.wav";
        notes_name = "ド";
    }  else if  (dice == 1) {    
        image_name = "re.png";
        sound_name = "piano-d.wav";
        notes_name = "レ";
    }  else if  (dice == 2) {
        image_name = "mi.png";
        sound_name = "piano-e.wav";
        notes_name = "ミ";
    }　else if  (dice == 3) {
        image_name = "fa.png";
        sound_name = "piano-f.wav";
        notes_name = "ファ";
    }　else if  (dice == 4) {
        image_name = "so.png";
        sound_name = "piano-g.wav";
        notes_name = "ソ";
    }　else if  (dice == 5) {
        image_name = "ra.png";
        sound_name = "piano-a.wav";
        notes_name = "ラ";
    }　else if  (dice == 6) {
        image_name = "si.png";
        sound_name = "piano-b.wav";
        notes_name = "シ";
    }　else {
        image_name = "do.png";
        sound_name = "piano-c2.wav";
        notes_name = "ド#";
    }

    //音の再生
    playSound();

    document.getElementById("saisyo").style["display"] = "none";
    document.getElementById("kekka").src = "images/" + image_name;
    document.getElementById("notes").innerHTML = notes_name;
    document.getElementById("kekka").style["display"] = "inline";
}


/*-----------------------------------------------*/
/*--------------------media--------------------*/
/*-----------------------------------------------*/
var media = null;
var mediaTimer = null;
var srcFile;

document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    console.log("ready");
}

function getPath() {
    var str = location.pathname;
    var i = str.lastIndexOf('/');
    return str.substring(0,i+1);
}

function playSound(){
    srcFile= "sound/" + sound_name;
    media = new Media (getPath() + srcFile);
    media.play();
    
    playStop();
}

function playStop(){
    //音の再生停止
    setTimeout(function() {
        media.stop();
    }, 1000000);
}
