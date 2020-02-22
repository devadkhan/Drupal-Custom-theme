jQuery(document).ready(function () {


    if (jQuery(".path-search-incentive").length > 0) {
        //search-incentive
        searchIncentive();

        function searchIncentive() {
            $sector = jQuery("select[name=field_sector_target_id]");
            $sub_sector = jQuery("select[name='field_sub_sector_target_id']");
            $json_input = jQuery("input[name='sector-subsector']");
            jsondata = JSON.parse($json_input.val());

            $sub_sector.children("option").hide();
            $sub_sector.find("option[value='All']").show();

            $sector.on("change", function () {
                $sub_sector.val('All')
                let v = this.value;
                $sub_sector.children("option").hide();
                if (jsondata[v]) {
                    let childs = jsondata[v];
                    for (child of childs) {
                        $sub_sector.children("option[value='" + child.id + "']").show();
                    }
                }
                $sub_sector.find("option[value='All']").show();
            });
        }

        jQuery(document).ajaxComplete(function () {
            console.log("AJAX");
            var $sub_sector = jQuery("select[name='field_sub_sector_target_id']");
            var x = jQuery("select[name=field_sector_target_id] option:selected").val();

            $sub_sector.children("option").hide();
            if (jsondata[x]) {
                let childs = jsondata[x];
                for (child of childs) {
                    $sub_sector.children("option[value='" + child.id + "']").show();
                }
            }

            searchIncentive();
        });

    }


    //    *****************************    



    jQuery(".path-search-incentive .view-search-incentive > .view-content").hide();
    jQuery("button#edit-submit-search-incentive").on("click", function () {
        setTimeout(function () {
            jQuery(".path-search-incentive  .view-search-incentive > .view-content").show();
        }, 3000);


    });
    jQuery(document).ajaxStart(function () {
        jQuery('.loader_wrap').fadeIn();
    });
    jQuery(document).ajaxComplete(function () {
        jQuery('.loader_wrap').fadeOut();
    });


    //validation 
    jQuery("#user-register-form").validate({
        rules: {
            "field_name[0][value]": {
                required: true,
            },
            mail: {
                required: true,
                email: true
            },
            name: {
                required: true,

            },
            "field_address[0][value]": {
                required: true,

            },
            "field_postcode[0][value]": {
                required: true,
            },
            "field_phone_number[0][value]": {
                number: true,
            },

        },
        messages: {

        }
    });


    jQuery("#user-login-form").validate({
        rules: {
            name: {
                required: true,
            },
            pass: {
                required: true,
            },

        },
        messages: {
            name: {
                required: 'This field is required',

            },
            pass: {
                required: 'This field is required',

            },


        }
    });

    jQuery("#user-pass").validate({
        rules: {
            name: {
                required: true,
            },


        },
        messages: {

        }
    });

    jQuery('#user-register-form #edit-field-name-0-value').keydown(function (e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
            if (!((key == 8)  || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });

});
