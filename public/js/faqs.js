$(document).ready(function(){
    $('.accordion-content').hide();
    $('#accordion-button-1').on('click', () => {
        $('#accordion-content-1').toggle();
        $('#accordion-content-2').hide();
        $('#accordion-content-3').hide();
        $('#accordion-content-4').hide();
        $('#up1').toggleClass('rotate');
        $('#up2').removeClass('rotate');
        $('#up3').removeClass('rotate');
        $('#up4').removeClass('rotate');
    });

    $('#accordion-button-2').on('click', () => {
        $('#accordion-content-2').toggle();
        $('#accordion-content-1').hide();
        $('#accordion-content-3').hide();
        $('#accordion-content-4').hide();
        $('#up2').toggleClass('rotate');
        $('#up1').removeClass('rotate');
        $('#up3').removeClass('rotate');
        $('#up4').removeClass('rotate');
    })

    $('#accordion-button-3').on('click', () => {
        $('#accordion-content-3').toggle();
        $('#accordion-content-2').hide();
        $('#accordion-content-1').hide();
        $('#accordion-content-4').hide();
        $('#up3').toggleClass('rotate');
        $('#up2').removeClass('rotate');
        $('#up1').removeClass('rotate');
        $('#up4').removeClass('rotate');
    })

    $('#accordion-button-4').on('click', () => {
        $('#accordion-content-4').toggle();
        $('#accordion-content-2').hide();
        $('#accordion-content-3').hide();
        $('#accordion-content-1').hide();
        $('#up4').toggleClass('rotate');
        $('#up2').removeClass('rotate');
        $('#up3').removeClass('rotate');
        $('#up1').removeClass('rotate');
    })


})