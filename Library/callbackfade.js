/* $(document).ready(function(){
    $('.btn').click(function(){  //event function
       
    let label=$('.btn').html(); //DOM method
    if(label=='FADE OUT')
    {
        $('div.fade').fadeOut(5000, function(){
            $('img.fade').fadeOut(6000,function(){
                $('ol.fade').fadeOut(5000);
            });
        });//removeChild //effect function
        
    }
    else{
            $('div.fade').fadeIn(5000, function(){
                $('img.fade').fadeIn(6000,function(){
                    $('ol.fade').fadeIn(5000);
        });
    });//removeChild //effect function
    
       }
    });

});  
 */

$(()=>{
    $('.btn').click(()=>{
        let label=$('.btn').html(); //DOM method
        if(label=='FADE OUT')
        {
            $('div.fade').fadeOut(5000, ()=>{
                $('img.fade').fadeOut(6000,()=>{
                    $('ol.fade').fadeOut(5000);
                });
            });//removeChild //effect function
            
        }
    });



$('#chainbtn').click(()=>{
    $('.fade').hide(1000).show(2000.).fadeOut(2000).fadeIn(2000).slideUp(2000).slideDown(2000)
});
});