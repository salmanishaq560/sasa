
jQuery(window).scroll(function() {    
			    var scroll = jQuery(window).scrollTop();

			     //>=, not <=
			    if (scroll >= 550) {
			        //clearHeader, not clearheader - caps H
			        jQuery(".header-sec").addClass("sticky");
			    }
			    else {
			        jQuery(".header-sec").removeClass("sticky");
			    }
			});