var wrapHeight = 1000;
var closedHead = 0;

$(document).ready(function(){
    $("a.closeheader").click(function(){
        $('.headline').hide(200);
        $('#footerke').hide(200);
		closedHead = 1;
		updateHeight();
    });
	$( window ).resize(function() {
		updateHeight();
	});

    $("#devices > a").click(function(){
		$("#devices > a").removeClass('active');
		$(this).addClass('active');
		$('#mainWrapper').removeClass();
    });
    $("#tablet").click(function(){		$('#mainWrapper').addClass('tablet');		});
    $("#tabletl").click(function(){		$('#mainWrapper').addClass('tabletl');		});
    $("#mobile").click(function(){		$('#mainWrapper').addClass('mobile');		});
    $("#mobilel").click(function(){		$('#mainWrapper').addClass('mobilel');		});




	updateHeight();
});


function updateHeight() {
	wrapHeight = $(window).height();
	if (closedHead == 0) {
		wrapHeight = wrapHeight - 100; //levonom a headert
	}
	$( '#mainWrapper' ).height(wrapHeight);


}
