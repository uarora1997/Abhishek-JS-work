const toggle= $(".toggle>input");
$(".toggle>input").click(function(){
    const onoff=$(this).siblings(".onoff");
    $(this).is(":checked")?$(onoff).html("ON"):$(onoff).html("OFF");
});

$(function() {
    $(".happy").sortable({
      handle: "handle"
    });
    $(".happy").disableSelection();
  });