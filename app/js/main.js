document.addEventListener( 'DOMContentLoaded', function( event ) {

    'use strict';

    const $window = $(window);

    /*******************************************************/
    //MENU
    /*******************************************************/

    ( function( $ ) {

        const $headerMenu = $('.header__menu'),
            $headerAdditionalMenu = $('.header__additional-menu'),
            $buttonMenuMobile = $('.header__button-menu');
        $buttonMenuMobile.click(function(e) {
            e.stopPropagation();
            this.toggleAttribute('active');
            $headerAdditionalMenu.fadeToggle(200).css('display', 'flex');
            if ($window.width() <= 1024) $headerMenu.slideToggle(200);
        });
        $window.resize(function() {
            $buttonMenuMobile.removeAttr('active');
            $headerMenu.removeAttr('style');
            $headerAdditionalMenu.removeAttr('style');
        });

        $headerMenu.find('a').click(function(e) {
            if ($window.width() <= 1024) {
                var $this = $(this),
                    $ul = $this.next('ul'),
                    $li = $this.closest('li');
                if ($ul.length && !$li.hasClass('active')) {
                    e.preventDefault();
                    $ul.slideDown(300);
                    $li.addClass('active').siblings().removeClass('active').find('ul').slideUp(300);
                }
            }
        });
        $window.resize(function() {
            $headerMenu.find('ul, li').removeAttr('style').removeClass('active');
        });

    }(jQuery));

    /*******************************************************/
    //SUBMENU MOBILE
    /*******************************************************/

    ( function( $ ) {
    }(jQuery));

});
