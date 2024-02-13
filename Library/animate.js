$( function(){
    $('h2').mouseover(function(){
        $('img').animate({
            height:'600px' ,
            width:'700px' ,
            borderWidth: '20px' ,
            borderRadius:'50px',
            borderColor: 'yellow' //wont work
        }, 6000,'linear', ()=>alert("Animation Completed"));
    });
    $('#art').css(
        {
            height: '300px',
            width: '300px' ,
            border: '2px dashed blue' ,
            borderRadius: '50px' ,
            backgroundColor: 'yellow'

        }
    );
});