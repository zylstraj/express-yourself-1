$('document').ready(function(){
  console.log("Hello, click on my if you dare!");
  $('section, nav, aside, header, footer').click(function(){
    $(this).toggleClass('whimsy');
  });
  $('.reset_classes').click(function(){
    $('*').removeClass('whimsy');
  });
});
