// change background navbar
let changePlace = $('#about').offset().top;
$(window).scroll(function () {
  if($(window).scrollTop()>changePlace - 100)
  {
    $('.navbar').css({'backgroundColor' : 'black' , 'transition' : '1s'});
  }
  else
  {
    $('.navbar').css({'backgroundColor' : 'transparent' , 'transition' : '1s'});
  }
})

// top botton 
let sectionOffset = $('#about').offset().top;
$(window).scroll(function () {
  if($(window).scrollTop()>sectionOffset - 100)
  {
    $('#topBtn').fadeIn(1000)
  }
  else
  {
    $('#topBtn').fadeOut(1000)
  }
})
$('#topBtn').click(function () {
  $('body,html').animate({scrollTop:0},1000)
})