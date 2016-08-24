(function($) {

	"use strict";

	var handheldBreakpoint = 980; //media query breakpoint at which the mobile menu is shown

	// seamless internal links scroll
	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, function() {
			window.location.hash = target;
		});
	});

	//  dropdownmenu, megamenu
	jQuery('.children, .sub-menu').hide();
	jQuery('#header nav #menu > ul li:has(ul)').on('mouseenter', function() {
		if (jQuery(window).width() > handheldBreakpoint) {
			var $this = jQuery(this);
			$this.addClass('active-parent');
			$this.find('> .children, > .sub-menu').stop(true).delay(150).slideDown(200);
		}
	}).on('mouseleave', function() {
		if (jQuery(window).width() > handheldBreakpoint) {
			var $this = jQuery(this);
			$this.find('> .children, > .sub-menu').stop(true).delay(150).slideUp(150, function() {
				$this.removeClass('active-parent');
			});
		}
	});


	// header menu burger
	jQuery('#header nav #menu-burger').on('click', function() {
		jQuery('#header nav #menu').toggleClass('menu-shown');
	});

	// header searchbar
	var $searchbar_icon = jQuery('#header nav #searchicon');
	if ($searchbar_icon.length > 0) {
		var $searchbar_hidden = true;
		$searchbar_icon.on('click', function() {
			if ($searchbar_hidden) {
				jQuery('#header nav form#searchbar').stop().animate({
					'opacity': 1,
					'width': '180px'
				}, function() {
					jQuery('#header nav #searchbar-input').delay(1000).focus();
					jQuery('#header #logo').addClass('searchbar-expanded'); // hide also logo if on mobile
				});
				var i = 0;
				if (jQuery(window).width() > handheldBreakpoint) {
					jQuery('#header nav #menu > ul > li').reverse().each(function() {
						jQuery(this).delay(i).animate({
							'opacity': 0
						});
						i = i + 50;
					});
				}
				$searchbar_hidden = false;
			} else {
				jQuery('#header nav form#searchbar').stop().animate({
					'opacity': 0,
					'width': '0'
				});
				var i = 0;
				jQuery('#header nav #menu > ul > li').each(function() {
					jQuery(this).delay(i).animate({
						'opacity': 1
					});
					i = i + 50;
				});
				jQuery('#header #logo').removeClass('searchbar-expanded');
				$searchbar_hidden = true;
			}
		});
	}
	jQuery.fn.reverse = [].reverse;

	// svg line drawing logo
	var $svg_logo = jQuery('#logo-svg-animated');
	if ($svg_logo.length > 0) {
		/* 
		 * Lazy Line Painter - Path Object 
		 * Generated using 'SVG to Lazy Line Converter'
		 * 
		 * http://lazylinepainter.info 
		 * Copyright 2013, Cam O'Connell  
		 *  
		 */

		/* 
		 * Lazy Line Painter - Path Object 
		 * Generated using 'SVG to Lazy Line Converter'
		 * 
		 * http://lazylinepainter.info 
		 * Copyright 2013, Cam O'Connell  
		 *  
		 */

		var pathObj = {
			"logo-svg-animated": {
				"strokepath": [{
					"path": "M83.8275931,18.8542868 C82.5283604,19.6074898 80.8523953,20.1739136 78.75,20.1739136 C74.375,20.1739135 73.7660079,16.9682035 74.7349528,13.8656956 C75.6311592,10.9408322 77.839349,9.11220686 79.375,8.83049808 C83.6511995,8.04604705 84.375,13.8656957 79.375,15.1304348 C77.7542101,15.54041 75.625,15.4456522 75.625,15.4456522",
					"duration": 600
				}, {
					"path": "M67.5,15.1304344 C68.75,11.3478257 71.8671807,4.15633379 72.5,0.630434783 C72.831054,-0.312050753 73.5242882,0.0307076804 73.125,0.630434783 C71.4792307,5.10910429 69.375,10.0869567 67.5,15.1304347 C65.625,20.1739127 69.2500001,20.1739123 69.375,20.1739131 C70.731386,20.1739216 72.505982,18.9084871 74.375,15.1304344",
					"duration": 600
				}, {
					"path": "M60.625,15.1304344 C61.875,11.3478257 64.9921807,4.15633379 65.625,0.630434783 C65.956054,-0.312050753 66.6492882,0.0307076804 66.25,0.630434783 C64.6042307,5.10910429 62.5,10.0869567 60.625,15.1304347 C58.75,20.1739127 62.3750001,20.1739123 62.5,20.1739131 C63.856386,20.1739216 65.630982,18.9084871 67.5,15.1304344",
					"duration": 600
				}, {
					"path": "M76.25,5.04347826 C76.25,5.04347826 67.5331508,7.82637837 59.375,6.13998025",
					"duration": 600
				}, {
					"path": "M48.75,15.4456522 C48.75,15.4456522 50.8792101,15.54041 52.5,15.1304348 C57.5,13.8656957 56.7761995,8.04604705 52.5,8.83049808 C50.964349,9.11220686 48.7561592,10.9408322 47.8599528,13.8656956 C46.8910079,16.9682035 47.5,20.1739135 51.875,20.1739136 C56.9290163,20.1739137 60.5813599,15.1361296 60.5813599,15.1361296",
					"duration": 600
				}, {
					"path": "M40.625,15.1304344 C41.875,11.3478257 44.9921807,4.15633379 45.625,0.630434783 C45.956054,-0.312050753 46.6492882,0.0307076804 46.25,0.630434783 C44.6042307,5.10910429 42.5,10.0869567 40.625,15.1304347 C38.75,20.1739127 42.3750001,20.1739123 42.5,20.1739131 C43.856386,20.1739216 45.630982,18.9084871 47.5,15.1304344",
					"duration": 600
				}, {
					"path": "M33.75,15.1304344 C35,11.3478257 38.1171807,4.15633379 38.75,0.630434783 C39.081054,-0.312050753 39.7742882,0.0307076804 39.375,0.630434783 C37.7292307,5.10910429 35.625,10.0869567 33.75,15.1304347 C31.875,20.1739127 35.5000001,20.1739123 35.625,20.1739131 C36.981386,20.1739216 38.755982,18.9084871 40.625,15.1304344",
					"duration": 600
				}, {
					"path": "M27.4974528,10.7954571 C25,6.93478261 20.1898944,9.16200607 18.7474528,13.8695651 C17.7785079,16.972073 18.7474528,20.173913 21.8766383,20.173913 C24.3829844,20.173913 26.2474531,17.6521738 26.8724528,15.1304348 C25,20.1739128 28.6250001,20.1739128 28.7474528,20.1739131 C30,20.1739128 31.875,18.9130432 33.75,15.1304345",
					"duration": 600
				}, {
					"path": "M1.03724162,23.9113908 C2.28724161,20.1287821 5.40442228,12.9372901 6.03724163,9.41139112 C6.3682956,8.46890559 7.06152988,8.81166402 6.66224163,9.41139112 C5.01647234,13.8900606 2.91224163,18.867913 1.03724163,23.9113911 C-0.83775837,28.9548691 2.78724175,28.9548686 2.91224161,28.9548694",
					"duration": 600
				}, {
					"path": "M14.4427493,10.669216 C12.432346,7.06176743 7.69244161,9.16200607 6.25,13.8695651 C5.2810551,16.972073 6.25,20.173913 9.37918552,20.173913 C11.812177,20.173913 13.6403135,17.797624 14.3169532,15.3517871 C14.3195674,15.3423373 15.4656222,12.5046495 14.4427493,10.669216 Z",
					"duration": 600
				}],
				"dimensions": {
					"width": 87,
					"height": 33
				}
			}
		};


		/* 
		 Setup and Paint your lazyline! 
		 */

		jQuery(window).load(function() {
			setTimeout(function() { // wait till the loadscreen animation finishes
				$('#logo-svg-animated').lazylinepainter({
					"svgData": pathObj,
					"strokeWidth": 2,
					"strokeColor": "#e09b99"
				}).lazylinepainter('paint');
			}, 400);
		});
	}
	// END OF SVG ANIMATION

	// init Magnific popup
	jQuery('a.popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		titleSrc: 'alt',
		cursor: 'mfp-zoom-out-cur'
	});

	// remove title on img hover
	var imgTitle;
	jQuery("img, a").on('hover', function() {
		imgTitle = jQuery(this).attr("title");
		jQuery(this).removeAttr("title");
	}, function() {
		jQuery(this).attr("title", imgTitle);
	});

	// fullscreen gallery
	var $fullscreen_gallery = jQuery('.fullscreen-gallery.gallery');
	if ($fullscreen_gallery.length > 0) {

		if ($fullscreen_gallery.find('.gallery-item').length > 1) { // if there are more than 1 image

			if (!$fullscreen_gallery.hasClass('kenburns-gallery')) { // do not initialize if kenburns
				jQuery('#footer').prepend('<nav id="gallerynav"><a href="#" class="thumbs">	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">	<rect width="5" height="5" x="0"   y="0" /><rect width="5" height="5" x="8" y="0" /><rect width="5" height="5" x="0" y="8" /><rect width="5" height="5" x="8" y="8" /></svg></a><a href="#" class="prev">&lt;</a> <a href="#" class="pause">&#9614;&#9614;</a> <a href="#" class="next">&gt;</a></nav>');

				$fullscreen_gallery.before('<ul id="gallerythumbs">').cycle({
					slideExpr: '.gallery-item',
					fx: 'fade',
					speed: 1000,
					timeout: 5000,
					pager: '#gallerythumbs',
					slideResize: true,
					containerResize: true,
					width: '100%',
					height: '100%',
					fit: 1,
					cleartypeNoBg: true,
					pagerAnchorBuilder: function(idx, slide) {
						return '<li><a href="#"><img src="' + jQuery(slide).find('img').attr('data-src') + '" alt="" /></a></li>';
					},
					prev: '#gallerynav .prev',
					next: '#gallerynav .next',
					before: function(currSlideElement, nextSlideElement) {
						$(nextSlideElement).lazyLoadXT({
							show: true
						});
					}
				});
				var paused = false;
				jQuery('#gallerynav .pause').on('click', function() {
					if (!paused) {
						$fullscreen_gallery.cycle('pause');
						paused = true;
					} else {
						$fullscreen_gallery.cycle('resume');
						paused = false;
					}
					jQuery(this).toggleClass('active');
				});
				// show/hide thumbs
				var revealed = false;
				jQuery('#gallerynav a.thumbs').on('click', function() { // if clicked on svg button
					// show thumbs wrapper
					jQuery('#gallerythumbs').toggleClass('reveal');
					// show thumbs
					if (!revealed) {
						jQuery('body').addClass('gallerythumbsrevealed');
						revealed = true;
					}
					// hide thumbs
					else {
						jQuery('body').removeClass('gallerythumbsrevealed');
						revealed = false;
					}
					// pause cycling
					$fullscreen_gallery.cycle('pause');
					paused = true;
				});
				jQuery('#gallerythumbs').on('click', function() { // if clicked on a thumb (large image will be automatically shown) or somewhere else
					// hide thumbs wrapper
					jQuery('#gallerythumbs').toggleClass('reveal');
					jQuery('body').removeClass('gallerythumbsrevealed');
					// resume cycling
					$fullscreen_gallery.cycle('resume');
					paused = false;
					revealed = false;
				});
				// scroll gallery thumbs with mousewheel
				jQuery('#gallerythumbs').on('mousewheel', function(event) {
					if (event.deltaY < 0) { // scroll right
						jQuery('#gallerythumbs').stop().animate({
							scrollLeft: '+=180px'
						}, 300);
					} else {
						jQuery('#gallerythumbs').stop().animate({
							scrollLeft: '-=180px'
						}, 300);
					}
				});
			}
		}
	}

	// carousel
	var $blog_mini_carousel = jQuery('.blog-oneline-carousel');
	if ($blog_mini_carousel.length > 0) {

		$blog_mini_carousel.tinycarousel({
			axis: "y",
			interval: true,
			intervalTime: 4000
		});
	}

	// kenburns on one featured image header image
	var $kenburns = jQuery('.kenburns-gallery.gallery');
	if ($kenburns.length > 0) {
		var gallery_set = [];
		$kenburns.lazyLoadXT({
			show: true
		});
		$kenburns.find('.gallery-icon img').each(function() {
			gallery_set.push(jQuery(this).attr('src'));
		});

		jQuery('#kenburns').attr('width', jQuery(window).width());
		jQuery('#kenburns').attr('height', jQuery(window).height());
		jQuery('#kenburns').kenburns({
			images: gallery_set,
			frames_per_second: 30,
			display_time: 5000,
			fade_time: 1000,
			zoom: 1.2,
			background_color: '#F7F6F5'
		});
	}


	// horizontal reel gallery
	var $horizontal_gallery = jQuery('.gallery.horizontal-gallery');
	if ($horizontal_gallery.length > 0) {

		var scrollRightTo = 0,
			galleryWidth = 0,
			scrollDragWidth = 0,
			windowWidth = jQuery(window).width();

		jQuery(window).load(function() {
			jQuery('.gallery-item').each(function() {
				galleryWidth += jQuery(this).width();
			});

			scrollDragWidth = ((windowWidth / galleryWidth) * windowWidth);
			galleryWidth = galleryWidth - 2 * scrollDragWidth;
		});

		// make gallery scrollable with mousewheel
		$horizontal_gallery.on('mousewheel', function(event, delta) {

			event.preventDefault();
			if (delta < 0) { // scroll right
				if (scrollRightTo < galleryWidth) {
					scrollRightTo = scrollRightTo + 320;
				} // add +1 only if the end is not reached yet
			} else { // scroll left
				if (scrollRightTo > 0) {
					scrollRightTo = scrollRightTo - 320;
				} // subtract i only if it's not yet less that zero
			}

			// move the content and scroll track
			$horizontal_gallery.stop().animate({
				scrollLeft: scrollRightTo + 'px'
			}, 1000, 'swing');
		});

		$horizontal_gallery.on('lazyload', function(e) {
			galleryWidth += $(event.target).width();
		});

		// on keyboard press, scroll horizontally
		$(document).on('keydown', function(e) {
			if (e.keyCode == 39) { // right
				if (i < $('.gallery-item').length) {
					i = i + 1;
					scrollRightTo = scrollRightTo + 320;
				}
			} else if (e.keyCode == 37) { // left
				if (i > 1) {
					i = i - 1;
					scrollRightTo = scrollRightTo - 320;
				}
			}
			// move the content and scroll track
			$horizontal_gallery.stop().animate({
				scrollLeft: scrollRightTo + 'px'
			}, 400, 'swing');

		});

		$horizontal_gallery.find('.gallery-icon a').on('click', function(event) {
			event.preventDefault();
		});

	}

	// vertical gallery
	var $vertical_gallery = jQuery('.gallery.vertical-gallery');
	if ($vertical_gallery.length > 0) {

		$vertical_gallery.before('<div id="gallerypuntiks">').cycle({
			slideExpr: '.gallery-item',
			fx: 'scrollDown',
			speed: 600,
			timeout: 5000,
			pager: '#gallerypuntiks',
			cleartypeNoBg: true,
			animIn: {
				opacity: 1
			},
			animOut: {
				opacity: 0
			},
			before: function(currSlideElement, nextSlideElement) {
				$(nextSlideElement).find('.gallery-caption').delay(200).animate({
					'opacity': 1
				}, 1000);
				$(nextSlideElement).lazyLoadXT({
					show: true
				});
			},
			after: function(currSlideElement, nextSlideElement) {
				$(nextSlideElement).find('.gallery-caption').delay(5000).animate({
					'opacity': 0
				}, 1000);
			}
		});
	}


	// load screen
	jQuery('body.home.loading').height(jQuery(window).height());
	jQuery("a:not(#gallery-filter a, #grid-changer a)").on('click', function(e) {
		var link = $(this).attr('href');

		if ($(this).attr('id') != 'votelikebutton' && $(this).attr('target') != '_blank' && link.indexOf('.jpg') < 0 && link.indexOf('.jpeg') < 0 && link.indexOf('.png') < 0 && link.indexOf('.gif') < 0 && link.indexOf('#') < 0) {
			$('.loadreveal').removeClass('reveal');
			setTimeout(function() {
				window.location.href = link;
			}, 400);
			e.preventDefault();
		}
	});


	/* ********* WINDOW LOAD ********** */
	jQuery(window).load(function() {

		// load screen
		jQuery('.loadreveal').addClass('reveal');
		jQuery('#loadscreen').stop().animate({
			opacity: 0
		}, 200, function() {
			jQuery('body.home').removeClass('loading');
			jQuery(this).hide();
		});


		// masonry gallery
		var $masonry_gallery = jQuery('.masonry-gallery.gallery');
		if ($masonry_gallery.length > 0) {

			$masonry_gallery.each(function(index, element) {
				var $masonry_items = $(element).find('.gallery-item');

				// set masonry layout
				$(element).imagesLoaded(function() {
					$(element).isotope({
						masonry: {
							columnWidth: $(element).find('.gallery-item')[0]
						},
						itemSelector: '.gallery-item',
						throttle: 1000
					});

					// lazy update
					$(element).on('lazyload', function() {
						$(this).isotope('layout');
					});
				});


				// filtering
				jQuery('#gallery-filter li a').on('click', function() {
					jQuery('#gallery-filter li a').removeClass('active');
					jQuery(this).addClass('active');
					var selector = jQuery(this).attr('data-filter');
					$(element).isotope({
						filter: selector
					});
					// lazyload update
					setTimeout(function() {
						$(window).lazyLoadXT();
					}, 100);

					return false;
				});

				// changing layout
				jQuery('#grid-changer li a').on('click', function() {
					jQuery('#grid-changer li a').removeClass('active');
					jQuery(this).toggleClass('active');

					$masonry_items.removeClass('col-3');
					$masonry_items.removeClass('col-4');
					$masonry_items.removeClass('col-5');
					$masonry_items.toggleClass(jQuery(this).closest('li').attr('class'));
					$(element).isotope('layout');
				});

			});
		}


		// before-after
		var $before_after = jQuery('.before-after.gallery');
		if ($before_after.length > 0) {
			$before_after.lazyLoadXT({
				show: true
			});
			$before_after.imageReveal({
				barWidth: 4,
				touchBarWidth: 50,
				startPosition: 0.5,
				width: jQuery('.before-after img').width(),
				height: jQuery('.before-after img').height()
			});
		}

		// changing blog layout
		var $blog_layout = jQuery('#blog-timeline');
		if ($blog_layout.length > 0) {

			jQuery('#grid-changer li a').on('click', function() {
				jQuery('#grid-changer li a').removeClass('active');
				jQuery(this).toggleClass('active');

				$blog_layout.closest('.wrapper').toggleClass('blog-masonry');

				if ($blog_layout.closest('.wrapper').hasClass('blog-masonry')) {
					jQuery('#blog-post').animate({
						'left': '100%'
					}, 400, function() {
						// set masonry layout
						$blog_layout.isotope({
							masonry: {
								columnWidth: $blog_layout.find('article')[0],
								gutter: 60
							},
							itemSelector: 'article'
						});
						$blog_layout.isotope('layout');
						jQuery('#blog-post').hide();
					});
				} else {
					jQuery('#blog-post').show().animate({
						'left': '0'
					}, 400);
					$blog_layout.isotope('destroy');

					if ($masonry_gallery.length > 0) {
						$masonry_gallery.isotope('layout');
					}
				}
			});
		}
	});


})(jQuery);