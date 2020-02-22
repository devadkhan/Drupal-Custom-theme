(function ($) {
    NProgress.start();
})(jQuery);

jQuery(document).ready(function () {


    jQuery("body").on("click", ".pdf-btn", function () {
        html2canvas(jQuery('.wrapp-all-elements')[0], {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download("Career.pdf");
            }
        });
    });


    jQuery('.view-more-button .view-button').on("click" , function(){
        var self = jQuery(this);
        self.toggleClass('view-button');
        if(self.hasClass('view-button')){
            self.text('View more'); 
            self.closest(".view-more-button").prev(".all-job-description").removeClass("full-des");        
        } else {
            self.text('View Less');
            self.closest(".view-more-button").prev(".all-job-description").addClass("full-des");    
        }

    });

    jQuery(".draggable td:nth-child(4) .form-inline input").on("change", function(){
        var ee = jQuery(this).val();
        var zz = jQuery(this).attr("min",ee);
        jQuery(this).closest("tr").find("td:nth-child(5) .form-inline input").attr("min",ee);
    });


    var windowpath = window.location.origin;
    jQuery(".newsletters-loader  .view-content").append('<div class="loader_wrap"><img src="' + windowpath + Drupal.url('/themes/boi_theme/images/loading.gif')+'" class="img-responsive"></div>')

    
    function testInput(event) {
     var value = String.fromCharCode(event.which);
     var pattern = new RegExp(/[a-zåäö ]/i);
     return pattern.test(value);
 }

 jQuery('#edit-first-name,#edit-last-name,#edit-father-name').bind('keypress', testInput);
 jQuery(document).ajaxStart(function () {
    jQuery('.loader_wrap').fadeIn();
});
 jQuery(document).ajaxComplete(function () {
    jQuery('.loader_wrap').fadeOut();
});
    // jQuery(".criteria.select-all-parent").on("click", function(){

    //     jQuery(".country.select-all-parent h4").addClass("color-div-addded");
    // });
    // jQuery(".country.select-all-parent").on("click", function(){
    //     jQuery(".chart h3").addClass("color-div-addded");
    // });
    jQuery('.criteria.select-all-parent input[type="checkbox"]').click(function () {
        if (jQuery(this).prop("checked") == true) {
            jQuery(".country.select-all-parent h4").addClass("color-div-addded");
        } else if (jQuery(this).prop("checked") == false) {
            jQuery(".country.select-all-parent h4 , .chart h3").removeClass("color-div-addded");
        }
    });
    jQuery('.country.select-all-parent input[type="checkbox"]').click(function () {
        if (jQuery(this).prop("checked") == true) {
            jQuery(".chart h3").addClass("color-div-addded");
        } else if (jQuery(this).prop("checked") == false) {
            jQuery(".chart h3").removeClass("color-div-addded");
        }
    });


    window.done = false;
    newsletter();

    function newsletter() {
        //        //console.log("newsletter");
        if (window.done) {
            return;
        }
        window.done = true;
        jQuery(".view-newsletter .views-row ")
        jQuery(".block-views .view-newsletter .view-content .views-row").addClass("hidenewsletter");
        // jQuery(".block-views .view-newsletter .view-content .views-row:nth-child(1)").removeClass("hidenewsletter");
        var gClas = jQuery(".view-newsletter .views-row:nth-child(1) .news-image a").attr('class');
        jQuery(".block-views .view-newsletter .view-content div." + gClas).removeClass("hidenewsletter");
    }

    jQuery(document).on("click", '.news-image a', function () {
        //        //console.log("news-image a");
        if (!jQuery(this).hasClass("activeFile")) {
            var getClassName = jQuery(this).attr('class');
            jQuery('.news-image a').removeClass("activeFile");
            jQuery(this).addClass("activeFile");
            jQuery('.loader_wrap').fadeIn();
            jQuery(".block-views .view-newsletter .view-content .views-row").addClass("hidenewsletter");
            jQuery(".block-views .view-newsletter .view-content div." + getClassName).removeClass("hidenewsletter");
            jQuery('.loader_wrap').fadeOut();
        }
    });

    jQuery(document).ajaxComplete(function () {
        //        //console.log("ajax call")
        window.done = false;
        jQuery(".view-newsletter .views-row:nth-child(1) .news-image a").off("click");
        newsletter();
        //ON AJAX COMPLETE CHANGE text to select year
        jQuery("select[id^='edit-field-date-value'] option:first-child").text("Select Year");
        
        jQuery(".draggable td:nth-child(4) .form-inline input").on("change", function(){
        var ee = jQuery(this).val();
        var zz = jQuery(this).attr("min",ee);
        jQuery(this).closest("tr").find("td:nth-child(5) .form-inline input").attr("min",ee);
    });


    });
    //change to select year on page load
    jQuery("select[id^='edit-field-date-value'] option:first-child").text("Select Year");


    //remove select language from translation dropdown
    //    jQuery("#block-gtranslate option[value='']").remove();


    //convert pdf link to fancybox 
    jQuery("a[href$='.pdf']").attr("data-fancybox", "gallery");

    function menuToggle() {
        jQuery(document).find(".dropdown-menu").each(function () {
            jQuery(this).find("> a").append("<span class='menuToggle'></span>");
            jQuery(this).removeClass("open");
        });

        jQuery(document).find(".dropdown-menu").each(function () {
            jQuery(this).removeAttr("data-submenu");
            var item = jQuery(this).find("> a > .menuToggle");
            item.click(function (e) {
                //                //console.log("click checking");
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
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
        });
    }

    if (jQuery(".bottom-logo > .view-content").length > 0) {
        jQuery(".block-views-blockthey-choose-pakistian-why-pakistan-2-block-3").insertAfter(jQuery(".field--name-field-pakistan-at-a-glance"));
        jQuery("#block-views-block-they-choose-pakistian-why-pakistan-2-block-3").show();

        jQuery(".bottom-logo > .view-content").slick({
            dots: false,
            autoplay: false,
            adaptiveHeight: true,
            autoplaySpeed: 2000,
            arrows: true,
            focusOnSelect: true,
            asNavFor: '.bottom-slider .view-id-they_choose_pakistian_why_pakistan_2 .view-content'
        });

        jQuery(".bottom-slider .view-id-they_choose_pakistian_why_pakistan_2 .view-content").slick({
            dots: false,
            autoplay: false,
            adaptiveHeight: true,
            autoplaySpeed: 2000,
            slidesToShow: 6,
            arrows: false,
            focusOnSelect: true,
            asNavFor: '.bottom-logo > .view-content',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
             breakpoint: 668,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }
         ]

     });
    }

    var tpend = jQuery(".field--name-field-how-to-invest .field--item:nth-child(3) .paragraph--type--steps .field--name-field-title");
    if (tpend.length > 0){
        tpend.parent().append(tpend);
    }

    if (jQuery(".field--name-field-how-to-invest .field--item .field--item img").length > 0) {
        jQuery(".field--name-field-how-to-invest .field--item .field--item img").each(function (param) {
            var src = jQuery(this).attr("src");
            jQuery(this).closest(".paragraph--type--steps").find(".field--name-field-title").css({
                "background-image": "url(" + src + ")"
            });
        });
    }

    if (jQuery(".field--name-field-investment-sectors").length > 0) {
        jQuery(".field--name-field-investment-sectors").slick({
            dots: true,
            autoplay: false,
            adaptiveHeight: true,
            autoplaySpeed: 2000,
            arrows: false,
        });
    }


    if (jQuery(".block-views-blockfive-reasons-to-invest-in-pakistan-why-pakistan-block-2 .view-content").length > 0) {
        jQuery(".block-views-blockfive-reasons-to-invest-in-pakistan-why-pakistan-block-2").insertAfter(jQuery(".field--name-field-pakistan-at-a-glance"));
        jQuery(".block-views-blockfive-reasons-to-invest-in-pakistan-why-pakistan-block-2").show();
        jQuery(".block-views-blockfive-reasons-to-invest-in-pakistan-why-pakistan-block-2 .view-content").slick({
            dots: false,
            autoplay: false,
            adaptiveHeight: true,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: true,
            prevArrow: '<div class="slick_button_holder slick_button_holder_prev"><button class="slick-prev slick-arrow"></button></div>',
            nextArrow: '<div class="slick_button_holder slick_button_holder_next"><button class="slick-next slick-arrow"></button></div>',

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
             breakpoint: 668,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }
         ]

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
            autoplay: false,
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
            }]
        });

    }

    if (jQuery(".item-list.main-slider ul").length > 0) {
        jQuery('.item-list.main-slider ul').slick({
            dots: true,
            autoplay: false,
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
            if (!(jQuery("body").hasClass("path-frontpage"))) {
                for (var i = 0; i < checkLength; i++) {
                    if (i > 4) {
                        templateVisibility += '<div class="field--item hiddenItemInContainer" > <img class="getItemSrc"  data-src="' + urlArray[i] + '" src="' + urlArray[i] + '" /> </div>';
                    } else {
                        templateAppender += '<div class="field--item getItemContainer" > <img class="getItemSrc"  data-src="' + urlArray[i] + '" src="' + urlArray[i] + '" /> </div>';
                    }
                }
            } else {
                for (var i = 0; i < checkLength; i++) {
                    if (i > 7) {
                        templateVisibilityHome += '<div class="field--item hiddenItemInContainer" > <img class="getItemSrc"  data-src="' + urlArray[i] + '" src="' + urlArray[i] + '" /> </div>';
                    } else {
                        templateAppenderHome += '<div class="field--item getItemContainer" > <img class="getItemSrc"  data-src="' + urlArray[i] + '" src="' + urlArray[i] + '" /> </div>';
                    }
                }
            }
            jQuery(".section_y_pak_ui .field--items").append(templateAppender);
            jQuery(".getHiddenItems").append(templateVisibility);
            jQuery(".section_y_pak_ui.home-page-icon .field--items").append(templateAppenderHome);
            jQuery(".home-page-icon .getHiddenItems").append(templateVisibilityHome);


        }
        addImage();
        // Get random item and change source
        function changeRandomImage() {


            var changeImage = jQuery(".section_y_pak_ui").find(".getItemContainer").random();
            var getNewImage = jQuery(".getHiddenItems").find(".hiddenItemInContainer").random();
            //     var randomImage = urlArray[Math.floor(Math.random() * checkLength)];


            // items.fadeOut('normal', function(){
            //     items.fadeIn();
            // });

            var randomImageNew = getNewImage.find("img").attr("data-src");
            var randomImageOld = changeImage.find("img").attr("data-src");

            jQuery("img", getNewImage).attr("data-src", randomImageOld);
            jQuery("img", changeImage).attr("data-src", randomImageNew);

            changeImage.stop().animate({
                opacity: 0.3
            }, {
                duration: 0,
                complete: function () {
                    setTimeout(function () {
                        jQuery("img", changeImage).attr("src", randomImageNew);
                        changeImage.stop().animate({
                            opacity: 1,
                        }, 500);
                    }, 500);
                }
            });


            // jQuery("img", items).fadeIn("fast");

            // jQuery("img", items).fadeOut('10', function () {
            //     jQuery("img", items).attr("src", randomImageNew).fadeIn('10');
            //     jQuery("img", itemsNew).attr("src", randomImageOld);
            // });

        }


        setInterval(function () {
            changeRandomImage();
        }, 2000);

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
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                adaptiveHeight: true
            }
        }

        ]
    });
    jQuery('.eventsSlider').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        adaptiveHeight: true
    });
    jQuery('.bannerSlider').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false
    });
    jQuery('.news-slider-inner').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: "<div class='left-arrow'><i class='left-arrow-img'></i></div>",
        nextArrow: "<div class='right-arrow'><i class='right-arrow-img'></i></div>"
    });

    var $sez_toggle = jQuery('.sez-toggle');
    $sez_toggle.on('click', function () {

        jQuery("#sez-modal-body").html('');
        var $toggle = jQuery(this);
        embed = document.createElement('embed');
        embed.src = $toggle.attr('data-file');
        embed.type = "application/pdf"
        embed.width = "100%"
        embed.height = "400px"

        jQuery("#sez-modal-body").append(embed);
        jQuery("#sez-modal-title").html($toggle.attr('data-title'));

    });

    jQuery('.gSlider').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20',
        prevArrow: "<div class='left-arrow'><i class='left-arrow-img'></i></div>",
        nextArrow: "<div class='right-arrow'><i class='right-arrow-img'></i></div>",
        responsive: [{
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
    //     autoplay: false,
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
    //     //console.log(randomImage);
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
    //     autoplay: false,
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
    jQuery(document).find(".banner-image-video a").addClass("videoBanner");
    // jQuery(document).find(".banner-image-video").parents("h1").addClass("nopadding");
    jQuery('#block-views-block-banner-block-1 h1.nopadding').each(function (i, el) {
        $el = jQuery(el);

        if ($el.text().trim().length !== 0) {
            $el.removeClass('nopadding');

        }

    });
    if (jQuery(".gridParent").length > 0) {
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
        //        //console.log(VideoLink);

        // gridAnchor.css("display", "block");
        gridAnchor.addClass("videoGrids");
        // gridAnchor.addClass("cateGrid");
        // gridAnchor.attr("data-src", VideoLink);
        // gridAnchor.removeAttr("href");

        jQuery(".gridParentSlider").each(function () {
            jQuery(this).lightGallery({
                thumbnail: false,
                selector: ".videoGrids",
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0,
                    color: 'A90707'
                }
            });
        });
        jQuery(".gridParent").each(function () {
            jQuery(this).lightGallery({
                thumbnail: false,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0,
                    color: 'A90707'
                }
            });
        });
        jQuery(".banner-image-video").each(function () {
            jQuery(this).lightGallery({
                thumbnail: false,
                selector: ".videoBanner",
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0,
                    color: 'A90707'
                }
            });
        });
    }

    if (jQuery(".highlights-slider").length > 0) {
        var maxHeight = -1;
        jQuery('.highlights-slider .views-row').each(function () {
            maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
        });

        jQuery('.highlights-slider .views-row').each(function () {
            jQuery(this).height(maxHeight);
        });
    }

    if (jQuery(".mng-box .card").length > 0) {
        var maxHeight = -1;
        jQuery('.mng-box .card').each(function () {
            maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
        });

        jQuery('.mng-box .card').each(function () {
            jQuery(this).height(maxHeight);
        });
    }
    var stickyNavTop = jQuery('.custom-navigation').offset().top;

    var stickyNav = function () {
        var scrollTop = jQuery(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            jQuery('.custom-navigation').addClass('sticky');
        } else {
            jQuery('.custom-navigation').removeClass('sticky');
        }
    };

    stickyNav();
    jQuery(window).scroll(function () {
        stickyNav();
    });
    $element = jQuery(".breadcrumb li:nth-child(2)");
    if ($element.find('a').attr('href') === '/boi/node') {
        $element.remove();
    }
    var searchBlock = jQuery(".search-block-form");
    searchBlock.prepend("<h2 class='showsearch'></h2>")
    searchBlock.children("h2").removeClass("visually-hidden");
    searchBlock.children("h2").append("<span>Search BOI</span>");
    jQuery(".search-block-form form > div").addClass("form-type-search");
    //add hiden class to form div 
    //this fix search flash problem
    jQuery(".search-block-form form > div").addClass("hidden");
    jQuery(".search-block-form .form-type-search").prepend("<a class='label'></a>");
    jQuery(".search-block-form .form-type-search input").attr("placeholder", "Search");
    //remove input-hidden class from form
    jQuery(".search-block-form").removeClass('input-hidden');






    jQuery('.youtube-social-media .view-content').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /******** Why Pakistan Slider Section *********/

    var slickElmMap = jQuery(document).find('.field--name-field-why-invest-in-paksitan .field--name-field-banner');

    if (slickElmMap.length > 0) {
        slickElmMap.slick({
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

    var slickElmSectors = jQuery(document).find('.field--name-field-priority-sectors');

    if (slickElmSectors.length > 0) {
        slickElmSectors.slick({
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        });
    }
});
jQuery(window).on("load", function () {
    NProgress.done();

});
jQuery(document).on("click", ".showsearch", function () {
    //remove hidden class form div
    jQuery('body .btn-close').css('display', 'none');
    jQuery(".search-block-form form > div").removeClass("hidden");
    jQuery(".search-block-form .form-type-search").addClass("active");
    jQuery("html").css("overflow", "hidden");

});

jQuery(document).on("click", "a.label", function () {
    jQuery(".search-block-form .form-type-search").removeClass("active");
    jQuery('body .btn-close').css('display', 'block');
    jQuery("html").css("overflow", "visible");
});

jQuery('input:checkbox').change(function () {
    if (jQuery(this).is(":checked")) {
        jQuery(this).parents('label').addClass("active");
    } else {
        jQuery(this).parents('label').removeClass("active");
    }
});

(function ($) {

    var $active = $('#block-mainnavigation .active');
    $active = $($active[0]);

    var $sub_active = $active.find('li.active');

    //if already active element is there return from function
    if ($sub_active[0]) {
        return;
    }

    var $active_a = $active.find('>a');
    var href = $active_a.attr('href');

    var $other_a = $('#block-mainnavigation a[href="' + href + '"]');

    $other_a.closest('li').addClass('active');



})(jQuery);


//code added to solve double slash problem on live site //invest.gov.pk/....

jQuery("iframe.gdoc-field").each(function(){
    var $this = jQuery(this);
    var tthis = this;
    var src = this.src;
    var parts = src.split("?");

    var  p2 = parts[1].split("&");
    p2.forEach(function(el, i){
        if(el.match(/^url=/)){
            var n = el.replace("url=", "");
            n = n.replace(/^\/\//, "https://");
            p2[i] = "url="+n;
        }
    });
    if(parts[0]+"?"+p2.join("&") != src){
        this.src = "";
        var $newDoc = jQuery('<iframe class="gdoc-field" src="'+parts[0]+"?"+p2.join("&")+'"></iframe>');
        $this.closest(".pdf-parent").append($newDoc);
        $this.closest(".pdf-parent").removeClass("hidden");
        $this.remove();

    }else{
        $this.closest(".pdf-parent").removeClass("hidden");
    }
});

//jQuery(document).on('ready', function(){
//    (function($){
//    //console.log("olalalalalalalllalal");
//    a = $(".gtranslate select");
//        //console.log(a);
//    a.eq(1).val("en|"+a.eq(0).val()); 
//    a.eq(1).find("option[value='"+"en|"+a.eq(0).val()+"']").addClass("selectedlan");
//    a.eq(1).val("en|"+a.eq(0).val()).css("font-weight", "bold");
//
//    a.eq(1).on("change", function(){
//        
//        //console.log("kwana warka atta kata konata");
//        a.eq(1).find("option").removeClass("selectedlan");
//        a.eq(1).find("option[value='"+"en|"+a.eq(0).val()+"']").addClass("selectedlan");
//        a.eq(1).val("en|"+a.eq(0).val()).css("font-weight", "bold");
//    })
//
//
//})(jQuery);
//});