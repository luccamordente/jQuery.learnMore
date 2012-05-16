/*
* jQuery LearnMore plugin 0.1.0
*
* Copyright (c) 2011 Dito Internet
* Author: Lucca Mordente (luccamordente@gmail.com)
* Description: jQuery plugin that makes easy to add
*   "learn more" functionality for any content.
*
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/



(function( $ ) {
  $.fn.learnMore = function(options) {
    
    
    var 

    // plugin default settings
    defaultSettings = {
      hideExpanded: false,
      expandedAction: null
    }, //defaultSettings
  
    
    
    plugin = function(element, options) {
      
      var
      
      
      // instance of current element or set of elements
      $element = element,
      $action  = element.find(".learn-more"),
      $content = element.find(".learn-more-content"),
      
      
      compactAction = null,
      state         = "hidden",
      
      
      // plugin settings after initialization
      settings = {},
      
      
      /**
       * event to bind to the action link
       */
      click = function(event) {
        toggle(event)
      }, //click
      
      toggle = function(event) {
        if(state == "hidden") {
          $content.show();
          state = "visible";
          if(settings.hideExpanded)
            $action.hide();
          if(settings.expandedAction)
            $action.html(settings.expandedAction);
        } else
        if(state == "visible") {
          $content.hide();
          state = "hidden";
          if(settings.expandedAction)
            $action.html(compactAction);
        }
      }
      
      ;
      
      
      $.extend(true,settings,defaultSettings,options);
      
      compactAction = $action.text();
      
      // bind event to element
      $action.bind('click.escfield',click);
      
      // hides the learn more content
      $content.hide();
    
    
    };
    
    
    plugin(this, options);
    
    return this;
    
  }; //learnMore
})( jQuery );