document.addEventListener('DOMContentLoaded', function() {

$(window).scroll(function(argument) {

var wScroll = $(this).scrollTop();
//console.log(wScroll);

$('.title').css({
'transform' : 'translate(0px, '+ wScroll /2 +'%)'
})


$('.foreTrooper').css({
'transform' : 'translate(0px, '+ wScroll /30 +'%)'
});


  $('.backTrooper').css({
'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
});


if (wScroll > $('.largeWindow').offset().top - $(window).height()) {
  console.log("hell no");
  $('.largeWindow').css({'background-position':'center '+ (wScroll - $('.largeWindow').offset().top) +'px'});

}
});

$("button").click("animated hinge");



});
