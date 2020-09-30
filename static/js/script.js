$(document).ready(function(){
    $('.sidenav').sidenav({edge:"right"});
    $('select').formSelect();
    $('.carousel').carousel();
});

$(function ($) {
    $('#addField').on("click",  function(){
        $("#ingredients").append('<textarea class="materialize-textarea" id="meal_ingredients" name="meal_ingredients"/>');
    });
});

$(function ($) {
    $('#addField2').on("click",  function(){
        $("#instructions").append('<li><textarea id="meal_method" name="meal_method" class="materialize-textarea"></textarea></li>   ');
    });
});