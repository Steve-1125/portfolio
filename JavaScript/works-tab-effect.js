$(function() {
    $('.works__menu--item').click(function() {
  
      //現在activeが付いているクラスからactiveを外す
      $('.active').removeClass('active');
  
      //クリックされたタブメニューにactiveクラスを付与。
      $(this).addClass('active');
  
      //一旦showクラスを外す
      $('.show').removeClass('show');
  
      //クリックしたタブのインデックス番号取得
      const index = $(this).index();
  
      //タブのインデックス番号と同じコンテンツにshowクラスをつけて表示する
      $('.works__box--contents').eq(index).addClass('show');
    });
});