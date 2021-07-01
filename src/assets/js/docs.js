// Adds a base url to all links within Fractal, so that clicking on a link to another 
// page, loads that page in Fractal.

$(window).on('load', function(){
    var iFrameHead = $('.Preview-iframe').contents().find('head');
    setTimeout(function() {
        iFrameHead.append('<base href="http://localhost:3000/components/detail/" target="_top">');
    }, 1000);   
});
