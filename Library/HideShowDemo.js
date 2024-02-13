$(document).ready(function(){
    $('.btn').click(function(){  //event function
       
    let label=$('.btn').html(); //DOM method
    if(label=='HIDE')
    {
        $('#block1').hide(6000);//removeChild //effect function
        $('.btn').html("SHOW");
    }
    else{
        $('#block1').show(5000);//removeChild //effect function
        $('.btn').html("HIDE");
    }
    });
});
