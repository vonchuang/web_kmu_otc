
$(document).ready(function () {

    //================== panel ===============================
 
    $('.local-nav-1').click(function () {
        $('#panel1').show();
        $('#panel2').hide();
        $('#panel3').hide();
        $('#panel4').hide();
    });

    $('.local-nav-2').click(function () {
        $('#panel1').hide();
        $('#panel2').show();
        $('#panel3').hide();
        $('#panel4').hide();
    });

    $('.local-nav-3').click(function () {
        $('#panel1').hide();
        $('#panel2').hide();
        $('#panel3').show();
        $('#panel4').hide();
    });

    $('.local-nav-4').click(function () {
        $('#panel1').hide();
        $('#panel2').hide();
        $('#panel3').hide();
        $('#panel4').show();
    });


    //================== gallery ==============================
    $('#gallery img').each(function (i) {
        var imgFile = $(this).attr('src');
        var preloadImage = new Image();
        var imgExt = /(\.\w{3,4}$)/;
        preloadImage.src = imgFile.replace(imgExt, '_h$1');

        $(this).hover(
            function () {
                $(this).attr('src', preloadImage.src);
            },
            function () {
                var currentSource = $(this).attr('src');
                $(this).attr('src', imgFile);
            }
        );
        // hower end
    });
    //each end

    $('#gallery a').click(function (evt) {
        //don't follow link
        evt.preventDefault();
        //get path to new image
        var imgPath = $(this).attr('href');
        //get reference to old image
        var oldImage = $('#photo img');
        var oldImageDesc = $('#desc p');
        var imDesc = $(this).attr('name');
        //crreate HTML for new image
        var newImage = $('<img src="' + imgPath + '" width="450" height="300" >');
        var newImageDesc = $('<p>' + imDesc + '</p>')
        //make new image invisible
        newImage.hide();
        //add to #photo div
        $('#photo').prepend(newImage);

        //fade in new image
        newImage.fadeIn(1000);
        //fade out old image ane remove from DOM
        oldImage.fadeOut(1000,function(){
            $(this).remove();
        });
        oldImageDesc.remove();
        $('#desc').prepend(newImageDesc);
        newImageDesc.fadeIn(1000);

    });
    //click end

    $('#gallery a:first').click();

});

