// ==UserScript==
// @name         FF14エウレカ・アネモス編支援ツールカスタムスクリプト
// @namespace    nohohon
// @version      1.0.2
// @description  FF14　エウレカ・アネモス編支援ツールの機能追加・修正を行う
// @author       nohohon
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==

//正式に実装されため、動作しないように@includeを削除
(function() {
    var importFunction = (function() {

        var NMList = [
            [/サボテン\[(..):(..)\]/i,'NM01'],[/タコ\[(..):(..)\]/i,'NM02'],[/テレス\[(..):(..)\]/i,'NM03'],[/エンペラ\[(..):(..)\]/i,'NM04'],[/カリスト\[(..):(..)\]/i,'NM05'],[/ナンバ\[(..):(..)\]/i,'NM06'],[/ジャハン\[(..):(..)\]/i,'NM07'],[/アミメ\[(..):(..)\]/i,'NM08'],[/カイム\[(..):(..)\]/i,'NM09'],[/ボンバ\[(..):(..)\]/i,'NM10'],[/セルケト\[(..):(..)\]/i,'NM11'],[/ジュリカ\[(..):(..)\]/i,'NM12'],[/Ｗライダ\[(..):(..)\]/i,'NM13'],[/Wライダ\[(..):(..)\]/i,'NM13'],[/ポリュ\[(..):(..)\]/i,'NM14'],[/シムルグ\[(..):(..)\]/i,'NM15'],[/ハズマ\[(..):(..)\]/i,'NM16'],[/ファヴ\[(..):(..)\]/i,'NM17'],[/アマロ\[(..):(..)\]/i,'NM18'],[/ラマシュ\[(..):(..)\]/i,'NM19'],[/パズズ\[(..):(..)\]/i,'NM20'],
            [/サボテンダー:(..):(..)/i,'NM01'],[/ロード:(..):(..)/i,'NM02'],[/テレス:(..):(..)/i,'NM03'],[/エンペラー:(..):(..)/i,'NM04'],[/カリスト:(..):(..)/i,'NM05'],[/ナンバーズ:(..):(..)/i,'NM06'],[/ジャハンナム:(..):(..)/i,'NM07'],[/アミメット:(..):(..)/i,'NM08'],[/カイム:(..):(..)/i,'NM09'],[/ボンバディール:(..):(..)/i,'NM10'],[/セルケト:(..):(..)/i,'NM11'],[/ジュリカ:(..):(..)/i,'NM12'],[/ホワイトライダー:(..):(..)/i,'NM13'],[/ポリュペモス:(..):(..)/i,'NM14'],[/シームルグ:(..):(..)/i,'NM15'],[/ハズマット:(..):(..)/i,'NM16'],[/ファヴニル:(..):(..)/i,'NM17'],[/アマロック:(..):(..)/i,'NM18'],[/ラマシュトゥ:(..):(..)/i,'NM19'],[/パズズ:(..):(..)/i,'NM20'],
            [/Saboten\[(..):(..)\]/i,'NM01'],[/Tako\[(..):(..)\]/i,'NM02'],[/Teles\[(..):(..)\]/i,'NM03'],[/Emperor\[(..):(..)\]/i,'NM04'],[/Callist\[(..):(..)\]/i,'NM05'],[/Number\[(..):(..)\]/i,'NM06'],[/Jahn\[(..):(..)\]/i,'NM07'],[/Amemet\[(..):(..)\]/i,'NM08'],[/Caym\[(..):(..)\]/i,'NM09'],[/Bomber\[(..):(..)\]/i,'NM10'],[/Serket\[(..):(..)\]/i,'NM11'],[/Julika\[(..):(..)\]/i,'NM12'],[/Rider\[(..):(..)\]/i,'NM13'],[/Polyp\[(..):(..)\]/i,'NM14'],[/Simurgh\[(..):(..)\]/i,'NM15'],[/King\[(..):(..)\]/i,'NM16'],[/Fafnir\[(..):(..)\]/i,'NM17'],[/Rock\[(..):(..)\]/i,'NM18'],[/Lama\[(..):(..)\]/i,'NM19'],[/Pazuzu\[(..):(..)\]/i,'NM20'],
        ];

        /**
        * テキストから時間を取り込む
        */
        function importText(){
            var text = $('#importText').val();
            //時間を設定
            for (var i = 0; i < NMList.length; i++) {
                try {
                    var pattern = NMList[i][0];
                    var result = text.match(pattern);
                    result[0] = '';
                    var time = result.join('');
                    if (time.search(/^[0-9]+$/) == 0){
                        //取得した時間が数値の場合、時間を設定
                        $('#' + NMList[i][1]).val(time);
                    }
                } catch (e) {
                    //console.log(e);
                }
            }
        }

        var global = {

            /**
             * 初期処理
             */
            init: function() {
                //縦/横バージョンでテキストのサイズを変更
                var colspan = '2';
                if(location.href == 'https://mogaasa.web.fc2.com/anemothb.html') {
                    colspan = '21';
                } else if(location.href == 'https://mogaasa.web.fc2.com/anemothc.html') {
                    colspan = '1';
                }
                //インポート用テキストの追加
                $('#result').parent().parent().parent().append('<tr><td colspan="' + colspan + '"><textarea id="importText" rows="3" style="width: 100%;" placeholder="テキストから時刻を取り込みます。&#13;&#10;シャウトされたNM情報のテキストを入力してください。&#13;&#10;英語や別のツールで出力されたテキストも可能です。"></textarea></td></tr>');
                //インポートボタンの追加
                $('input[name="Copy"]').parent().append('<input type="button" id="importBtn" name="Import" value="取込み" style="margin-left:20px;">');
                $('#importBtn').on('click', importText);
                //スクリプトを挿入し、以下の処理を行う
                //・result関数を上書きし、Wライダの略称を修正(むーむーのネタ帳さんのツールとの互換性のため)
                //・マップの拡大縮小移動を無効にする
                //・checkNM関数を上書きし、日付変更時の計算を修正
                $('<script>')
                    .attr('src', 'https://cdn.rawgit.com/NohohonNohon/ff14AnemothHtmlCustomScript/1.0.1/customJS.js')
                    .appendTo('head');
                //マップのズームボタン非表示
                $(".leaflet-control-zoom").css("visibility", "hidden");
            }
        };
        return global;
    })();

    // 初期処理の実行
    importFunction.init();
})();