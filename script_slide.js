$(function(){
  var page = 0,
      $wrapper = $(".wrapper"),
      $ulwrap = $wrapper.find(".wrap .ul-wrap"),
      pageall=$ulwrap.find("li").length;
  $(".list-wrap li").click(function(){
    page = $(this).index();
    fade(page);
    slide(page);
  });
  $(".button li a.prev").click(function(){
    page--;
    if(page < 0){page = pageall-1};
    fade(page);
    slide(page);
  });
  $(".button li a.next").click(function(){
    page++;
    if(page >= pageall){page = 0};
    fade(page);
    slide(page);
  });
  function fade(page){
    $(".button li a").fadeIn();
    if(page == 0){$(".button li a.prev").fadeOut();};
    if(page == pageall-1){$(".button li a.next").fadeOut();};
  };
  function slide(index){
    $ulwrap.css("margin-left",-(index*100)+"%");
    $wrapper.find(".list-wrap li").eq(index).children("a").addClass("on").parent().siblings().children("a").removeClass("on");
    autoplay();
  };
  //timer
  var timer = false;
  function strik(){
    $(".button li a.next").trigger("click");
  };
  function autoplay(){
    if(timer != false){
      clearTimeout(timer);
      timer = false;
    };
    timer = setTimeout(strik,3*1000);
  };
  autoplay();
});