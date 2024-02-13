$(document).ready(function(){
    $('.btn').click(function(){  //event function
       
    let label=$('.btn').html(); //DOM method
    if(label=='FADE OUT')
    {
        $('#block1').fadeOut(6000, function(){
            $('.btn').html("FADE IN");
        });//removeChild //effect function
        
    }
    else{
        $('#block1').fadeIn(5000 , function(){
            $('.btn').html("FADE OUT");
        });//removeChild //effect function
       
       }
    });

    $('.btntoggle').click(function(){
        $('#block2').fadeToggle(5000);
    });
});
