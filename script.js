/**
 * Created by Awako on 10.09.14.
 */
$(document).ready(function() {
    $('#search').click( function (){
        $(this).val("");
    });
});

$(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpShow();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $(".pop-up").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $(".pop-up").hide();
    }