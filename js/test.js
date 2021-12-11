function R_Click(p_janken_r) {
    //"janken"のリストを作成
    let janken = ['「グー」','「チョキ」','「パー」',];
    
    //Math.random() で乱数を作成
    let janken_r = Math.floor( Math.random() * 3);
    
    //"プレイヤーのjanken"のリストを作成
    let p_janken = ['「グー」','「チョキ」','「パー」'];
        
        //勝負の判定プログラム
        if (janken_r === p_janken_r) {
            Result_end = "【あいこ】です";    
        }else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "わたしの【勝ち】";
        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "わたしの【勝ち】";
        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "わたしの【勝ち】";
        }else {
            Result_end = "わたしの【負け】";
        }

        //結果を表示するためのプログラム
        document.getElementById("jankenpon").src="img/jan" + janken_r + ".jpg";
        document.getElementById("Rejan1").innerHTML = "コンピュータは" + janken[janken_r] ; 
        document.getElementById("Result").innerHTML = Result_end;
        document.getElementById("Rejan2").innerHTML = "あなたは" + p_janken[p_janken_r] +"を選びました。";
        document.getElementById("jankenpon2").src="img/jan" + p_janken_r + ".jpg";
    }