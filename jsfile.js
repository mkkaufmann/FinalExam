/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";

    var topofDiv = $("#jumbotron").offset().top; //gets offset of jumbotron
    var height = $("#jumbotron").outerHeight(); //gets height of jumbotron
    var navheight = $("#navbar").outerHeight(); //gets height of navbar
    console.log(navheight);

    function correctNav() {
        if ($(window).scrollTop() > (topofDiv + height - navheight)) {
            $("#navbar").stop().clearQueue().animate({
                "background-color": "#292b2c",
                "opacity": 1
            }, 500);
        } else {
            $("#navbar").stop().clearQueue().animate({
                "background-color": "transparent",
                "opacity": 1
            }, 500);
        }
    }

    correctNav();

    $(window).scroll(function () {
        correctNav();
    });
});
