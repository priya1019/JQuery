$(document).ready(function(){
    $('.btn').click(function(){  //event function
       
    let label=$('.btn').html(); //DOM method
    if(label=='HIDE')
    {
        $('#block1').hide(6000, function(){
            $('.btn').html("SHOW");
        });//removeChild //effect function
        
    }
    else{
        $('#block1').show(5000 , function(){
            $('.btn').html("HIDE");
        });//removeChild //effect function
       
       }
    });

    $('.btntoggle').click(function(){
        $('#block2').toggle(5000);
    });
});
