
// lazy load parallax images
[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function () {
		img.removeAttribute('data-src');
	};
});
var youtubePlayers = {}
var WMG = {
	artistname: 'Jack Harlow',
	MailingList: {
		EmailListIds: {
			'United States': '',
			'United Kingdom': '',
			'France': '',
			'Australia': '',
			'Germany': '',
			'Mexico': ''
		},
		labelListId: '50',
		MobileKeywordIds: {
			'United States': ''
		}
	}
};
jQuery(document).ready(function () {
	loadmore();
	if (!navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/webOS/i) && !navigator.userAgent.match(/iPhone/i) && !navigator.userAgent.match(/iPad/i) && !navigator.userAgent.match(/BlackBerry/i) && !navigator.userAgent.match(/Windows Phone/i)) {
		jQuery("body").addClass("no-touch-device");
	} else {
		jQuery("body").addClass("touch-device");
	}
	var customValidator = {};
	customValidator.customPageName = "Homepage";
	customValidator.validatorSettings = {
		rules: {
			email: {
				required: true,
			}
		},
		messages: {
			email: {
				required: "Email address required",
				email: "Please enter a valid email address"
			}
		}
	};
		// carousel();
});jQuery(window).load(function () {	jQuery('.streamingServices').each(function () {
		jQuery(this).find('.streamItems li:not(.activeStream) a').click(function () {
			jQuery(this).parents(".streamItems").siblings("ul.streamEmbeds").find("li").find('iframe').each(function () {
				jQuery(this).attr("src", jQuery(this).attr('src'));
			});
			var showIndex = jQuery(this).parent().index() - 1;
			jQuery(this).parents(".streamItems").find("li:not(.activeStream) a").removeClass("active");
			jQuery(this).addClass("active");
			jQuery(this).parents(".streamItems").find("li.activeStream a").html(jQuery(this).html());
			var classname = jQuery(this).attr("class");
			jQuery(this).parents(".streamItems").find("li.activeStream a").removeClass();
			jQuery(this).parents(".streamItems").find("li.activeStream a").addClass(classname);
			var src1 = jQuery(this).parent("li").find(".iframelink").text().trim();
			//alert(src1);
			jQuery(this).parents(".streamItems").siblings("ul.streamEmbeds").find("li").find('iframe').hide();
			if (!jQuery(this).parent().hasClass("tidal")) {
				jQuery(this).parents(".streamItems").siblings("ul.streamEmbeds").find("li").eq(showIndex).find('iframe').attr("src", src1);
			}
			jQuery(this).parents(".streamItems").siblings("ul.streamEmbeds").find("li").eq(showIndex).find('iframe').show();
			var text = jQuery(this).text().trim();
			var albumTitle = jQuery(this).parents(".right-wrapper").find('.albumTitle').text().trim();
			var omniText = digitalData.page.pageInfo.pageName + ':' + albumTitle + " " + text + " (embed selector) click";
			CallDTM(omniText);
		});
	});
	if (jQuery(window).width() < 1025) {
		jQuery('ul.streamItems li.activeStream a, ul.streamItems li a').click(function () {
			jQuery('ul.streamItems li.activeStream a').parent().siblings().slideToggle();
		});
	}
	if (jQuery(window).width() > 1025) {
		callCarousel();
		var initialimg = jQuery(".music-section-image li img").attr("src");
		jQuery(".music-section-image-main > img").attr("src", initialimg);
		jQuery(".musicWrapper .music-section").hide();
		jQuery(".music-section-image a").removeClass("selected");
		jQuery(".music-section-image img").click(function () {
			if (jQuery("html").hasClass("touch")) {
				var imageSrc = jQuery(this).attr('src');
				var showIndex = jQuery(this).parents("li").index();
				jQuery(".music-section-image-main img").attr('src', imageSrc);
				jQuery(".musicWrapper .music-section").hide();
				jQuery(this).parents(".musicWrapper").find(".music-section").eq(showIndex).show();
			} else {
				setTimeout(function () {
					jQuery(".music-section-image").find(".carousel-center").each(function () {
						var imageSrc = jQuery(this).find('img').attr('src');
						var showIndex = jQuery(this).parents("li").index();
						jQuery(".music-section-image-main img").attr('src', imageSrc);
						jQuery(".musicWrapper .music-section").hide();
						jQuery(this).parents(".musicWrapper").find(".music-section").eq(showIndex).show();
					});
				}, 500);
			}
			jQuery(".music-section-image-main img").attr('src', imageSrc);
			jQuery(this).parents(".musicWrapper").find(".music-section").eq(showIndex).show();
		});
		setTimeout(function () {
			if (jQuery(window).width() < 768) {
				jQuery(".music-section-image li:first-child a").click();
			}
		}, 2000);
		jQuery(".music-section-image li:first-child a").addClass('selected');
		jQuery(".music-section:nth-child(1)").show();
	}
	jQuery('.owl-prev').addClass('npn-angle-left');
	jQuery('.owl-next').addClass('npn-angle-right');
	jQuery('.owl-prev.npn-angle-left').text('');
	jQuery('.owl-next.npn-angle-right').text('');
	var title = jQuery('.owl-item.active .carousel-caption').text();
	jQuery('.albumName').empty();
	jQuery('.albumName').append(title);
	jQuery('.owl-carousel .owl-controls .owl-nav .owl-next, .owl-carousel .owl-controls .owl-nav .owl-prev').click(function () {
		setTimeout(function () {
			jQuery('.albumName').empty();
			var title = jQuery('.owl-item.active .carousel-caption').text();
			var available = jQuery('.owl-item.active .available-caption').text();
			jQuery('.albumName').append(title);
		}, 200);
	});
	var videosource;
	jQuery('.download-wrapper .streaming-links a').click(function () {
		var text = jQuery(this).text().trim();
		var albumTitle = jQuery(this).parents(".closed-wrapper").find('.right-wrapper .albumTitle').text().trim();
		var omniText = digitalData.page.pageInfo.pageName + ':' + albumTitle + " " + text + " click"; CallDTM(omniText);
	});
});
jQuery(window).load(function () {
	albumflyout();
	if (jQuery(window).width() > 1025) {
		calcHeights();
	}
	calcHeights();
});
jQuery(window).resize(function () {
	carousel();
	if (jQuery(window).width() > 1025) {
		calcHeights();
	}
	calcHeights();
});
function loadIframes(selector) {
	jQuery(selector).each(function () {
		if (jQuery(this).attr('altsrc') != "") {
			jQuery(this).attr('src', jQuery(this).attr('altsrc'));
		}
	});
}
function calcHeights() {
	var headerH = jQuery(".headerWrapper").outerHeight(true);
	var streamsWrapperH = jQuery(".streamsWrapperForParallax").outerHeight(true);
	var tourWrapperH = jQuery(".tourWrapper").outerHeight(true);
	jQuery("#group1").css("height", headerH);
	jQuery("#group2").css("height", streamsWrapperH);
	jQuery("#group3").css("height", tourWrapperH);
}
// function carousel() {
// 	if ($jq111('.videoSection ul.video-carousel li').length > 1) {
// 		$jq111('.videoSection ul.video-carousel').owlCarousel({
// 			loop: true,
// 			responsiveClass: true,
// 			animateIn: 'fadeIn',
// 			onInitialized:carouselVideoTracking,
// 			onChanged: callbackvideo,
// 			responsive: {
// 				0: {
// 					items: 1,
// 					nav: true,
// 					margin: 10,
// 				},
// 				768: {
// 					items: 1,
// 					nav: true,
// 					margin: 40,
// 				},
// 				1024: {
// 					items: 1,
// 					nav: true,
// 					margin: 100,
// 				}
// 			}
// 		});
// 	}
// 	if (jQuery(window).width() < 1025) {
// 		$jq111('.musicWrapper .albumStream').owlCarousel({
// 			loop: true,
// 			responsiveClass: true,
// 			animateIn: 'fadeIn',
// 			responsive: {
// 				0: {
// 					items: 1,
// 					nav: true,
// 					margin: 10,
// 				},
// 				768: {
// 					items: 1,
// 					nav: true,
// 					margin: 40,
// 				},
// 				1024: {
// 					items: 1,
// 					nav: true,
// 					margin: 100,
// 				}
// 			}
// 		});
// 	}
// 	function callbackvideo(event) {
// 		if (Object.keys(youtubePlayers).length > 0) {
// 			for (i = 0; i < Object.keys(youtubePlayers).length; i++) {
// 				youtubePlayers[Object.keys(youtubePlayers)[i]].pauseVideo()
// 			}
// 		}
// 		jQuery('.video-carousel').find(".owl-item").find(".image").css('display', 'block');
// 	}
// }
// function carouselVideoTracking(){
// 	jQuery('.video-carousel li .image').on('click', function (ev) {
// 		ev.preventDefault();
// 		jQuery(this).hide();
// 		var parentElement = jQuery(this).parents('.media.wrapper');
// 		var youtubeID = jQuery(this).find('.iframelink').html().trim();
// 		var playerID = parentElement.find('.video .iframeWrap').attr('id') + '-' + jQuery(this).parents('.owl-item').index();
// 		if(parentElement.find('.video iframe').length == 0){
// 			parentElement.find('.video .iframeWrap').attr('id', playerID);
// 			var player = new YT.Player(playerID, {
// 				videoId: youtubeID,
// 				events: {
// 					'onReady': onPlayerReady,
// 					'onStateChange': onPlayerStateChange
// 				}
// 			});
// 			youtubePlayers[playerID]=player;
// 		}
// 		else{
// 			player1Id=parentElement.find('.video iframe').attr('id');
// 			youtubePlayers[player1Id].playVideo();
//
// 		}
//
//
// 	});
// }

// function callCarousel() {
// 	var carousel;
// 	if (jQuery(window).width() > 1024) {
// 		carousel = jQuery(".music-section-image").waterwheelCarousel({
// 			flankingItems: 3,
// 			separation: 450,
// 			keyboardNav: true,
// 			opacityMultiplier: 1,
// 			sizeMultiplier: 0.6,
// 			activeClassName: "carousel-center"
// 		});
// 	}
// 	jQuery('.arrows #prev').bind('click', function () {
// 		carousel.prev();
// 		setTimeout(function () {
// 			jQuery(".music-section-image").find(".carousel-center").each(function () {
// 				var imageSrc = jQuery(this).find('img').attr('src');
// 				var showIndex = jQuery(this).parents("li").index();
// 				jQuery(".music-section-image-main img").attr('src', imageSrc);
// 				jQuery(".musicWrapper .music-section").hide();
// 				jQuery(this).parents(".musicWrapper").find(".music-section").eq(showIndex).show();
// 			});
// 		}, 500);
// 		return false;
// 	});
// 	jQuery('.arrows #next').bind('click', function () {
// 		carousel.next();
// 		setTimeout(function () {
// 			jQuery(".music-section-image").find(".carousel-center").each(function () {
// 				var imageSrc = jQuery(this).find('img').attr('src');
// 				var showIndex = jQuery(this).parents("li").index();
// 				jQuery(".music-section-image-main img").attr('src', imageSrc);
// 				jQuery(".musicWrapper .music-section").hide();
// 				jQuery(this).parents(".musicWrapper").find(".music-section").eq(showIndex).show();
// 			});
// 		}, 500);
// 		return false;
// 	});
// }
function albumflyout() {
	if (jQuery(window).width() > 1023) {
		if (navigator.userAgent.indexOf('iPad') == -1) {
			jQuery(".download-section").hover(function () {
				jQuery(this).find(".streaming-links a").css('display', 'block');
			}, function () {
				jQuery(this).find(".streaming-links a").hide();
			});
			jQuery(".stream-section").hover(function () {
				jQuery(this).find(".streaming-links a").css('display', 'block');
			}, function () {
				jQuery(this).find(".streaming-links a").hide();
			});
		}
	} else {
		jQuery('.download-wrapper > div').click(function () {
			jQuery(this).find(".streaming-links a").toggleClass('showed');
			var currentClickedItem = jQuery(this).attr('class');
			jQuery(".download-wrapper > div").each(function () {
				if (!jQuery(this).hasClass(currentClickedItem)) {
					jQuery(this).find(".streaming-links a").removeClass('showed');
				}
			});
		});
	}
}
function onPlayerReady(event) {
	event.target.playVideo();
}

var ytPlayers = [];
var player;

function youtube_parser(url){    
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    //var regPlaylist = /[?&]list=([^#\&\?]+)/;
    var matches = url.match(regExp);
    return (matches&&matches[7].length==11)? matches[7] : false;
}

function playVideo(event) {
    event.target.playVideo();
}
function playCurrentVideo(event) {
	// alert(ytPlayers);
    if (Object.keys(ytPlayers).length > 0) {
        for (var k = 0; k < Object.keys(ytPlayers).length; k++) {
            ytPlayers[Object.keys(ytPlayers)[k]].pauseVideo()
        }
    }
    event.target.playVideo();
}
jQuery('.video-inner-wrapper').click(function() {
	var getSrc = jQuery(this).find('.video-image').attr('data-video-url');        
	var youtubeID = youtube_parser(getSrc);
	var isPlaylist = jQuery(this).find('.video-image').attr('isPlaylist');        
	jQuery(this).find('.video-image').hide();
	jQuery(this).find('.play-icon-wrappe').hide();        
	jQuery(this).append('<div id="ytplayer-' + youtubeID + '"></div');
	var playerID = 'ytplayer-' + youtubeID;
	if(isPlaylist) {
		player = new YT.Player('ytplayer-' + youtubeID, {
			height: '360',
			width: '640',
			playerVars: {
				listType: 'playlist',
				list: playlistID,
			},
			events: {
				'onReady': playCurrentVideo,
				'onStateChange': onPlayerStateChange
			}
		});
		ytPlayers[playerID]=player;
	}
	else {
		player = new YT.Player('ytplayer-' + youtubeID, {
			height: '315',
			width: '560',
			videoId: youtubeID,
			events: {
				'onReady': playCurrentVideo,
				'onStateChange': onPlayerStateChange
			}
		});
		ytPlayers[playerID]=player;
		
	}
	
	

});

/*Load More Function*/
function loadmore() {
	jQuery("div.video-wrapper").slice(0, 4).show();
	jQuery("div.album").slice(0, 3).show();
    jQuery(".video-content-wrapper a.view_more").on('click', function (e) {
        e.preventDefault();
        jQuery("div.video-wrapper:hidden").slice(0, 2).slideDown();
        if (jQuery("div.video-wrapper:hidden").length == 0) {
            jQuery(".video-content-wrapper a.view_more").fadeOut('slow');
        }
        // jQuery('html,body').animate({
        //     scrollTop: jQuery(this).offset().top
        // }, 1500);
	});
	jQuery(".musicWrapper a.view_more").on('click', function (e) {
        e.preventDefault();
        jQuery("div.album:hidden").slice(0, 3).slideDown();
        if (jQuery("div.album:hidden").length == 0) {
            jQuery(".musicWrapper a.view_more").fadeOut('slow');
        }
        // jQuery('html,body').animate({
        //     scrollTop: jQuery(this).offset().top
        // }, 1500);
    });
    jQuery(".gallaryWrapper a.view_more").on('click', function (e) {
        e.preventDefault();
        jQuery("div.gallary:hidden").slice(0, 3).slideDown();
        if (jQuery("div.gallary:hidden").length == 0) {
            jQuery(".gallaryWrapper a.view_more").fadeOut('slow');
        }
        // jQuery('html,body').animate({
        //     scrollTop: jQuery(this).offset().top
        // }, 1500);
    });
}

/*underline hover adding hoverclass to tour ticket */
jQuery(document).ready(function() {
	jQuery("a.ticket_link").addClass("link-2");
});
$(window).load(function() {
	tourtkthover();
	jQuery("#wsk-widget a.view_more.link_text.link_background").click(function(){
		tourtkthover();
	});
});
function tourtkthover()
{
  $.ajax({
  context: document.body
}).done(function() {
  $( this ).find("a.ticket_link").addClass( "link-2" );
});
}