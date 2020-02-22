
jQuery(document).ready(function () {
    if(jQuery(".ckeditor-accordion-container").length > 0){
        jQuery(".ckeditor-accordion-container > dl dt > a").append("<span class='ckeditor-accordion-toggle'></span>");
    }
    (function ($) {

        //css selector elements
        //use tag names .class or #id
        var tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'a', 'span', 'strong', 'em', 'ul', 'ol', 'li'];

        var selector = tags.join(", ");

        //current ration
        //100 orignal size
        var current_ration = 100;

        var minRatio = 60;
        var maxRatio = 120;

        //select all elements
        //change this to select only those elements inside the body tag
        //or the tag which are rendered
        var elements = $(selector);
        //loop on all elements and save there orignal font-sizes and unit(px, %)
        elements.each(function (i, e) {
            current_tag = $(e);
            var font_size = current_tag.css('font-size');
            var line_height = current_tag.css('line-height');

            //            console.log(line_height);
            current_tag.data('originalLineHeight', parseInt(line_height.replace(line_height.substr(-2), '')));

            // console.log(current_tag.data('originalLineHeight'));

            if (font_size.indexOf('%') > -1) {
                /* Percentage */
                current_tag.data('originalSize', parseInt(font_size.replace('%', '')));
                current_tag.data('originalUnit', '%');
            } else {
                /* Other units */
                current_tag.data('originalSize', parseInt(font_size.replace(font_size.substr(-2), '')));
                current_tag.data('originalUnit', font_size.substr(-2));
            }
        });

        //increment font size
        function increment() {
            if (current_ration + 5 <= maxRatio) {
                current_ration += 5;
            }

            setFontSize();
        }

        function decrement() {
            if (current_ration - 5 >= minRatio) {
                current_ration -= 5;
            }
            setFontSize();
        }

        function reset() {
            current_ration = 100;
            setFontSize();
        }

        function setFontSize() {
            elements.each(function (i, e) {
                current_tag = $(e);
                current_tag.css('font-size', current_tag.data('originalSize') * current_ration / 100 + current_tag.data('originalUnit'));

                current_tag.css('line-height', current_tag.data('originalLineHeight') * current_ration / 100 + "px");
            });
        }

        //    window.incrementFontSize = increment;
        //    window.decrementFontSize = decrement;
        //    window.resetFontSize = reset;

        $(".incFontSize").click(function () {
            increment();
        });

        $(".resetFontSize").click(function () {
            reset();
        });

        $(".decrementFontSize").click(function () {
            decrement();
        });
    })(jQuery);
});