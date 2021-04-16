$(function(){
  $('#to-top-btn').on('click', function () {
    $('html,body').animate({ scrollTop: 0 });
  });

  $(window).scroll(function(){
    if(
      $(this).scrollTop()>=600
    ){
      $('#to-top-btn').show();  //display:blockになる
    }else{
      $('#to-top-btn').hide();　//display:noneになる
    }
  });


  /* 
  -----ハンバーガー-----
  */

    $('#btn').on('click',function(){
      $('#btn>span').toggleClass('click');
      $('#g-nav-sp').slideToggle(200);
    });



  /* 
  -----コピーライトの西暦を呼び出し-----
  */
//new Date();で今日の日付dateにいれる
var date = new Date();
//dateの西暦をmyYearにいれる(myYearは2020)
var myYear = date.getFullYear();
//myYear2020をthisYearのついた要素にいれる
document.getElementById('thisYear').innerHTML =(myYear);

　
  //ハンバーガーの開閉
  $(window).on('load resize',function(){
    if(window.matchMedia('(max-width:992px)').matches){
    $('#g-nav').hide();
    $('#btn').removeClass('is-active');
    }else{
      $('#g-nav').show();
    }
  });

  $('#btn').on('click',function(){
    $(this).toggleClass('is-active');
    $('#g-nav:not(:animated)').slideToggle(200);
  });



/* 
-----navの内部リンク-----
 */

  // #で始まるアンカーをクリックした場合に処理
  //not('a.notscroll')追加
  $('a[href^="#"]').not('a.notscroll').on('click',function() {

　// 移動先を取得
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得　h2より上でとめたいから−90
    var position = target.offset().top - 90;
    // スムーススクロール
    $('body,html').animate({scrollTop:position});
  });


  
/* 
-----ここからcontact goofleform-----
 */


  $('#g-form').submit(function (event) {
    var formData = $('#g-form').serialize();
    $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe3BWF59bCpI6bQEudQzX1xHAsEEe_a_KOtCwQ-2xkuPIw1bA/formResponse",
    data: formData,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function(){
        window.location.href = "thanks.html";
        },
      200: function(){
        //失敗したときの処理
        document.write('失敗しました');
        }
      }
    });
    //googleformへのページ遷移をキャンセル
    event.preventDefault();
    });

        
});