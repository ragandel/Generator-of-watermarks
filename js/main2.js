var main = (function(){    var init = function () {        _setUpListners();    };    var _setUpListners = function() {    };    return {        init: init    };})();main.init();var OpacitySlider = (function(){    var _setUpListners = function() {    	$( "#slider" ).slider({        'value':100,        range: "min"}).on( "slide", function( event, ui ) {	  	var opacity = ui.value/100;	  	$('.mainMark').css('opacity', opacity);	  	console.log($( "#slider" ).slider('value'));	  });    };        var init = function () {        _setUpListners();    };    return {        init: init    };})();OpacitySlider.init();var FileUploadJQ = (function(){    var _setUpListners = function() {    	$('#fileuploadImage').fileupload({        dataType: 'json',        done: function (e, data) {            $.each(data.result.files, function (index, file) {                $('.mainImg').text(file.name);                $('#watermark').removeAttr('disabled');                $('.aim-img').append('<img src="server/php/files/'+ file.name +'" class="mainIMG">').css('position', 'relative');                                $(".mainIMG").hide().on('load', function(event) {                    var width = $(this).width();                    var height = $(this).height();                    if(width > 648 || height > 648){                    if(width > height){                        $(this).css('width', '100%').show('fast');                    } else {                         $(this).css('height', '100%').show('fast');                    }                    } else {                        $(this).show('fast');                    }                                        });                            });        }    });    };     var _setUpListners2 = function() {        $('#watermark').fileupload({        dataType: 'json',        done: function (e, data) {            $.each(data.result.files, function (index, file) {                $('.mainWatermark').text(file.name);                $('.aim-img').append('<img src="server/php/files/'+ file.name +'" class="mainMark">');                $(".mainMark").hide().on('load', function(event) {                    var width = $(this).width();                    var height = $(this).height();                    if(width > 648 || height > 648){                    if(width > height){                        $(this).css('width', '100%').show('fast');                    } else {                         $(this).css('height', '100%').show('fast');                    }                    } else {                        $(this).show('fast');                    }                                        });            });        }    });    };        var init = function () {        _setUpListners();        _setUpListners2();    };    return {        init: init    };})();FileUploadJQ.init();