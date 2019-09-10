// ==UserScript==
// @name         steamgifts set sticky sidebar
// @namespace    altavista.geocities.com
// @version      1
// @description  makes sidebar sticky for to am better navigate
// @author       me
// @include	    *steamgifts.com*
// @grant        none
// ==/UserScript==



/* jshint multistr: true */

$("body").prepend("	\
<style> \
   .sidebar__mpu { \
      max-height: 20px; \
      background-color: pink; \
      margin-bottom: 0; \
   } \
   .widget-container.fixed-sidebar { \
      position: relative; \
      padding-left: 336px; \
   } \
   .widget-container.fixed-sidebar .sidebar.sidebar--wide { \
      position: fixed; \
      top: 0; \
      left: 0; \
      padding-left: 25px; \
   } \
   .sidebar__navigation__itemz * { \
      display: none; \
   } \
   .sidebar__navigation__itemz:nth-child(1):before { \
      content: 'are hidden'; \
      display: block; \
   } \
</style>");



window.addEventListener("scroll", function(){
    var featured = $('.featured__container')[0];
    var toggleCoordinate = featured.offsetTop + featured.offsetHeight;

    var widgetContainer = $('.widget-container');
    var className = 'fixed-sidebar';
    var shouldBeFixed = window.scrollY > toggleCoordinate;
    var hasClass = widgetContainer.hasClass(className);

    if(shouldBeFixed && !hasClass) {
        widgetContainer.addClass(className);
    } else if(hasClass && !shouldBeFixed) {
        widgetContainer.removeClass(className);
    }
});
