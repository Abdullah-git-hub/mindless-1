// ====== events for side-bar
// defaults
$(".side_bar_back").hide();
$(".side_bar_sec").hide(300)


// side-bar close btn settings

$(".side_bar_close_btn").on("mouseover", _=>{
    $(".close_x").slideUp(400)
})
$(".close_txt").on("mouseout", _=>{
    $(".close_x").slideDown(400)
})

// sub menu function
$(".sub_menu_li").click(function (e) {
    $(this).children(".sub_menu_ul").toggle(400);
    $(this).children("p").toggleClass("sub_menu_p_actv")
    $(this).children("p").children("span").children("span").toggleClass("sub_menu_btn_actv");
});

// cloasing side-bar
$(".side_bar_close_btn").click(function(){
    $(".side_bar_sec").hide(300)
    $(".side_bar_back").hide()
})

$(".nav_side_bar").click(function(){
    $(".side_bar_sec").show(300)
    $(".side_bar_back").show()
})

$(".side_bar_back").click(function(){
    $(".side_bar_sec").hide(300)
    $(".side_bar_back").hide()
})


// browse page lower slide_bar settings
let item_bar_back_width = (eval($("#showen_item").text())*100) / eval($("#tot_item").text());

$(".item_bar_back").css("width", item_bar_back_width+"px");


// owl carosol ===========

try {
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            // nav:true,
            dots: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                }
            }
        })
    });
} catch (error) {
    console.warn("Owl Carousel Not Found")
}
