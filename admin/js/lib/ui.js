$(function(){

    //login
    if($('.login-checkbox').length > 0){
        checkBox_Ck();//checkbox
    }

    $('.btn-ht.sideMenu').on('click',function(){
        $('html').toggleClass('is-side-out');
    })
    $('.btn-ht.sideQuick').on('click',function(){
        $('html').toggleClass('is-sideQuick-out');
    })

    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        todayHighlight: true,
        toggleActive: true,
        autoclose: true,
        forceParse: false,
        language: "kr",
        calendarWeeks: false,
    });

    $('.custom-file input').change(function (e) {
        var files = [];
        for (var i = 0; i < $(this)[0].files.length; i++) {
            files.push($(this)[0].files[i].name);
        }
        $(this).next('.custom-file-label').html(files.join(', '));
    });


})

//login
function checkBox_Ck(){//체크박스
    var objCheckbox = $('.login-checkbox');
    objCheckbox.each(function(){
        if($(this).find('input[type=checkbox]').is(':checked')){
            $(this).addClass('checked')
        }
    });
    objCheckbox.on('click', function(){
        if($(this).find('input[type=checkbox]').is(':checked')){
            $(this).addClass('checked');
            $(this).find('input[type=checkbox]').attr('checked',true);
        }else{
            $(this).removeClass('checked');
            $(this).find('input[type=checkbox]').attr('checked',false);
        }
    });
}
