!function ($) {
  $(function(){
    var $window = $(window)
    // side bar
    $('.bs-docs-sidenav').affix({
      offset: {
        top: function () { return $window.width() <= 980 ? 290 : 240 }
      , bottom: 270
      }
    })
    
    // tooltip demo
    $('.progress').tooltip({
      selector: "div"
    })
  })
}(window.jQuery)