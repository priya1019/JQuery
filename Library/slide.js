$(document).ready(function(){
    $('.btn').click(function(){  //event function
       
    let label=$('.btn').html(); //DOM method
    if(label=='SLIDE UP')
    {
        $('#block1').slideUp(6000, function(){
            $('.btn').html("SLIDE DOWN");
        });//removeChild //effect function
        
    }
    else{
        $('#block1').slideDown(5000 , function(){
            $('.btn').html("SLIDE UP");
        });//removeChild //effect function
       
       }
    });

    $('.btntoggle').click(function(){
        $('#block2').slideToggle(5000);
    });
});
