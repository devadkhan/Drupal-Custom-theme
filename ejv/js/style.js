jQuery(document).ready(function () {

    jQuery('#edit-name').on('keypress', function (e) {
        if (e.which == 32)
            return false;
    });
   
    //sub department selectbox disables
    jQuery("form.sub-deptt-edit div#edit-field-select-department-wrapper select").prop("disabled", "true");

    //main site bar dropdown
    jQuery(".expanded.dropdown a").on("click", function () {
        jQuery(this).closest(".expanded.dropdown").toggleClass("open-it");
    });
    if (jQuery("li.expanded.dropdown.active").length > 0) {
        jQuery("li.expanded.dropdown.active").addClass("open-it");
    }
    // accordian checkurl
    if (window.location.href.indexOf("collapseTwo") > -1) {
        jQuery(".panel-default:nth-child(1)").removeClass("active");
        jQuery(".panel-default:nth-child(1)").find(".panel-collapse").removeClass("in");
        jQuery(".panel-default:nth-child(2)").addClass("active");
        jQuery(".panel-default:nth-child(2)").find(".panel-collapse").addClass("in");
    }
    //code for popup toggle switch
    jQuery(document).on("click", ".cancel-reject", function () {
        jQuery(".custom-panel-group").css({
            "position": "relative",
            "z-index": "1"
        });
    });

    jQuery(document).ajaxComplete(function () {
        if (window.location.href.indexOf("collapseTwo") > -1) {
            jQuery(".panel-default:nth-child(1)").removeClass("active");
            jQuery(".panel-default:nth-child(1)").find(".panel-collapse").removeClass("in");
            jQuery(".panel-default:nth-child(2)").addClass("active");
            jQuery(".panel-default:nth-child(2)").find(".panel-collapse").addClass("in");
        }
        jQuery(".proposal-status-top-form .radio:last-child ,.proposal-status-form .radio:last-child ").on("click", function () {
            jQuery(".custom-panel-group").css({
                "position": "relative",
                "z-index": "-1"
            });
        });
        jQuery(".proposal-status-top-form .radio:first-child input[type='radio']:checked,.proposal-status-form .radio:first-child input[type='radio']:checked").closest("label").parent(".radio").addClass("input-checked");
        jQuery(".proposal-status-top-form .radio  input[type='radio']:checked,.proposal-status-form .radio:first-child input[type='radio']:checked").closest("label").parent(".radio").addClass("input-checked");

        jQuery(".discussion.authenticated  .send-icon").remove();
        jQuery(".discussion.authenticated .form-textarea-wrapper").append("<div class='send-icon'></div>");
        jQuery(document).on("click", ".send-icon", function () {
            jQuery(".discussion.authenticated  #edit-submit").click();
        });
    });
    jQuery(".proposal-status-top-form .radio:first-child input[type='radio']:checked,.proposal-status-form .radio:first-child input[type='radio']:checked").closest("label").parent(".radio").addClass("input-checked");


    if (jQuery(".proposal-status-top-form").hasClass("draft-proposal")) {
        jQuery("body").addClass("active-setting");
    }

    //removing path of drives when chosse browse button
    jQuery(document).on("change", "input[type='file']", function (e) {
        var fileName = e.target.files[0].name;
        jQuery(this).closest(".custom-file").find(".choose-custom").text(fileName);
    });
    jQuery(document).on('change', 'input[type="file"]', function () {
        myfile = jQuery(this).val();
        var extension = myfile.substr((myfile.lastIndexOf('.') + 1));
        console.log(extension);
        if (extension === "pdf" || extension === "PDF") {
            jQuery(this).closest(".custom-file").find(".errorpdf").remove();
            jQuery(".actions li:last-child a").removeAttr("disabled");
        } else {
            jQuery(this).val("");
            jQuery(this).closest(".custom-file").find(".choose-custom").text('');
            jQuery(this).closest("input[type='file']").after("<div class='errorpdf'><span>Choose file in PDF Format</span></div>");
            jQuery(".actions li:last-child a").attr("disabled", "disabled");
        }

    });



    // pop up showing and popu buttons 
    function disableButton() {
        jQuery('.submit-reject').attr('disabled', true);
        jQuery('.hidee .form-textarea').keyup(function () {
            if (jQuery(this).val().length != 0)
                jQuery('.submit-reject').attr('disabled', false);
            else
                jQuery('.submit-reject').attr('disabled', true);
        });
    }
    disableButton();

    jQuery(document).ajaxComplete(function () {
        disableButton();
    });
    jQuery(document).on("click", ".cancel-reject", function () {
        jQuery(".hidee").hide();
    });
    jQuery(document).on("click", ".submit-reject", function () {

        jQuery(".proposal-status-top-form .submit").click();
    });

    // ejv status page save button click
    jQuery(".path-jv-status .save").on("click", function () {
        jQuery(".path-jv-status .view-jv-status.view-display-id-page_1 .button.js-form-submit.form-submit").click();
    });
    jQuery(".path-jv-status .remove").on("click", function () {
        jQuery(".path-jv-status .views-form form > input").click();
    });


    //*****************ajax loader
    jQuery(document).ajaxStart(function () {
        jQuery('.loader_wrap').fadeIn();
    });
    jQuery(document).ajaxComplete(function () {
        jQuery('.loader_wrap').fadeOut();
    });

    // adding table class for all proposal page

    jQuery(".search-table").find("table").addClass("table table-striped");

    //adding placeholder
    jQuery(".search-table .searchable-area input").attr("placeholder", "Search here");
    jQuery("#block-searchproposalblock input[type='search']").attr("placeholder", "Search by keyword, company name or country");
    
    jQuery("#block-searchproposalblock input[type='button']").on("click", function () {
        jQuery(".searchable-area input").val(jQuery("#block-searchproposalblock input[type='search']").val());
        jQuery("#searchableinput").keyup();
    });

     jQuery("#block-searchproposalblock input[type='button']").on("click", function () {
        jQuery(".dataTables_filter input").val(jQuery("#block-searchproposalblock input[type='search']").val());
        jQuery(".dataTables_filter input").keyup();
    });

    // working on popup
    jQuery(document).on("click", ".btn-sm.toggle-on", function () {
        jQuery('#block-views-block-proposal-project-block-2').show();
    });
    jQuery(document).on("click", ".cancel", function () {
        jQuery('.view-proposal-project.view-display-id-block_2').hide();
    });

    jQuery(document).ajaxComplete(function () {
   jQuery("#block-searchproposalblock input[type='button']").on("click", function () {
        jQuery(".dataTables_filter input").val(jQuery("#block-searchproposalblock input[type='search']").val());
        jQuery(".dataTables_filter input").keyup();
    });
        jQuery("table").wrap("<div class='table-responsive'></div>");
        jQuery(".search-table").find("table").addClass("table table-striped");
        jQuery("#block-searchproposalblock input[type='button']").on("click", function () {
            jQuery(".searchable-area input").val(jQuery("#block-searchproposalblock input[type='search']").val());
            jQuery("#searchableinput").keyup();
        });

        if (jQuery(".search-table").length > 0) {
            var charstart = 2;
            var hColor = '#ccc';
            var hElement = 'span';
            var hClass = 'ts-highlight';
            var caseSensitiveSearch = 0;

            (function ($, Drupal, drupalSettings) {
                'use strict';
                console.log(drupalSettings.tablesearch);

                if (drupalSettings.tablesearch.characters) charstart = drupalSettings.tablesearch.characters;
                if (drupalSettings.tablesearch.highlightColor) hColor = drupalSettings.tablesearch.highlightColor;
                if (drupalSettings.tablesearch.highlightElement) hElement = drupalSettings.tablesearch.highlightElement;
                if (drupalSettings.tablesearch.highlightClass) hClass = drupalSettings.tablesearch.highlightClass;
                if (drupalSettings.tablesearch.caseSensitiveSearch) caseSensitiveSearch = drupalSettings.tablesearch.caseSensitiveSearch;

            })(jQuery, Drupal, drupalSettings);
            (function ($) {
                (function () {
                    var options = {
                        input: "#searchableinput",
                        start: charstart,
                        tr: "table.table-ts tbody tr",
                        td: ".views-tableseachable-1",
                        highlightEl: hElement,
                        highlightClass: hClass,
                        highlightColor: hColor
                    };

                    tablesearch(options);
                })();


                $("#casesensitive").change(function () {
                    if ($(this).is(':checked')) caseSensitiveSearch = 1;
                    else caseSensitiveSearch = 0;
                    console.log(caseSensitiveSearch);
                });


                function tablesearch(options) {
                    $(options.input).keyup(function () {
                        var valeur = $(this).val();
                        var length = valeur.length;

                        if (length >= options.start) {
                            _check_table(options.tr, options.td, valeur, length, options.highlightEl, options.highlightClass, options.highlightColor, caseSensitiveSearch);
                        } else {
                            _clear_table(options.tr, options.td, options.highlightEl, options.highlightClass);
                        }
                    });
                }


                function _check_table(tablenametr, tablenametd, searchstring, length, highlightEl, highlightClass, highlightColor, caseSensitiveSearch) {

                    var found = 0;
                    var x = '';
                    var x2 = '';
                    var text = '';
                    var m = '';
                    $(tablenametr).each(function () {
                        found = 0;
                        $(this).find(tablenametd).each(function () {
                            var text = $(this).text().trim();
                            var textNotCaseSensitive = text.toLowerCase();
                            var searchstringNotCaseSensitive = searchstring.toLowerCase();
                            console.log(textNotCaseSensitive + " >>>> " + searchstringNotCaseSensitive);
                            $(this).find(highlightEl + '.' + highlightClass).contents().unwrap();
                            var html = $(this).html();
                            var x = 0;
                            //case sensitive search 
                            if (caseSensitiveSearch) {
                                if (text.indexOf(searchstring, x) >= 0) {
                                    x = text.indexOf(searchstring);
                                    x2 = x + length;
                                    m = '<' + highlightEl + ' class="' + highlightClass + '" style="background-color:' + highlightColor + ';">' + text.substr(x, x2 - x) + '</' + highlightEl + '>';
                                    m = m.trim();

                                    var regex = new RegExp(text.substr(x, x2 - x), 'g');
                                    html = html.replace(regex, m);
                                    $(this).html(html.replace(text, m));
                                    found = 1;
                                }
                            } else {

                                //case unsesitive search
                                if (textNotCaseSensitive.indexOf(searchstringNotCaseSensitive, x) >= 0) {
                                    console.log('unsesitive found');
                                    x = textNotCaseSensitive.indexOf(searchstringNotCaseSensitive);
                                    x2 = x + length;
                                    m = '<' + highlightEl + ' class="' + highlightClass + '" style="background-color:' + highlightColor + ';">' + text.substr(x, x2 - x) + '</' + highlightEl + '>';
                                    m = m.trim();

                                    var regex = new RegExp(text.substr(x, x2 - x), 'g');
                                    html = html.replace(regex, m);
                                    $(this).html(html.replace(text, m));
                                    found = 1;
                                }
                            }

                        });
                        if (found == 0) $(this).closest('tr').css('display', 'none');
                        else $(this).closest('tr').css('display', 'table-row');
                    });
                }

                function _clear_table(tablenametr, tablenametd, highlightEl, highlightClass) {

                    $(tablenametr).each(function () {
                        $(this).find(tablenametd).each(function () {
                            $(this).find('.' + highlightClass).contents().unwrap();
                        });
                    });
                    $(tablenametr).css('display', 'table-row');
                }

            })(jQuery);
        }
    });

    // add disable classs when status is cancel and calling on ajax
    function forcanceltr() {
        jQuery(".cancelation").each(function () {
            var $this = jQuery(this);
            var currentValue = $this.data("role") === "Canceled";
            if (currentValue) {
                $this.closest("td").parent("tr").addClass("disabled");
            }
        });
    }
    forcanceltr();
    jQuery(".path-jv-status #views-exposed-form-jv-status-page-1 .select-wrapper select").on("change", function () {
        jQuery(document).ajaxComplete(function () {
            forcanceltr();
        });
    });


    jQuery(document).on("change", "#edit-field-is-company-oprate-in-pakis", function () {
        var getdisableval = jQuery(this).val();
        if (getdisableval == "No") {
            jQuery("#edit-field-ntn-number-0-value,  #edit-field-ntn-certificate-0-upload").attr("disabled", "disabled");
        } else {
            jQuery("#edit-field-ntn-number-0-value, #edit-field-ntn-certificate-0-upload").removeAttr("disabled", "disabled");
        }
    });
    jQuery(document).on("change", "#edit-form-field-field-is-company-oprate-in-pakis-0-field-is-company-oprate-in-pakis--2", function () {
        var getdisableval2 = jQuery(this).val();
        if (getdisableval2 == "No") {
            jQuery("#edit-form-field-field-ntn-certificate-0-field-ntn-certificate input,  #edit-form-field-field-ntn-number-0-field-ntn-number-0-value").attr("disabled", "disabled");
        } else {
            jQuery("#edit-form-field-field-ntn-certificate-0-field-ntn-certificate input, #edit-form-field-field-ntn-number-0-field-ntn-number-0-value").removeAttr("disabled", "disabled");
        }
    });
    jQuery(document).ajaxComplete(function () {
        jQuery(document).on("change", "#edit-field-is-company-oprate-in-pakis", function () {
            var getdisableval = jQuery(this).val();
            if (getdisableval == "No") {
                jQuery(".js-form-item-field-ntn-number-0-value input , #edit-field-ntn-certificate-0-upload").attr("disabled", "disabled");
            } else {
                jQuery(".js-form-item-field-ntn-number-0-value input , #edit-field-ntn-certificate-0-upload").removeAttr("disabled", "disabled");
            }
        });
    });

    //Add dot in comments
    jQuery(".watch-this  table tbody tr td:nth-child(6)").each(function () {
        var classString = jQuery(this).attr('class');
        var myClass = classString.split(' ')[0];
        var myString = myClass.substr(myClass.indexOf("-") + 1);
        if (myString) {
            jQuery(this).addClass("dot-added");
        }
    });

    //remove tooltip
    jQuery("input").removeAttr("data-original-title")
    //textare code ading button
    jQuery(".discussion.authenticated .form-textarea-wrapper").append("<div class='send-icon'></div>");
    jQuery(document).on("click", ".send-icon", function () {
        jQuery(".discussion.authenticated  #edit-submit").click();
    });
    // jQuery('.discussion.authenticated .form-textarea').keyup(function(){
    //     if(jQuery(this).val().length !=0)
    //         jQuery('.send-icon').css('display', 'block');            
    //     else
    //         jQuery('.send-icon').css('display', 'none');
    // });
    // popup Ended

    //adding wrapper to all tables
    jQuery("table").wrap("<div class='table-responsive'></div>");

    if(jQuery("#edit-field-company-sector option:nth-child(1)").val() === "_none"){
        jQuery("#edit-field-company-sector option:nth-child(1)").val("");
    }
    if(jQuery("#edit-field-total-number-of-employees  option:nth-child(1)").val() === "_none"){
        jQuery("#edit-field-total-number-of-employees  option:nth-child(1)").val("");
    }

    // Accordian open and close
    jQuery(".custom-panel-group .panel-default").on("click", function () {
        jQuery(".panel-default.active").removeClass('active');
        jQuery(this).addClass("active");
    });

    // site admin heading changes
    var checkpagetext = jQuery(".site-admin.hide-term-list .page-header").text();
    jQuery(".site-admin.hide-term-list .local-actions li a").text(" Add " + checkpagetext);

    // working on jquery steps and validation hardcord h3 to initialize steps
    jQuery("#first-section-id").before("<h3></h3");
    jQuery("#first-section-id").after("<h3></h3");

    if (jQuery(".authenticated  #user-register-form , .authenticated  .company-profile-front form").length > 0) {

        var form = jQuery("#user-register-form");
        var makecopy = jQuery("#user-register-form #step-first-id").append('<li class="disabled-li"><a class="num">3</a></li>');

        form.validate({
            errorPlacement: function errorPlacement(error, element) {
                element.before(error);
            },
            rules: {
                "pass[pass2]": {
                    equalTo: "#edit-pass-pass1"
                }
            },
            messages: {
                "pass[pass2]": {
                    equalTo: "Password not match"
                }
            }
        });
        form.children("#step-first-id").steps({
            headerTag: "h3",
            bodyTag: "div",
            transitionEffect: "slideLeft",
            labels: {
                finish: "Submit",
                previous: "Back"
            },
            onStepChanging: function (event, currentIndex, newIndex) {
                form.validate().settings.ignore = ":disabled,:hidden";
                //              return form.valid();
                // console.log(currentIndex);
                // console.log(newIndex);
                if (newIndex == 1) {
                    return form.valid();
                }
                if (newIndex == 0) {
                    return true;
                }
            //     $("#edit-field-company-phone-number-0-value, #edit-field-contact-number-0-value").on('paste', function (event) {
            //       if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
            //         event.preventDefault();
            //     }
            // });

            $("#edit-field-company-fax-number-0-value, #edit-field-fax-number-0-value").on("keypress",function(event){
              if(event.which <= 48 || event.which >=57){
                return false;
            }
        });

        },
        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            jQuery("#edit-submit").click();
        }
    });
  
        
        jQuery('#edit-name').on('keypress', function (e) {
            if (e.which == 32)
                return false;
        });
        jQuery("#edit-field-export-destinations option:nth-child(1)").remove();
        jQuery("#edit-field-export-destinations").multiSelect();

        jQuery("#edit-field-company-sector-wrapper option:nth-child(1)").remove();

        jQuery("select[multiple='multiple']").multiSelect();


        // jQuery("#edit-field-fax-number-0-value,#edit-field-company-fex-number-0-value,#edit-field-company-phone-number-0-value,#edit-field-company-fax-number-0-value,#edit-form-field-field-company-phone-number-0-field-company-phone-number-0-value,#edit-form-field-field-contact-number-0-field-contact-number-0-value,#edit-field-address-0-address-postal-code,#edit-form-field-field-fax-number-0-field-fax-number-0-value,#edit-form-field-field-contact-number-0-field-contact-number-0-value,#edit-form-field-field-company-fax-number-0-field-company-fax-number-0-value,#edit-field-contact-number-0-value").keypress(function (e) {
        //     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //         return false;
        //     }
        // });
        // jQuery("#edit-field-contact-number-0-value").keypress(function (e) {

        //     if (e.which != 8 && e.which != 0 && e.which != 43 && (e.which < 48 || e.which > 57)) {
        //         return false;
        //     }
        // });

        jQuery("#edit-field-cpmpany-name-0-value").keypress(function (e) {
            var key = e.keyCode;
            if (key >= 48 && key <= 57) {
                e.preventDefault();
            }
        });



        jQuery("#edit-field-is-company-oprate-in-pakis").on("change", function () {

            var $thisValue = jQuery(this).val();
            console.log($thisValue);
            if ($thisValue === 'No') {
                jQuery("#edit-field-country-0-value--2").children("option[value^=PK]").remove();
                jQuery("#edit-field-address-country").children("option[value^=212]").remove()
            } 
            else {
                jQuery("#edit-field-country-0-value--2").children("option[value^=PK]").remove()
                // jQuery("#edit-field-country-0-value--2").append("<option value='PK'>Pakistan</option>");
                var op1 = jQuery("#edit-field-country-0-value--2 option[value='OM']")
                var option = jQuery("<option value='Pk'>Pakistan</option>");
                option.insertAfter(op1)

                jQuery("#edit-field-address-country").children("option[value^=212]").remove()
                jQuery("#edit-field-address-country").append("<option value=212>Pakistan</option>");
                // var op2 = jQuery("#edit-field-address-country option[value='15640']")
                // var options = jQuery("<option value='15641'>Pakistan</option>");
                // options.insertAfter(op2)
            }
        });

        $city_orig = jQuery("[name='field_city[0][value]']");
        $city = jQuery("<select name='field_city[0][value]'>");
        $city.attr('id', 'citypopulate');

        $city_orig.before($city);
        $city_orig.attr('name', '');
        $city_orig.hide();

        city_none_tpl = '<option value="_none">- None -</option>';
        $city.html(city_none_tpl);

        $other_option = jQuery("<option value='_other'>Other</option>");

        $country = jQuery("[name=field_address_country]");
        $country.on('change', function () {
            jQuery.ajax({
                url: drupalSettings.path.baseUrl + 'data/getTaxonomyList',
                data: "parent=" + $country.val(),
                success: function (d) {
                    $city.html(city_none_tpl);

                    d.childs.forEach(function(child){
                        var $option = jQuery("<option value='" + child + "'>" + child + "</option>");
                        $city.append($option);
                    });
                    $city.append($other_option);

                },
                error: function (e) {
                    console.log("AJAZ ERROR", e);
                }
            });

        });


//        jQuery("#citypopulate").on("change", function () {
//            var cityVal = jQuery(this).val();
//            console.log(cityVal);
//            populateCity = JSON.parse(jQuery("[name='field_jso[0][value]']").val());
//            populateCity.city = cityVal;
//            jQuery("[name='field_jso[0][value]']").val(JSON.stringify(populateCity));
//        });



}

jQuery('#block-searchproposalblock input[type="search"]').keypress(function (e) {
    if (e.which == 13) {
        jQuery('#block-searchproposalblock input[type="button"]').click();
    }
});

var gethtml = jQuery('#bootstrap-panel--2').clone();
jQuery('#bootstrap-panel--2').remove();
jQuery('#edit-field-fax-number-wrapper').after(gethtml);

    // remove dots from jquery step 
    jQuery(".number").each(function () {
        var myString = jQuery(this).text();
        var newString = myString.substr(0, myString.length - 1)
        jQuery(this).text(newString);
    });


    jQuery(document).on('input', '.telNumber', function () {
        this.value = this.value.replace(/[^0-9+]+/g, '');
    });
    jQuery(document).on('mouseenter paste', '.telNumber', function () { // Prevent Paste & Drag
        var val = jQuery(this).val();
        if (val != '0') {
            val = val.replace(/[^0-9+]+/g, "");
            jQuery(this).val(val);
        }
    });

    jQuery('#edit-field-company-phone-number-0-value, #edit-field-contact-number-0-value,#edit-field-company-fax-number-0-value,#edit-field-fax-number-0-value').addClass('telNumber');
    // jQuery("#edit-field-company-phone-number-0-value,#edit-field-contact-number-0-value").keypress(function (e) {
    //     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    //         return false;
    //     }
    // });


    // jQuery("#edit-field-company-fax-number-0-value,#edit-field-fax-number-0-value").keypress(function (e) {
    //     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    //         return false;
    //     }
    // });

});


 jQuery(window).on('load',function(){

      var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    jQuery('#edit-field-company-website-0-value').focusout(function(){
        console.log('1232');
        var ourUrl = jQuery(this).val();
        console.log(ourUrl)
        if (ourUrl.match(regex)) {
            jQuery(this).closest(".form-item").removeClass('invalidSite');
        } 
        else {
          jQuery(this).closest(".form-item").addClass('invalidSite');
          console.log('abc');
      }
  });

  });