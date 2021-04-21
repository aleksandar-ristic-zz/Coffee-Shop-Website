// Menu Toggle - jQuery
$(document).ready( function(){

    $('#menu-btn, #close-btn').click( function(){
        $('#mobile-menu').toggle();
    });

    $('#mobile-menu a').click( function(){
        $('#mobile-menu').hide();
    });

/* Menu Toggle - Vanilla -JS

window.addEventListener("load", function(){
                
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-btn");

    menuBtn.addEventListener("click", function(){
        mobileMenu.style.display = "block";
    });

    closeBtn.addEventListener("click", function(){
        mobile.mobileMenu.style.display = "none";
    });

    let mobileMenuItems = document.getElementsByClassName("mobile-menu-item");

    for (let i=0; i < mobileMenuItems.length; i++) {
        mobileMenuItems[i].addEventListener("click", function(){
            mobileMenu.style.display = "none";
        });
    }
    */
// Header - jQuery

    $(document).scroll(function(){
        let header = $('#header');

        if($(this).scrollTop() > $('#hero-section').height()){

            if(!header.hasClass('solid-header')){
                header.addClass('solid-header');
            }
        } else {
            if(header.hasClass('solid-header')){
                header.removeClass('solid-header');
            }
        }
    });
/*  Header Vanilla -JS    

let heroSection = document.getElementById("hero-section");
let heroSectionHeight = heroSection.clientHeight;

let header = document.getElementById("header");

document.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > heroSectionHeight) {
        if (!header.classList.contains("solid-header")) {
            header.classList.add("solid-header");
        }
    } else {
        if(header.classList.contains("solid-header")) {
            header.classList.remove("solid-header");
        }
    }
});

*/

// Leaflet - Interactive map and pin
    var myMap = L.map('map', {
        center: [40.741770, -73.983090],
        zoom: 17
    
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    var myIcon = L.icon({
        iconUrl: 'img/hero-logo.png',
        iconSize: [65, 65],
    });

    var marker = L.marker([40.741770, -73.983090], {
        icon: myIcon 
    }).addTo(myMap);

});
