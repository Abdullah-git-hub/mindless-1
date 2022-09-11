let transTime = 200;

$(".list_li").click(function(){
    let cat_type = $(this).attr("data-filter");

    if(cat_type == 'All'){
        $(".item_box").show(transTime);
    }else{
        $(".item_box").not("."+cat_type).hide(transTime);
        $(".item_box").filter("."+cat_type).show(transTime);
    }

    $(this).addClass("active_list_li").siblings().removeClass("active_list_li")
})