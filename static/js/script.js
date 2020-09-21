$(document).ready(function(){
    $('.sidenav').sidenav({edge:"right"});
    $('.carousel').carousel({indicators: true});
    $('select').formSelect();
});

$(function ($) {
    $('body').on("click", '#addField',  function(){
        $("#ingredient_list").append('<textarea class="materialize-textarea" id="meal_ingredients" name="meal_ingredients"/>');
    });
})

$(function ($) {
    $('body').on("click", '#addField2',  function(){
        $("#instructions").append('<li><textarea id="meal_method" name="meal_method" class="materialize-textarea"></textarea></li>   ');
    });
})