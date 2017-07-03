//ref : http://wpaoli.building58.com/2009/10/super-simple-jquery-content-swapper/

$(function () {
    function contentSwitcher(setting){
        var settings = {
            contentClass : '.second-nav-content',
            navigationID : '.seconr-nav'
        };
    }

    //Hiden all of the content except the first one on the nav
    $(settings.contentClass).not(':first').hide();
    $(settings.navigationID).find('li:first').addClass('active');

    //onclick set the active state,
    //hide the content panels and show the correct one
    $(settings.navigationID).find('a').click(function (e) {
        var contentToShow = $(this).attr('href');
        contentToShow = $(contentToShow);

        //disable normal link behaviour
        e.preventDefault();

        //set the proper active class for active state css
        $(settings.navigationID).find('li').removeClass('active');
        $(this).parent('li').addClass('active');

        //hide the old content and show the new
        $(settings.contentClass).hide();
        contentToShow.show();
    });
    contentSwitcher();

});

