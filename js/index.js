
//cc = null;

$('.color').click(function (){

  cc = $(this).css("background");
 //alert( $(this).css("background-color"));
  //alert(cc)
  
});

$('.box').click(function (){
  
  if($(this).css("background") == cc){
     $(this).css("background","");
  }else{
    $(this).css("background",cc);
  }
  //  $(this).removeAttr("style");
    // });   
  //alert(cc);
  $('#reset').click(function (){
    $('.box').css("background","");
  })
});