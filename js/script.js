jQuery(function($) {
  // ページ内リンク
  var floatBarHeight = $(".float-bar").outerHeight();

  $("a[href^='#']").on("click", function() {
    var sectionName = $(this).attr("href");
    var destination = $(sectionName).offset().top - floatBarHeight;

    if ( $(this).is("a[href='#facebook']") ) {
      $("html, body").animate({scrollTop:destination - 200} , 400, "swing");
    } else {
      $("html, body").animate({scrollTop:destination} , 400, "swing");
    }

    //instagram

    if ( $(this).is("a[href='https://www.instagram.com/ibbjapan/']") ) {
      $("html, body").animate({scrollTop:destination - 200} , 400, "swing");
    } else {
      $("html, body").animate({scrollTop:destination} , 400, "swing");
    }


    return false;
  });
  
  
  // ラジオボタン
  $("select[name='お問い合わせ内容']").on("change", function() {
    var about = $("option:selected").attr("value"),
        $textarea = $("textarea[name='本文']");

    switch (about) {
      default:
        $textarea.attr("placeholder", "");
        break;

      case "商品の購入について（個人様）":
        $textarea.attr("placeholder", "例）どこで買えますか、またいくらで販売してますか？");
        break;

      case "商品の正規代理店について（法人様）":
        $textarea.attr("placeholder", "例）商品を販売する為の手続き方法はどうすればいいでしょうか？");
        break;

      case "商品についての感想":
        $textarea.attr("placeholder", "例）日本製なのに安くて燃費も良くなりました。");
        break;

      case "採用について":
        $textarea.attr("placeholder", "例）一緒にオイルを販売したいです。");
        break;
    }
  });
  
  
  // ハンバーガーメニュー
  $(window).on("load resize", function() {
    var width = $(window).innerWidth();

    if ( width <= 767 ) {
      $(".hbg-btn").on("click", function() {
        if ( $(this).hasClass("opened") ) {
          $(".gnav").not(":animated").animate({right:-180}, 400, "swing", function() {
            $(".hbg-btn").removeClass("opened").find(".fa").attr("class", "fa fa-bars");
          });

        } else {
          $(".gnav").not(":animated").animate({right:0}, 400, "swing", function() {
            $(".hbg-btn").addClass("opened").find(".fa").attr("class", "fa fa-times");
          });
        }
      });
    }
  });
});
