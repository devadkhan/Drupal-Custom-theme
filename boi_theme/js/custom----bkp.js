jQuery(document).ready(function () {

    function menuToggle() {
        jQuery(document).find(".dropdown-menu").each(function () {
            jQuery(this).find("> a").append("<span class='menuToggle'></span>");
            jQuery(this).removeClass("open");
        });

        jQuery(document).find(".dropdown-menu").each(function () {
            jQuery(this).removeAttr("data-submenu");
            var item = jQuery(this).find("> a > .menuToggle");
            item.click(function (e) {
                console.log("click checking");
                item.parent().next().slideToggle();
                item.parent().parent().toggleClass("open");
                item.closest(".nav-tabs").find(".we-mega-menu-submenu").not(item.parent().next()).slideUp();
                item.closest(".nav-tabs").find(" > li").not(item.parent().parent()).removeClass("open");
                e.preventDefault();
                e.stopPropagation();
            });
        });
    }

    menuToggle();

    if (jQuery(".flourish-slider-inner").length > 7) {

        jQuery(".flourish-slider").prepend("<ul class='col-5-Slider secondChildFSlider' />");

        var checkerFL = 0;
        jQuery(".flourish-slider-inner").each(function () {
            if (checkerFL < 7) {
                jQuery(".secondChildFSlider").append(this);
            }
            checkerFL++;
        });


        jQuery('.flourish-slider').slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        });
    }

    jQuery(function () {
        if (navigator.userAgent.indexOf('Safari') != -1 && 
            navigator.userAgent.indexOf('Chrome') == -1) {
            jQuery('html').addClass("sidebarvisible");
    }
});

    if (jQuery(".highlights-slider").length > 0) {
        jQuery('.highlights-slider .view-content').slick({
            dots: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            ]
        });

    }

    if (jQuery(".item-list.main-slider ul").length > 0) {
        jQuery('.item-list.main-slider ul').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            infinite: true
        });
    }

    
    jQuery.fn.random = function () {
        return this.eq(Math.floor(Math.random() * this.length));
    }

    /****   They Chose PAKISTAN ****/
    if (jQuery(".section_y_pak_ui .field--items").length > 0) {

        var urlArray = []
        var checkLength = "";

        function addImage() {

            jQuery(".section_y_pak_ui .field--item").each(function () {
                urlArray.push(jQuery(this).find('img').attr('src'));
            });

            checkLength = urlArray.length;

            jQuery(".section_y_pak_ui").find(".field--item").remove();
            jQuery(".section_y_pak_ui").append("<div  class='getHiddenItems' style='display:none' />")

            var templateAppender = "";
            var templateVisibility = "";
            var templateAppenderHome = "";
            var templateVisibilityHome = "";
            if(!(jQuery("body").hasClass("path-frontpage"))){
                for (var i = 0; i < checkLength; i++) {
                    if (i > 4){
                        templateVisibility += '<div class="field--item hiddenItemInContainer" > <img class="getItemSrc"  data-src="' + urlArray[i] + '" src="' + urlArray[i] + '" /> </div>';
                    }else{
                        templateAppender += '<div class="field--item getItemContainer" > <img class="getItemSrc"  data-src="' + urlArray[i] + '" src="' + urlArray[i] + '" /> </div>';
                    }
                }
            } 
            else{
                for (var i = 0; i < checkLength; i++) {
                    if (i > 7){
                        templateVisibilityHome += '<div class="field--item hiddenItemInContainer" > <img class="getItemSrc"  data-src="' + urlArray[i] + '" src="' + urlArray[i] + '" /> </div>';
                    }else{
                        templateAppenderHome += '<div class="field--item getItemContainer" > <img class="getItemSrc"  data-src="' + urlArray[i] + '" src="' + urlArray[i] + '" /> </div>';
                    }
                }
            }
            jQuery(".section_y_pak_ui .field--items").append(templateAppender);
            jQuery(".getHiddenItems").append(templateVisibility);
            jQuery(".section_y_pak_ui.home-page-icon .field--items").append(templateAppenderHome);
            jQuery(".home-page-icon .getHiddenItems").append(templateVisibilityHome);

            console.log(urlArray);


        }

        addImage();

        // Get random item and change source
        function changeRandomImage() {
            var items =  jQuery(".section_y_pak_ui").find(".getItemContainer").random();
            var itemsNew =  jQuery(".getHiddenItems").find(".hiddenItemInContainer").random();
        //     var randomImage = urlArray[Math.floor(Math.random() * checkLength)];
        
        var randomImageNew =itemsNew.find("img").attr("src");
        var randomImageOld = items.find("img").attr("src");


        jQuery("img", items).fadeOut('slow', function () {
            jQuery("img", items).attr("src", randomImageNew).fadeIn('slow');
            jQuery("img", itemsNew).attr("src", randomImageOld).fadeIn('slow');
        });

    }


    setInterval(function () {
        changeRandomImage();
    }, 1000);

}

var orgSize = parseInt(jQuery('.top-menu a').css("font-size"));
jQuery(".fontInc li").on("click", function () {
    var currentAction = jQuery(this).attr("class");
    var fontSize = parseInt(jQuery('.top-menu a').css("font-size"));

    if (currentAction == "inc" && fontSize < 21) {
        fontSize = fontSize + 1 + "px";
        jQuery('.top-menu a').css({
            'font-size': fontSize
        });
    }
    if (currentAction == "nor") {
        jQuery('.top-menu a').css({
            'font-size': orgSize
        });
    }
    if (currentAction == "dec" && fontSize > 12) {
        fontSize = fontSize - 1 + "px";
        jQuery('.top-menu a').css({
            'font-size': fontSize
        });
    }
});
jQuery(".circlesWidth").on("click", function () {
    jQuery(this).toggleClass("active");
});

jQuery(".glance-slider ul").addClass("gSlider");

wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
wow.init();

    // new WOW().init();
    jQuery('.top-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    jQuery('.slickcomments').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
    jQuery('.eventsSlider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        adaptiveHeight: true
    });
    jQuery('.bannerSlider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
    jQuery('.news-slider-inner').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<div class='left-arrow'><i class='left-arrow-img'></i></div>",
        nextArrow: "<div class='right-arrow'><i class='right-arrow-img'></i></div>"
    });
    jQuery('.gSlider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20',
        prevArrow: "<div class='left-arrow'><i class='left-arrow-img'></i></div>",
        nextArrow: "<div class='right-arrow'><i class='right-arrow-img'></i></div>",
        responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

        ],
    });
    // jQuery('.slicktop').slick({
    //     dots: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     arrows: true,
    //     responsive: [

    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: false
    //             }
    //         }
    //     ]

    // });
    // jQuery(".tiles").hover(function(){
    //   jQuery(this).toggleClass("pulse");
    // });
    // var a = 0;
    // jQuery(window).scroll(function() {

    //   var oTop = jQuery('#counter').offset().top - window.innerHeight;
    //   if (a == 0 && jQuery(window).scrollTop() > oTop) {
    //     jQuery('.counter-value').each(function() {
    //       var jQuerythis = jQuery(this),
    //       countTo = jQuerythis.attr('data-count');
    //       jQuery({
    //         countNum: jQuerythis.text()
    //       }).animate({
    //         countNum: countTo
    //       },

    //       {

    //         duration: 3000,
    //         easing: 'swing',
    //         step: function() {
    //           jQuerythis.text(Math.floor(this.countNum));
    //         },
    //         complete: function() {
    //           jQuerythis.text(this.countNum);
    //           //alert('finished');
    //         }

    //       });
    //     });
    //     a = 1;
    //   }

    // });
    /*************** Random Images ***************/

    // // Initialize Gallery Plugin
    // jQuery(".diamondGallery").diamonds({
    //     size: 150,
    //     gap: 5,
    //     itemSelector: ".item"
    // });

    // // Get Random Item

    // // Store all images in array
    // var urlArray = jQuery(".hiddenUrls span").map(function (_, el) {
    //     return jQuery(el).text();
    // });

    // // Add all shuffled images on load in items
    // function addImage() {
    //     jQuery(".diamondGallery").find(".item").each(function () {
    //         var randomImage = urlArray[Math.floor(Math.random() * urlArray.length)];
    //         jQuery('img', this).fadeOut('slow', function () {
    //             jQuery(this).attr("src", randomImage).fadeIn('slow');
    //         });
    //     });
    // }

    // // Get random item and change source
    // function changeRandomImage() {
    //     var items = jQuery(".diamondGallery").find(".item").random();
    //     var randomImage = urlArray[Math.floor(Math.random() * urlArray.length)];
    //     console.log(randomImage);
    //     jQuery("img", items).fadeOut('slow', function () {
    //         jQuery("img", items).attr("src", randomImage).fadeIn('slow');
    //     });

    // }

    // // Call add image in load
    // // addImage();

    // // Call change random image after every 1 second
    // // setInterval(function(){
    // //   changeRandomImage();
    // // },3000);



    /*************** Industry Slider/Slider col 5 ***************/

    // Responsive Slick with 5,3,2,1 slides to show according to breakpoints
    // jQuery(".col-5-Slider").slick({
    //     dots: false,
    //     arrows: true,
    //     autoplay: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     responsive: [{
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //     ]
    // });

    if (jQuery("#block-views-block-major-investors-view-block-1").length > 0) {
        setInterval(function () {
            jQuery("#block-views-block-major-investors-view-block-1")
        }, 1000);
    }
    jQuery(".views-field-field-member-details-collection ul li").append('<div class="clearfix"></div>');
    jQuery(".views-field-field-pak-at-glance-field-collec ul li").addClass("clearfix");
    jQuery(".view-executive-memebrs-page-view .item-list > ul > li").addClass("clearfix");
    jQuery(".page-node-type-updates .view-updates-view-blockk .views-field-field-updates-db-rank-by-year ul").addClass("clearfix");
    jQuery(".page-node-type-pakistan-at-glance .views-field-field-glance-province-list").appendTo(".page-node-type-pakistan-at-glance .views-field-field-glance-map-image");

    jQuery("#block-boi-theme-main-menu").prepend(
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
        '<span class="sr-only">Toggle navigation</span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '</button>'
        )
    jQuery(".navbar-collapse.collapse").attr('id', 'navbar');



    jQuery(".expl-dir").click(function () {
        jQuery(this).toggleClass('active');
        jQuery(this).closest("p").siblings("table").slideToggle();

    });
    jQuery(document).find(".gridParentinner").parents("li.slick-slide").addClass("gridParentSlider");
    jQuery(document).find(".banner-image-video").parents("h1").addClass("nopadding");
    jQuery(document).find(".banner-image-video a").addClass("videoBanner");
    if(jQuery(".gridParent").length > 0) {
        // jQuery(".gridParent .videoGrid").each(function() {
        //   var self = jQuery(this);
        //   var videoSrc = self.find("a").attr("href");
        //   self.attr("data-src",videoSrc);
        //   self.find("a").attr("href","");
        //   var html =  self.find(".video-gallery").html();
        //   self.find(".views-field-nothing").remove();
        //   self.html(html);
        // });
        var gridAnchor = jQuery(".gridParentSlider a");
        var VideoLink = gridAnchor.attr("href");
        console.log(VideoLink);
        
        // gridAnchor.css("display", "block");
        gridAnchor.addClass("videoGrids");
        // gridAnchor.addClass("cateGrid");
        // gridAnchor.attr("data-src", VideoLink);
        // gridAnchor.removeAttr("href");

        jQuery(".gridParentSlider").each(function(){
            jQuery(this).lightGallery({
                thumbnail: false,
                selector: ".videoGrids",
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0
                },
                vimeoPlayerParams: {
                    byline : 0,
                    portrait : 0,
                    color : 'A90707'     
                }
            });
        });
        jQuery(".gridParent").each(function(){
            jQuery(this).lightGallery({
                thumbnail: false,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0
                },
                vimeoPlayerParams: {
                    byline : 0,
                    portrait : 0,
                    color : 'A90707'     
                }
            });
        });
        jQuery(".banner-image-video").each(function(){
            jQuery(this).lightGallery({
                thumbnail: false,
                selector: ".videoBanner",
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0
                },
                vimeoPlayerParams: {
                    byline : 0,
                    portrait : 0,
                    color : 'A90707'     
                }
            });
        });
    }

    if(jQuery(".highlights-slider").length > 0) {
        var maxHeight = -1;
        jQuery('.highlights-slider .views-row').each(function() {
            maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
        });

        jQuery('.highlights-slider .views-row').each(function() {
           jQuery(this).height(maxHeight);
       });
    }

    var stickyNavTop = jQuery('.custom-navigation').offset().top;

    var stickyNav = function(){
        var scrollTop = jQuery(window).scrollTop();

        if (scrollTop > stickyNavTop) { 
            jQuery('.custom-navigation').addClass('sticky');
        } else {
            jQuery('.custom-navigation').removeClass('sticky'); 
        }
    };

    stickyNav();
    jQuery(window).scroll(function() {
        stickyNav();
    });
    $element = jQuery(".breadcrumb li:nth-child(2)");
    if($element.find('a').attr('href') === '/boi/node'){
        $element.remove();
    }
    // setTimeout(
    //     function() {
    //       var searchBlock = jQuery(".search-block-form");
    //       searchBlock.prepend("<h2 class='showsearch'></h2>")
    //       searchBlock.children("h2").removeClass("visually-hidden");
    //       searchBlock.children("h2").append("<span>Search BOI</span>");
    //       jQuery(".search-block-form form > div").addClass("form-type-search");
    //       jQuery(".search-block-form .form-type-search").prepend("<a class='label'></a>");
    //   },10000);
    
});
jQuery(document).on("click",".showsearch", function(){
    jQuery(".search-block-form .form-type-search").addClass("active");
});

jQuery(document).on("click", "a.label", function(){
    jQuery(".search-block-form .form-type-search").removeClass("active");
});

(function($){

	var $active = $('#block-mainnavigation .active');
	$active = $($active[0]);

	var $sub_active = $active.find('li.active');
	
	//if already active element is there return from function
	if($sub_active[0])
    {
      return;
  }

  var $active_a = $active.find('>a');
  var href = $active_a.attr('href');

  var $other_a = $('#block-mainnavigation a[href="'+href+'"]');

  $other_a.closest('li').addClass('active');



})(jQuery);