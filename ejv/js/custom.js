jQuery(document).ready(function () {
    jQuery("#edit-field-comments-wrapper textarea").keyup(function(){
        if (jQuery(this).val() !== ''){
            
            jQuery('.send-icon').css('background-image',' url(https://115.186.58.50/ejvlive/themes/ejv/images/green-send-icon.png)');
        } 
        else {
            jQuery('.send-icon').css('background-image',' url(https://115.186.58.50/ejvlive/themes/ejv/images/send-icon.png)');

        }
    });


    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    jQuery('#edit-field-company-website-0-value').focusout(function(){
        var ourUrl = jQuery(this).val();
        if (ourUrl.match(regex)) {
            jQuery(this).closest(".form-item").removeClass('invalidSite');
        } 
        else {
          jQuery(this).closest(".form-item").addClass('invalidSite');
          jQuery('form').submit(function(e){
             e.preventDefault();
         });
      }
  });

    //comments after submit url 
    // jQuery(".view-id-jv_status.view-display-id-page_1 table td.views-field.views-field-field-proposal-status-1").each(function(){
    //   if(jQuery(this).text().trim() === 'Canceled'){
    //      jQuery(this).append("<span class='colTool'>The Proposal is not approved by admin & will be deleted from proposal list in one week period of time.</span>")

    //     }

    // });

    var addr = window.location.href;
    if(addr.indexOf('/discussion/discussion-') > -1){
        if(addr.indexOf('#')>-1) {
            //console.log('Address Checking...');
            //console.log(addr.substr(0, location.href.indexOf("#")));
            window.location.href = addr.substr(0, location.href.indexOf("#"));
        }
    }


    jQuery('.unpublished-row').attr("data-original-title", "The proposal is not approved by admin & will be deleted from proposal list in osne week period Of time");



    jQuery('select option:contains("Israel")').css('display','none');

    jQuery('select option:contains("Hong Kong SAR China")').text('Hong Kong ,China');

    jQuery('select option:contains("Taiwan")').text('Taiwan ,China');

    jQuery('select option:contains("Macau")').text('Macau ,China');

    jQuery('select option:contains("Macau SAR China")').text('Macau ,China');

    jQuery('select option:contains("Macao SAR China")').text('Macau ,China');
    jQuery('#edit-field-estimated-paid-up-capital-wrapper select option:contains("- None -")').text('-select a value-');
    jQuery('#edit-field-estimated-annual-turnover-wrapper select option:contains("- None -")').text('-select a value-');
    jQuery('#edit-field-estimated-annual-export-sa-wrapper select option:contains("- None -")').text('-select a value-');
    jQuery('#edit-field-export-destinations-wrapper select option:contains("- None -")').text('-select-');
    jQuery('#edit-field-city-wrapper select option:contains("- None -")').text('-select-');
    jQuery('.views-field.views-field-field-proposal-status-1:contains("Canceled")').text('Cancelled');
    jQuery("body.site-admin.user-logged-in.path-new-signups  .view.view-company-signup.view-id-company_signup.view-display-id-page_2 table td:contains('Actived')").text('Active');
    jQuery('select option[value=_none]').val('');
    //jQuery('.view-status-table-column').text('rejected');

    jQuery('select option:contains("Canceled")').text('Cancelled');

    // jQuery(".toggle-govt").on("click", function () {
    //   var $govCheckbox = jQuery(".form-item-roles-target-id-government input").click();
    // });

    // jQuery(".toggle-private").on("click", function () {
    //   var $pivCheckbox = jQuery(".form-item-roles-target-id-permanent input").click();
    // });


    // jQuery(".toggle-new").on("click", function () {
    //   jQuery(".js-form-item-created input").val("-7 days").keyup(); 
    // });


    //*******************  
    jQuery(".status-toggle-button input").on("change", function () {
        if (jQuery(this).is(":checked")) {
            jQuery(this).closest("tr").find("td.ajax-status").text("Active")
            console.log("check");
        } else {
            jQuery(this).closest("tr").find("td.ajax-status").text("Block")
        }

    });

    //*******************

    //    jQuery(".user-logged-in #user-register-form").validate({
    //        rules: {
    //
    //        },
    //        messages: {
    //
    //
    //        }
    //    });


    jQuery("#change-pwd-form").validate({
        rules: {
            current_pass: {
                required: true,
            },
            "pass[pass1]": {
                required: true,
            },
            "pass[pass2]": {
                equalTo: "#edit-pass-pass1",
            },
        },
        messages: {


        }
    });



    jQuery("[id^=node-proposal-form]").validate({
        rules: {
            "title[0][value]": {
                required: true,
            },
            "body[0][value]": {
                required: true,
            },


        },

        messages: {


        }
    });
    /*************************/
    checkForemptyTable();

    function checkForemptyTable() {
        jQuery("table .views-empty").closest("tr").addClass("empty-table");
    }


    if (jQuery(".categories-block-edit").length > 0) {
        var inputvalue = jQuery(".path-taxonomy .region.region-content form input.form-control").val();
        jQuery(".page-header").text("Edit " + inputvalue);
    }

    if (jQuery(".categories-block-add").length > 0) {
        var url = jQuery(location).attr('href');
        var parts = url.split("/");
        var last_part = parts[parts.length - 2];
        ns = last_part.replace(/([-_])+/g, ' ');
        jQuery(".page-header").text("Add " + ns);
    }
    //************************
    jQuery('select[multiple="multiple"]').multiSelect();

    jQuery(document).ajaxComplete(function () {
        checkForemptyTable();
        jQuery('select[multiple="multiple"]').multiSelect();
    });

    function mynav() {
        if (jQuery(window).width() < 769) {
            jQuery(".menu.menu--site-admin.nav").wrap("<div class='customized-navbar'></div>");
            jQuery(".customized-navbar").prepend("<button class='show-menu'></button");
            jQuery(".menu--site-admin").prepend("<div class='sidebar-brand'><a>x</a></div>");
        }

        jQuery(".show-menu").click(function () {
            jQuery(".customized-navbar").addClass("toggled");
        });
        jQuery(".sidebar-brand a").click(function () {
            jQuery(".customized-navbar").removeClass("toggled");
        });
    }
    mynav();





    jQuery(function () {
        var loc = window.location.href;
        if (/otp/.test(loc)) {
            jQuery('body').addClass('tech');
        }
    });

    jQuery('#edit-field-otp').pincodeInput({
        hideDigits: false
    });


    /**** delete ejv status form logic*/
    function mydropdown() {
        $ = jQuery;
        //    alert("HELLLOOOOOOOOO");
        $all_checkbox_container = jQuery(".check-all");
        $all_checkbox = jQuery("<input type='checkbox'>");

        $all_checkbox_container.html('');
        $all_checkbox_container.append($all_checkbox);
        $checkboxes_container = jQuery(".node-delete-checkbox");
        jQuery(".check-all input").wrap(".node-delete-checkbox");
        $checkboxes_container.each(function () {
            $(this).html("<input type='checkbox' name='" + $(this).attr("data-id") + "' />");
        })

        $all_checkbox.on('change', function () {
            let checked = this.checked;
            jQuery(".node-delete-checkbox input").prop("checked", checked);
        })

        $btn = jQuery("<input type='submit' value='Remove' class='button js-form-submit form-submit btn-success btn icon-before'>");
        $all_checkbox_container.closest("form").prepend($btn);
        $btn.on("click", function (evt) {
            evt.preventDefault();
            $checkboxes = $(".node-delete-checkbox input");
            let checkboxdata = {};
            $checkboxes.each(function () {
                if (!this.checked) {
                    return;
                }
                let $this = jQuery(this);
                checkboxdata[$this.attr("name")] = this.checked;
            });

            let ddd = JSON.stringify(checkboxdata);
            $btn.closest('.view-content').hide();
            jQuery.ajax({
                type: "GET",
                data: "name=" + JSON.stringify(checkboxdata),
                url: Drupal.url("/delete/jv_status"),
                success: function (d) {
                    let response = JSON.parse(d.response);
                    console.log(response);
                    let deleted_ids = response.deleted;
                    let $msgs = jQuery(response.msgs);
                    console.log($msgs);
                    jQuery(document.body).append($msgs);
                    if (response.status) {
                        //                    alert(response.msg);
                        $btn.closest('.view-content').show();

                        for (let deleted_id of deleted_ids) {
                            $(".node-delete-checkbox input[name='" + deleted_id + "']").closest("tr").remove();
                        }
                        //                        location.reload();
                    } else {
                        $btn.closest('.view-content').hide(200);
                        alert(response.msg);
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            })

        });

    }
    mydropdown();
    jQuery(".path-jv-status #views-exposed-form-jv-status-page-1 .select-wrapper select").on("change", function () {
        jQuery(document).ajaxComplete(function () {
            mydropdown();
        });
    });


    jQuery(".site-admin.user-logged-in #user-form #edit-mail,.site-admin.user-logged-in #user-form #edit-name").attr("disabled", "disabled")

    //**********************charts****************

    /*********************redraw chart on file********/
    jQuery(".view-reports  form  button").on("click", function () {
        jQuery(document).ajaxComplete(function () {
            if (jQuery("#draw-chart").hasClass("column")) {
                jQuery("button[data-chart-type='column']").click();
            } else if (jQuery("#draw-chart").hasClass("line")) {
                jQuery("button[data-chart-type='line']").click();
            } else if (jQuery("#draw-chart").hasClass("donut")) {
                jQuery("button[data-chart-type='donut']").click();
            } else if (jQuery("#draw-chart").hasClass("pie")) {
                jQuery("button[data-chart-type='pie']").click();
            }
        });

    });

    /***************************************/


    if (jQuery("#draw-chart").length > 0) {
        drawChartColumn();
        jQuery("#charttypeBtn button").on("click", function () {
            var chartType = jQuery(this).attr("data-chart-type");
            if (chartType === "pie" || chartType === "donut") {
                drawChart(chartType)
            }
            if (chartType === "column") {
                drawChartColumn()
            }
            if (chartType === "line") {
                drawChartLine();
            }

        });
    }



    function drawChart(chartType) {
        jQuery("#draw-chart").removeClass();
        jQuery("#draw-chart").addClass(chartType);

        if (chartType === "donut") {
            var chartType = "pie";
            innerSize = 200
        } else {
            innerSize = 0
        }
        var chartData = [];

        $chartDataContents = jQuery(".view-reports  .field-content");

        $chartDataContents.each(function () {
            let $chartDataContent = jQuery(this);
            let html = $chartDataContent.html();
            var [key, value] = html.split(" ,");
            chartData.push([key, Number(value)]);
        });

        console.log(chartData);
        Highcharts.chart('draw-chart', {
            chart: {
                type: chartType,
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    innerSize: innerSize,
                    allowPointSelect: false,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage}'
                    }
                }
            },
            series: [{
                type: chartType,
                data: chartData
            }]
        });

        var chartValueLength = chartData.length;
        jQuery(".draw-chart-color").empty();
        for (let i = 0; i < chartValueLength; i++) {
            var color = jQuery('.highcharts-series.highcharts-pie-series .highcharts-color-' + i).attr('fill');
            jQuery('.draw-chart-color').append('<div class="list-records"><span><i style="background:' + color + '"></i>' + chartData[i][0] + '</span></div>');
        }
        Highcharts.setOptions({
            lang: {
                noData: "Your custom message"
            }
        })


    }

    function drawChartColumn() {

        jQuery("#draw-chart").removeClass();
        jQuery("#draw-chart").addClass("column");

        var chartData = [];

        $chartDataContents = jQuery(".view-reports  .field-content");

        $chartDataContents.each(function () {
            let $chartDataContent = jQuery(this);
            let html = $chartDataContent.html();
            var [name, y] = html.split(",");
            chartData.push({
                name,
                y
            });
        });

        //chartData = JSON.stringify(chartData);

        var tempArray = [];

        for (var i in chartData) {
            var temp = {
                name: chartData[i].name,
                y: parseFloat(chartData[i].y),
            }
            tempArray.push(temp);
        }




        // Create the chart
        new Highcharts.chart('draw-chart', {
            chart: {
                type: 'column'
            },
            title: false,
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: [
            {
                name: "",
                colorByPoint: true,
                data: tempArray
            }
            ],

        });


        var chartValueLength = tempArray.length;
        jQuery(".draw-chart-color").empty();
        for (let i = 0; i < chartValueLength; i++) {
            var color = jQuery('.highcharts-series-group .highcharts-series  .highcharts-color-' + i).attr('fill');
            jQuery('.draw-chart-color').append('<div class="list-records"><span><i style="background:' + color + '"></i>' + tempArray[i].name + '</span></div>');
        }

        Highcharts.setOptions({
            lang: {
                noData: "Your custom message"
            }
        })
    }

    function drawChartLine() {
        jQuery("#draw-chart").removeClass();
        jQuery("#draw-chart").addClass("line");

        var chartData = [];

        $chartDataContents = jQuery(".view-reports  .field-content");

        $chartDataContents.each(function () {
            let $chartDataContent = jQuery(this);
            let html = $chartDataContent.html();
            var [name, y] = html.split(",");
            chartData.push({
                name,
                y
            });
        });

        //chartData = JSON.stringify(chartData);

        var tempArray = [];

        for (var i in chartData) {
            var temp = {
                name: chartData[i].name,
                y: parseFloat(chartData[i].y),
            }
            tempArray.push(temp);
        }


        Highcharts.chart('draw-chart', {
            chart: {
                type: "line",
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '<b>{point.y:.1f}%</b>'
            },
            legend: false,
            series: [{
                type: "line",
                data: tempArray
            }]
        });


        var chartValueLength = tempArray.length;
        jQuery(".draw-chart-color").empty();
        for (let i = 0; i < chartValueLength; i++) {
            var color = jQuery('.highcharts-series-group .highcharts-series  .highcharts-color-' + i).attr('fill');
            jQuery('.draw-chart-color').append('<div class="list-records"><span><i style="background:' + color + '"></i>' + tempArray[i].name + '</span></div>');
        }
        Highcharts.setOptions({
            lang: {
                noData: "Your custom message"
            }
        })
    }

    //***************


    jQuery("#edit-field-comments-0-value").keyup(function () {
        var commentLen = jQuery(this).val().length;

        if (commentLen > 0) {
            jQuery(".send-icon").removeClass("disables-bnt");
        } else {
            jQuery(".send-icon").addClass("disables-bnt");
        }
    });


    jQuery("input[name='files[field_attachment_0]']").change(function () {
        jQuery(document).ajaxComplete(function () {
            if (jQuery("#edit-field-attachment-wrapper .file").length > 0) {
                jQuery(".send-icon").removeClass("disables-bnt");
            } else {
                jQuery(".send-icon").addClass("disables-bnt");
            }
        });
    });

    jQuery("input[name='files[field_attachment_0_remove_button]']").change(function () {
        jQuery(document).ajaxComplete(function () {
            if (jQuery("#edit-field-attachment-wrapper .file").length > 0) {
                jQuery(".send-icon").removeClass("disables-bnt");
            } else {
                jQuery(".send-icon").addClass("disables-bnt");
            }
        });
    });

    //Datatable search empty warning off
    if(jQuery.fn.dataTable){
        jQuery.fn.dataTable.ext.sErrMode = "";

    }

    //user name redirect to profile
    //    jQuery("#block-ejv-account-menu [data-drupal-link-system-path='user']").attr("href", drupalSettings.path.baseUrl+"company-profile");

    if(jQuery(".form-item-field-select-department option:nth-child(1)").val() === "_none"){
        jQuery(".form-item-field-select-department option:nth-child(1)").val("");
    }


    // $('#edit-field-contact-number-0-value').on('paste', function (event) {
    //   if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
    //     event.preventDefault();
    //   }
    // });

    // $("#edit-field-contact-number-0-value").on("keypress",function(event){
    //   if(event.which <= 48 || event.which >=57){
    //     return false;
    //   }
    // });
    $('#edit-field-fax-number-0-value').on('paste', function (event) {
        if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
            event.preventDefault();
        }
    });

    $("#edit-field-fax-number-0-value").on("keypress",function(event){
        if(event.which <= 48 || event.which >=57){
            return false;
        }
    });
});

