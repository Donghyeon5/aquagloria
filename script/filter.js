$(function(){
  
  $('#program1').click(function () {
    $('.filter1').show();
    $('.filter2, .filter3').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
  });
  $('#program2').click(function () {
    $('.filter2').show();
    $('.filter1, .filter3').hide();
  });
  $('#program3').click(function () {
    $('.filter3').show();
    $('.filter1, .filter2').hide();
  });
  $('.filter li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  //메뉴 클릭 시 체크박스 해제
  $(function(){
    $(".sidebar a").click(function(){
        $('#menuicon').prop('checked',false);
    });
  });
});
