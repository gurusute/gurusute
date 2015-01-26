// HTMLの一番下辺りで読み込み
// 商品名が表示される部分は全て<span class="productname"></span>で囲む

function removeProductIds(){
    // .textを置換する関数
    function removeProductId(){
       $(this).text($(this).text().replace(/\[商品番号:\d+\]/,""));
       $(this).css("visibility","visible");
    }

    // 全てのproductnameクラスに適用
    $(".productname").each(removeProductId)
}

// メイン処理
removeProductIds()

