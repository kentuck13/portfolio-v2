import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullpage';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import '../css/demo.css';
import AOS from 'aos';
import {ShapeOverlays} from './demo3';

AOS.init();

$('#fullpage').fullpage({
    anchors: ['Hello', 'AboutMe', 'Experience', 'Service', "LastWorks", 'Contact'],
    css3: false,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Hello', 'About Me', 'Experience', 'Service', "Last works", 'Contact'],
    scrollBar: true,
    sectionsColor: ['#000', '#000', '#000', '#000', '#000', '#000'],
    menu: ".global-menu__wrap",
    responsiveWidth: 767,
});
const elmHamburger = document.querySelector('.hamburger');
const gNavItems = document.querySelectorAll('.global-menu__item');
const elmOverlay = document.querySelector('.shape-overlays');
const overlay = new ShapeOverlays(elmOverlay);
$('.global-menu__item').click(e => {
    if ($(e.target).hasClass('no-scroll')) {
        return null;
    }
    e.preventDefault();
    elmHamburger.click();
    let data = $(e.target).attr('data-menuanchor');
    setTimeout(() => {
        $.fn.fullpage.moveTo(data);
    }, 900);
});
elmHamburger.addEventListener('click', (e) => {
    e.preventDefault();
    if (overlay.isAnimating) {
        return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
        elmHamburger.classList.add('is-opened-navi');
        elmHamburger.classList.add('tcon-transform');
        for (let i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.add('is-opened');
        }
    } else {
        elmHamburger.classList.remove('is-opened-navi');
        elmHamburger.classList.remove('tcon-transform');
        for (let i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.remove('is-opened');
        }
    }
});
$('#send').submit((e) => {
    e.preventDefault();
    $(e.target).find('button').attr('disabled', true);
    $(e.target).find('.thx').css('opacity', '1');
});

$(window).on('load', () => {
   $('.pre-loader').fadeOut(1000);
   $('audio')[0].play();
});