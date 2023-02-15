var head_nav = document.querySelector(".site-header");
var logo_img = Array.from(document.querySelectorAll(".logo img"));
var logo = document.querySelector(".logo");
    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 95){
            head_nav.classList.add('head-nav_fixed');
            logo_img[1].style.display="block";
            logo_img[1].style.visibility="visible";
            logo_img[0].style.display="none";
            logo.classList.add('stick_logo');
            
        }else if(head_nav.classList.contains('head-nav_fixed')){
            head_nav.classList.remove('head-nav_fixed');
            logo_img[1].style.display="none";
            logo_img[1].style.visibility="hidden";
            logo_img[0].style.display="block";
            logo.classList.remove('stick_logo');
        }
    });
var button_arrow__up = document.querySelector(".img_jump");
var button_arrow__down = document.querySelector(".img_down");
    button_arrow__up.addEventListener('click', () => {
        document.querySelector(".chat_detail__full").classList.add("chat_detail__short");
        document.querySelector(".chat_detail__full").classList.remove("chat_detail__full");
        button_arrow__down.style.display="block";
        button_arrow__up.style.display="none";
    });
    button_arrow__down.addEventListener('click', () => {
        document.querySelector(".chat_detail__short").classList.add("chat_detail__full");
        document.querySelector(".chat_detail__short").classList.remove("chat_detail__short");
        button_arrow__down.style.display="none";
        button_arrow__up.style.display="block";
    });
var body_content_body_list;var body_content_head_list;

function starting(){
    body_content_body_list = Array.from(document.querySelectorAll(".box_content div"));
    body_content_head_list = Array.from(document.querySelectorAll(".slider_nav_header li a"));
    for (let i = 1; i <= body_content_body_list.length - 1; i++) {
        body_content_body_list[i].style.display ="none";
        body_content_head_list[i].style.border = "1px solid transparent";
        body_content_head_list[i].style.borderBottom = "3px solid transparent";
        body_content_head_list[i].style.color = "#0066CC";
    }
    let test = false;
    for (let i = 0; i <= body_content_head_list.length - 1; i++) {
        body_content_head_list[i].onclick = () => {
            body_show_body_content(i);
            body_show_head_content(i);
            return test = true;
        };
        if(test===true)
            break;
    }
    let body_list_oppion = Array.from(document.querySelectorAll(".content_list .list_oppion"));
    let head_list_oppion = Array.from(document.querySelectorAll(".content_list h3 a"));
    for(let i = 1;i <= body_list_oppion.length -1; i++){
        body_list_oppion[i].style.display = "none";
    }
    for(let i = 0; i <= head_list_oppion.length -1 ;i++){
        head_list_oppion[i].onclick = () =>{
            if(body_list_oppion[i].style.display === "block"){
                body_list_oppion[i].style.display = "none";
                return true;
                }
            for(let a = 0; a <= body_list_oppion.length - 1; a++){
                if(a === i ){
                    body_list_oppion[a].style.display = "block";
                }else{
                     body_list_oppion[a].style.display = "none";
                }
            }
        };
    }
    //head content
    let head_head_content_1 = Array.from(document.querySelectorAll(".nav-parent.foruse-nav_item"));
    let head_head_content_2 = Array.from(document.querySelectorAll(".nav-parent.nav-content"));
    let head_body_content_1 = Array.from(document.querySelectorAll(".foruse-nav_item .nav-kid"));
    let head_body_content_2 = Array.from(document.querySelectorAll(".nav-content .drop-holder"));
    let head_head_arrow_1 = Array.from(document.querySelectorAll(".nav-parent.foruse-nav_item .aftera_arrow-unchange"));
    let head_head_arrow_2 = Array.from(document.querySelectorAll(".nav-parent.nav-content .aftera_arrow-unchange"));
    for(let i = 0; i <= head_head_content_1.length - 1; i++){
        head_head_content_1[i].onclick =() =>{ 
            
            if(head_body_content_1[i].style.display === "block"){
                head_head_arrow_1[i].classList.remove("aftera_arrow-change");
                head_body_content_1[i].style.display = "none";
                return true;
                }
            for(let a = 0; a <= head_body_content_1.length - 1; a++){
                if(a === i ){
                    head_head_arrow_1[a].classList.add("aftera_arrow-change");
                    head_body_content_1[a].style.display = "block";
                }else{
                    head_head_arrow_1[a].classList.remove("aftera_arrow-change");
                    head_body_content_1[a].style.display = "none";
                }
            }
        };
    }
    for(let i = 0; i <= head_head_content_2.length - 1; i++){
        head_head_content_2[i].onclick =() =>{ 
            if(head_body_content_2[i].style.display === "block"){
                head_head_arrow_2[i].classList.remove("aftera_arrow-change");
                head_body_content_2[i].style.display = "none";
                return true;
                }
            for(let b = 0; b <= head_body_content_2.length - 1; b++){
                if(b === i ){
                    head_head_arrow_2[b].classList.add("aftera_arrow-change");
                    head_body_content_2[b].style.display = "block";
                }else{
                    head_head_arrow_2[b].classList.remove("aftera_arrow-change");
                    head_body_content_2[b].style.display = "none";
                }
            }
        };
    }
}
function body_show_head_content(x){
    let a = Array.from(document.querySelectorAll(".slider_nav_header li a"));
//    body_content_head_list[x].getElementsByTagName("A").style.color = "#000000";
//    body_content_head_list[x].getElementsByTagName("a").style.border = "1px solid #000000";
//    body_content_head_list[x].getElementsByTagName("a").style.borderBottom = "3px solid #FFFFFF";
//    console.log(body_content_head_list[x].getElementsByTagName("a").length);
    for (let i = 0; i <= a.length - 1; i++) {
        if(i === x){
            a[i].style.border = "1px solid #000000";
            a[i].style.borderBottom = "3px solid #FFFFFF";
            a[i].style.color = "#000000";
        }else{
            a[i].style.border = "1px solid transparent";
            a[i].style.borderBottom = "3px solid transparent";
            a[i].style.color = "#0066CC";
        }
    }
}
function body_show_body_content(x){
    if(body_content_body_list[x].style.display === "none"){
        for (let i = 0; i <= body_content_body_list.length - 1; i++) {
            if(body_content_body_list[i] === body_content_body_list[x]){
                body_content_body_list[x].style.display ="block";
            }else{
                body_content_body_list[i].style.display = "none";
            }
        }
    }
}