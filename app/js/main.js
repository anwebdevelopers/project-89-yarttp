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

    /*******************************************************/
    //ARTICLES SLIDER
    /*******************************************************/
    ( function( $ ) {

        $( '.articles__slider' ).each( function () {

            const $articles__slider = $( this );
            $articles__slider.find( '.articles__slide' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="articles__container swiper-container"><div class="articles__wrapper swiper-wrapper"></div></div>' )
                .end()
                .find( '.articles__container' )
                // .after( '<div class="articles__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>' )
                .after( '<div class="articles__dots"></div>' );

            const articlesSwiper = new Swiper( $articles__slider.find( '.articles__container' ), {

                speed: 800,
                spaceBetween: 0,
                autoHeight: true,
                loop: true,

                autoplay: {
                    delay: 5000,
                },

                // containerModifierClass: 'articles__slider',
                // wrapperClass: 'articles__wrapper',
                // slideClass: 'articles__slide',
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
                pagination: {
                    el: $articles__slider.find('.articles__dots'),
                    clickable: true,
                    type: 'bullets',
                },

            } );

            window.addEventListener( 'resize', function () {
                articlesSwiper.updateSize();
            } );
        } );

    } ( jQuery ) );

    /*******************************************************/
    //TABS
    /*******************************************************/

    ( function( $ ) {

        $('.tabs').each( function () {
            const $tabs = $( this );
            $tabs.prepend( '<div class="tabs__buttons"></div>' )
                .find( '.tabs__section' ).wrapAll( '<div class="tabs__box"></div>' )
                .each( function () {
                    $tabs.find('.tabs__buttons').append( '<button type="button">' + $( this ).attr('data-tabs-title') + '</button>' );

            } );

            $tabs.find( '> .tabs__buttons button' ).first().attr( 'active', '' );
            $tabs.find( '> .tabs__box > .tabs__section' ).not( ':first-child' ).hide();
            $tabs.find( '> .tabs__buttons' ).on( 'click', 'button:not( [ active ] )', function() {
                $( this ).attr( 'active', '' ).siblings().removeAttr( 'active' ).closest( '.tabs' ).find( '> .tabs__box > .tabs__section' ).slideUp( 300 ).eq( $( this ).index() ).slideDown( 300 );
            } );
        } );

    } ( jQuery) );


    /*******************************************************/
    //ANNOUNCEMENTS SLIDER
    /*******************************************************/
    ( function( $ ) {

        $( '.announcements' ).each( function () {

            const $announcements = $( this );
            $announcements.prepend( '<div class="announcements__dots"></div>' )
                .find( '.announcements__section' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="announcements__container swiper-container"><div class="announcements__wrapper swiper-wrapper"></div></div>' );

            const announcementsSwiper = new Swiper( $announcements.find( '.announcements__container' ), {

                speed: 800,
                spaceBetween: 0,
                // autoHeight: true,
                loop: true,

                autoplay: {
                    delay: 5000,
                },

                pagination: {
                    el: $announcements.find('.announcements__dots'),
                    clickable: true,
                    type: 'bullets',
                },

            } );

            window.addEventListener( 'resize', function () {
                announcementsSwiper.updateSize();
            } );
        } );

    } ( jQuery ) );

    /*******************************************************/
    //committees SLIDER
    /*******************************************************/
    ( function( $ ) {

        $( '.activity__committees-box' ).each( function () {

            const $activity__committees_box = $( this );
            $activity__committees_box
                .find( '.activity__committees-section' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="activity__committees-container swiper-container"><div class="activity__committees-wrapper swiper-wrapper"></div></div>' )
                .end()
                .append( '<div class="activity__committees-dots"></div>' );

            const activityCommitteesSwiper = new Swiper( $activity__committees_box.find( '.activity__committees-container' ), {

                speed: 800,
                spaceBetween: 0,
                //autoHeight: true,
                loop: true,

                autoplay: {
                    delay: 5000,
                },

                pagination: {
                    el: $activity__committees_box.find('.activity__committees-dots'),
                    clickable: true,
                    type: 'bullets',
                },

            } );

            window.addEventListener( 'resize', function () {
                activityCommitteesSwiper.updateSize();
            } );
        } );

    } ( jQuery ) );

});
