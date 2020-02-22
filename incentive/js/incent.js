//jQuery(document).ready(function () {
//
//	//    remove tooltip
//	jQuery("input").removeAttr("data-original-title");
////    user create cancel button hide
//jQuery(".user-cancel")?jQuery("#edit-cancel").hide():null;
//    //vocabulary hide countries
//    jQuery("[data-drupal-selector='edit-vocabularies-countries'],[data-drupal-selector='edit-vocabularies-country-2']").hide();
//
//    //    jQuery(".shs-field-container > .shs-widget-container:first-child .form-select.chosen-enable").on("change" , function(){
//    //        if((jQuery(this).val() == "_none")){
//    //         jQuery(".shs-field-container > .shs-widget-container:first-child").after("");
//    //     }
//    //     else{
//    //        jQuery(".shs-field-container > .shs-widget-container:first-child").after("");
//    //         jQuery(".shs-field-container > .shs-widget-container:first-child").after("<label class='customied-label'>City</label>");
//    //     }
//    // });
//
//    jQuery(".shs-field-container > .shs-widget-container:first-child .form-select.chosen-enable").on("change" , function(){
//    	jQuery(document).ajaxComplete(function () {
//    		if((jQuery(this).val() == "_none")){
//    			jQuery(".shs-field-container > .shs-widget-container:first-child").after("");
//    		}
//    		else{
//    			jQuery(".shs-field-container > .shs-widget-container:first-child").after("");
//    			jQuery(".shs-field-container > .shs-widget-container:first-child").after("<label class='customied-label'>City</label>");
//    		}
//    	});
//    });
//
//
//    //    ********change catogory table ist theading text**************
//    jQuery(".taxonomy-overview-vocabularies .table>thead:first-child>tr:first-child>th:first-child").text("CATEGORIES");
//    jQuery(".hide-term-list table#taxonomy tr td:first-child a").on("click", function (event) {
//    	event.preventDefault()
//    });
//    //    ************************
//    jQuery("#edit-field-sector option:nth-child(1)").removeAttr("selected");
//    jQuery("#edit-field-sector option:nth-child(1)").remove();
//
//    jQuery("#edit-field-sub-sector option:nth-child(1)").removeAttr("selected");
//    jQuery("#edit-field-sub-sector option:nth-child(1)").remove();
//
//    jQuery("#edit-field-agency-wrapper option:nth-child(1)").removeAttr("selected");
//    jQuery("#edit-field-agency-wrapper option:nth-child(1)").remove();
//
//    jQuery("#edit-field-type-of-incentives-wrapper option:nth-child(1)").removeAttr("selected");
//    jQuery("#edit-field-type-of-incentives-wrapper option:nth-child(1)").remove();
//
//    jQuery("#edit-field-ministry-wrapper option:nth-child(1)").removeAttr("selected");
//    jQuery("#edit-field-ministry-wrapper option:nth-child(1)").remove();
//
//    jQuery("#edit-field-location-for-considerat-wrapper option:nth-child(1)").removeAttr("selected");
//    jQuery("#edit-field-location-for-considerat-wrapper option:nth-child(1)").remove();
//   
//    jQuery("#edit-field-select-sector-wrapper  option:nth-child(1)").removeAttr("selected");
//
//    jQuery("#edit-field-select-sector-wrapper  option:nth-child(1)").remove();
//
//    jQuery("select[multiple='multiple']").multiSelect();
//
//
//    if (jQuery("#node-incentives-edit-form").length > 0) {
//    	var onpageselectedvalue = jQuery("#edit-field-sector").val().length;
//    	if (onpageselectedvalue == 0) {
//    		jQuery(".field--name-field-sub-sector").fadeOut();
//    	} else {
//    		jQuery(".field--name-field-sub-sector").fadeIn();
//    	}
//    }
//
//
//    jQuery("#edit-field-sector").on("change", function () {
//    	var selectValue = this.value;
//    	console.log(selectValue);
//    	if (selectValue === "") {
//    		jQuery(".field--name-field-sub-sector").fadeOut();
//    	} else {
//    		jQuery(".field--name-field-sub-sector").fadeIn();
//    	}
//    });
//
//
//
//    //    **********************
//    jQuery(".form-item-field-sub-sector-target-id").fadeOut();
//    jQuery("[name='field_sector_target_id[]']").on("change", function () {
//    	var selectValue = this.value;
//    	if (selectValue === "") {
//    		jQuery(".form-item-field-sub-sector-target-id").fadeOut();
//    	} else {
//    		jQuery(".form-item-field-sub-sector-target-id").fadeIn();
//    	}
//    });
//
//    var z = jQuery(".js-quickedit-page-title.page-header").text();
//    var x = jQuery(".local-actions li a").text(" Add " + z);
//    //     var url = jQuery(location).attr('href');
//    //     var parts = url.split("/");
//    //     var last_part = parts[parts.length-2];
//    //     ns = last_part.replace(/([-_])+/g, ' ');
//    //     jQuery(".role-site_adminindb .page-header-sub  h2").text(ns);
//
//
//    if (jQuery(".add-term-class-block").length > 0) {
//    	var url = jQuery(location).attr('href');
//    	var parts = url.split("/");
//    	var last_part = parts[parts.length - 2];
//    	ns = last_part.replace(/([-_])+/g, ' ');
//    	jQuery(".page-header-sub  h2").text("Add " + ns);
//    }
//
//    if (jQuery(".block-for-edit-term").length > 0) {
//    	var inputvalue = jQuery(".path-taxo .region.region-content form input.form-control").val();
//    	jQuery(".page-header").text("Edit " + inputvalue);
//    }
//    if (jQuery("#node-incentives-form,#node-incentives-edit-form").length > 0) {
//    	addIncentive();
//
//    	function addIncentive() {
//    		$sector = jQuery("select[name='field_sector[]']");
//    		$sub_sector = jQuery("select[name='field_sub_sector[]']");
//    		$sub_sector.on("change", function () {
//    			console.log('changed ....');
//    		})
//    		$json_input = jQuery("input[name='sector-subsector']");
//    		jsondata = JSON.parse($json_input.val());
//
//    		$sub_sector.children(".multi-select-menuitem").hide();
//            //$sub_sector.find("option[value='All']").show();
//
//            $sector.on("change", function () {
//
//                //$sub_sector.val('');
//
//                let $this = jQuery(this);
//                let values = $sector.val();
//                let visible = [];
//                for (v of values) {
//                	if (jsondata[v]) {
//                		let childs = jsondata[v];
//                		for (child of childs) {
//                			visible.push(child.id);
//                		}
//                	}
//                }
//                console.log("VISIBLE", visible);
//                //1find all sub_sector and unchecked theme 
//                $sub_sector.siblings(".multi-select-container").find("input").each(function (i, e) {
//                	let $this = jQuery(this);
//                	console.log($this, $this.val(), visible.indexOf($this.val()));
//                	if (visible.indexOf($this.val()) == -1) {
//                		if ($this.prop("checked")) {
//                			$this.closest("label").click();
//                		}
//                	}
//
//                });
//
//                //hide all 
//                $sub_sector.siblings(".multi-select-container").find("label").hide();
//
//                for (v of values) {
//                	if (jsondata[v]) {
//                		let childs = jsondata[v];
//                		for (child of childs) {
//                			let $inp = $sub_sector.siblings(".multi-select-container").find("input[value='" + child.id + "']");
//                			$inp.closest("label").show();
//                            //$sub_sector.children("option[value='" + child.id + "']").show();
//                        }
//                    }
//                }
//            });
//        }
//
//
//    }
//    if (jQuery(".path-search-incentive").length > 0) {
//        //search-incentive
//        searchIncentive();
//
//        function searchIncentive() {
//        	$sector = jQuery("select[name='field_sector_target_id[]']");
//        	$sub_sector = jQuery("select[name='field_sub_sector_target_id[]']");
//        	$sub_sector.on("change", function () {
//        		console.log('changed ....');
//        	})
//        	$json_input = jQuery("input[name='sector-subsector']");
//        	jsondata = JSON.parse($json_input.val());
//
//        	$sub_sector.children(".multi-select-menuitem").hide();
//            //$sub_sector.find("option[value='All']").show();
//
//            $sector.on("change", function () {
//
//                //                $sub_sector.val('');
//
//                let $this = jQuery(this);
//                let values = $sector.val();
//                let visible = [];
//                for (v of values) {
//                	if (jsondata[v]) {
//                		let childs = jsondata[v];
//                		for (child of childs) {
//                			visible.push(child.id);
//                		}
//                	}
//                }
//                console.log("VISIBLE", visible);
//                //1find all sub_sector and unchecked theme 
//                $sub_sector.siblings(".multi-select-container").find("input").each(function (i, e) {
//                	let $this = jQuery(this);
//                	console.log($this, $this.val(), visible.indexOf($this.val()));
//                	if (visible.indexOf($this.val()) == -1) {
//                		if ($this.prop("checked")) {
//                			$this.closest("label").click();
//                		}
//                	}
//
//                });
//
//                //hide all 
//                $sub_sector.siblings(".multi-select-container").find("label").hide();
//
//                for (v of values) {
//                	if (jsondata[v]) {
//                		let childs = jsondata[v];
//                		for (child of childs) {
//                			let $inp = $sub_sector.siblings(".multi-select-container").find("input[value='" + child.id + "']");
//                			$inp.closest("label").show();
//                            //$sub_sector.children("option[value='" + child.id + "']").show();
//                        }
//                    }
//                }
//            });
//        }
//
//
//        jQuery(document).ajaxComplete(function () {
//
//        	jQuery("#edit-field-sector option:nth-child(1)").removeAttr("selected");
//        	jQuery("select[multiple='multiple']").multiSelect();
//
//
//            //            var $sub_sector = jQuery("select[name='field_sub_sector_target_id']");
//            //            var x = jQuery("select[name=field_sector_target_id] option:selected").val();
//            //
//            //            $sub_sector.children("option").hide();
//            //            if (jsondata[x]) {
//            //                let childs = jsondata[x];
//            //                for (child of childs) {
//            //                    $sub_sector.children("option[value='" + child.id + "']").show();
//            //                }
//            //            }
//
//            //            if (jQuery(".view-search-incentive  .view-content").length > 0) {
//            //                jQuery('html, body').animate({
//            //                    scrollTop: jQuery(".view-search-incentive  .view-content").offset().top
//            //                }, 1000);
//            //
//            //            } else {
//            //                jQuery('html, body').animate({
//            //                    scrollTop: jQuery(".view-search-incentive  .view-empty").offset().top
//            //                }, 1000);
//            //            }
//
//            searchIncentive();
//        });
//
//    }
//
//
//    //    *****************************    
//
//
//
//    jQuery(".path-search-incentive .view-search-incentive > .view-content").hide();
//    jQuery(".path-search-incentive .pager-nav").hide();
//    jQuery("button#edit-submit-search-incentive").on("click", function () {
//    	setTimeout(function () {
//    		jQuery(".path-search-incentive  .view-search-incentive > .view-content").show();
//    		jQuery(".path-search-incentive .pager-nav").show();
//    	}, 3000);
//
//
//    });
//    jQuery(document).ajaxStart(function () {
//    	jQuery('.loader_wrap').fadeIn();
//    });
//    jQuery(document).ajaxComplete(function () {
//    	jQuery('.loader_wrap').fadeOut();
//    });
//
//
//    //validation 
//    jQuery("#user-register-form").validate({
//    	rules: {
//    		"field_name[0][value]": {
//    			required: true,
//    		},
//    		mail: {
//    			required: true,
//    			email: true
//    		},
//    		name: {
//    			required: true,
//
//    		}
//
//
//    	},
//    	messages: {
//
//    	}
//    });
//
//    jQuery("#user-login-form").validate({
//    	rules: {
//    		name: {
//    			required: true,
//    		},
//    		pass: {
//    			required: true,
//    		},
//
//    	},
//    	messages: {
//    		name: {
//    			required: 'This field is required',
//
//    		},
//    		pass: {
//    			required: 'This field is required',
//
//    		},
//
//
//    	}
//    });
//
//    jQuery("#user-pass").validate({
//    	rules: {
//    		name: {
//    			required: true,
//    		},
//
//
//    	},
//    	messages: {
//
//    	}
//    });
//
//
//    jQuery("#node-incentives-form").validate({
//    	rules: {
//    		"title[0][value]": {
//    			required: true,
//    		},
//    		"field_agency_email[0][value]": {
//    			email: true,
//    		},
//
//    	},
//    	messages: {
//
//    	}
//    });
//
//
//
//
//    //
//    //    jQuery('#user-register-form #edit-field-name-0-value').keydown(function (e) {
//    //        if (e.shiftKey || e.ctrlKey || e.altKey) {
//    //            e.preventDefault();
//    //        } else {
//    //            var key = e.keyCode;
//    //            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
//    //                e.preventDefault();
//    //            }
//    //        }
//    //    });
//
//
//    //    hide = true;
//    //    jQuery('body').on("click", function () {
//    //
//    //        if (hide) jQuery('.fieldgroup.form-composite').removeClass('active');
//    //        hide = true;
//    //    });
//    //
//    //
//    //
//    //    jQuery('body').on('click', '.fieldgroup.form-composite', function (e) {
//    //
//    //        if (jQuery(e.target).is(".fieldset-wrapper *") == true) {
//    //            hide = false;
//    //        } else {
//    //            var self = jQuery(this);
//    //
//    //            if (self.hasClass('active')) {
//    //                jQuery('.fieldgroup.form-composite').removeClass('active');
//    //                return false;
//    //            }
//    //
//    //            jQuery('.fieldgroup.form-composite').removeClass('active');
//    //
//    //            self.toggleClass('active');
//    //            hide = false;
//    //        }
//    //    });
//
//
//    jQuery('#user-register-form #edit-name').on('keypress', function (e) {
//    	if (e.which == 32)
//    		return false;
//    });
//
//    //**************
//    //    jQuery("#edit-field-agency-telephone-0-value,#edit-field-phone-number-0-value").keypress(function (e) {
//    //if the letter is not digit then display error and don't type anything
//    //        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
//    //            //display error message 
//    //            return false;
//    //        }
//    //    });
//
//    // registration phone 
//    jQuery('#edit-field-phone-number-0-value,#edit-field-agency-contac-0-value').on("input", function (e) {
//    	this.value = this.value.replace(/[^0-9\+]/gi, "");
//    });
//
//    jQuery(".expanded.dropdown a").on("click", function () {
//    	jQuery(this).closest(".expanded.dropdown").toggleClass("open-it");
//
//    });
//
//    if (jQuery("li.expanded.dropdown.active").length > 0) {
//    	jQuery("li.expanded.dropdown.active").addClass("open-it");
//    }
//
//    //***********reports****************
//
//    if (jQuery("#draw-chart").length > 0) {
//    	drawChartColumn();
//    	jQuery("#charttypeBtn button").on("click", function () {
//    		var chartType = jQuery(this).attr("data-chart-type");
//    		if (chartType === "pie" || chartType === "donut") {
//    			drawChart(chartType)
//    		}
//    		if (chartType === "column") {
//    			drawChartColumn()
//    		}
//    		if (chartType === "line") {
//    			drawChartLine();
//    		}
//
//    	});
//    }
//
//    function drawChart(chartType) {
//    	jQuery("#draw-chart").removeClass();
//    	jQuery("#draw-chart").addClass(chartType);
//
//    	if (chartType === "donut") {
//    		var chartType = "pie";
//    		innerSize = 200
//    	} else {
//    		innerSize = 0
//    	}
//    	var chartData = [];
//
//    	$chartDataContents = jQuery(".view-reports  .field-content");
//
//    	$chartDataContents.each(function () {
//    		let $chartDataContent = jQuery(this);
//    		let html = $chartDataContent.html();
//    		var [key, value] = html.split(" ,");
//    		chartData.push([key, Number(value)]);
//    	});
//
//    	console.log(chartData);
//    	Highcharts.chart('draw-chart', {
//    		chart: {
//    			type: chartType,
//    			options3d: {
//    				enabled: true,
//    				alpha: 45,
//    				beta: 0
//    			}
//    		},
//    		title: {
//    			text: ''
//    		},
//    		tooltip: {
//    			pointFormat: '<b>{point.percentage:.1f}%</b>'
//    		},
//    		plotOptions: {
//    			pie: {
//    				innerSize: innerSize,
//    				allowPointSelect: false,
//    				cursor: 'pointer',
//    				depth: 35,
//    				dataLabels: {
//    					enabled: true,
//    					format: '{point.percentage}'
//    				}
//    			}
//    		},
//    		series: [{
//    			type: chartType,
//    			data: chartData
//    		}]
//    	});
//
//    	var chartValueLength = chartData.length;
//    	jQuery(".draw-chart-color").empty();
//    	for (let i = 0; i < chartValueLength; i++) {
//    		var color = jQuery('.highcharts-series.highcharts-pie-series .highcharts-color-' + i).attr('fill');
//    		jQuery('.draw-chart-color').append('<div class="list-records"><span><i style="background:' + color + '"></i>' + chartData[i][0] + '</span></div>');
//    	}
//    	Highcharts.setOptions({
//    		lang: {
//    			noData: "Your custom message"
//    		}
//    	})
//
//
//    }
//
//    function drawChartColumn() {
//
//    	jQuery("#draw-chart").removeClass();
//    	jQuery("#draw-chart").addClass("column");
//
//    	var chartData = [];
//
//    	$chartDataContents = jQuery(".view-reports  .field-content");
//
//    	$chartDataContents.each(function () {
//    		let $chartDataContent = jQuery(this);
//    		let html = $chartDataContent.html();
//    		var [name, y] = html.split(",");
//    		chartData.push({
//    			name,
//    			y
//    		});
//    	});
//
//        //chartData = JSON.stringify(chartData);
//
//        var tempArray = [];
//
//        for (var i in chartData) {
//        	var temp = {
//        		name: chartData[i].name,
//        		y: parseFloat(chartData[i].y),
//        	}
//        	tempArray.push(temp);
//        }
//
//
//
//
//        // Create the chart
//        new Highcharts.chart('draw-chart', {
//        	chart: {
//        		type: 'column'
//        	},
//        	title: false,
//        	xAxis: {
//        		type: 'category'
//        	},
//        	yAxis: {
//        		title: {
//        			text: ''
//        		}
//
//        	},
//        	legend: {
//        		enabled: false
//        	},
//        	plotOptions: {
//        		series: {
//        			borderWidth: 0,
//        			dataLabels: {
//        				enabled: true,
//        				format: '{point.y:.1f}%'
//        			}
//        		}
//        	},
//
//        	tooltip: {
//        		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//        		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
//        	},
//
//        	series: [
//        	{
//        		name: "",
//        		colorByPoint: true,
//        		data: tempArray
//        	}
//        	],
//
//        });
//
//
//        var chartValueLength = tempArray.length;
//        jQuery(".draw-chart-color").empty();
//        for (let i = 0; i < chartValueLength; i++) {
//        	var color = jQuery('.highcharts-series-group .highcharts-series  .highcharts-color-' + i).attr('fill');
//        	jQuery('.draw-chart-color').append('<div class="list-records"><span><i style="background:' + color + '"></i>' + tempArray[i].name + '</span></div>');
//        }
//
//        Highcharts.setOptions({
//        	lang: {
//        		noData: "Your custom message"
//        	}
//        })
//    }
//
//    function drawChartLine() {
//    	jQuery("#draw-chart").removeClass();
//    	jQuery("#draw-chart").addClass("line");
//
//    	var chartData = [];
//
//    	$chartDataContents = jQuery(".view-reports  .field-content");
//
//    	$chartDataContents.each(function () {
//    		let $chartDataContent = jQuery(this);
//    		let html = $chartDataContent.html();
//    		var [name, y] = html.split(",");
//    		chartData.push({
//    			name,
//    			y
//    		});
//    	});
//
//        //chartData = JSON.stringify(chartData);
//
//        var tempArray = [];
//
//        for (var i in chartData) {
//        	var temp = {
//        		name: chartData[i].name,
//        		y: parseFloat(chartData[i].y),
//        	}
//        	tempArray.push(temp);
//        }
//
//
//        Highcharts.chart('draw-chart', {
//        	chart: {
//        		type: "line",
//        		options3d: {
//        			enabled: true,
//        			alpha: 45,
//        			beta: 0
//        		}
//        	},
//        	title: {
//        		text: ''
//        	},
//        	tooltip: {
//        		pointFormat: '<b>{point.y:.1f}%</b>'
//        	},
//        	legend: false,
//        	series: [{
//        		type: "line",
//        		data: tempArray
//        	}]
//        });
//
//
//        var chartValueLength = tempArray.length;
//        jQuery(".draw-chart-color").empty();
//        for (let i = 0; i < chartValueLength; i++) {
//        	var color = jQuery('.highcharts-series-group .highcharts-series  .highcharts-color-' + i).attr('fill');
//        	jQuery('.draw-chart-color').append('<div class="list-records"><span><i style="background:' + color + '"></i>' + tempArray[i].name + '</span></div>');
//        }
//        Highcharts.setOptions({
//        	lang: {
//        		noData: "Your custom message"
//        	}
//        })
//    }
//
//    jQuery(document).ajaxComplete(function () {
//        //        var onpageselectedvalue = jQuery("select[name='field_sector_target_id[]']").val().length;
//        //        if (onpageselectedvalue == 0) {
//        //            jQuery("div.js-form-item-field-sub-sector-target-id").fadeOut();
//        //        } else {
//        //            jQuery("div.js-form-item-field-sub-sector-target-id ").fadeIn();
//        //        }
//
//
//
//        jQuery("select[multiple='multiple']").multiSelect();
//
//
//        jQuery(".form-item-field-sub-sector-target-id").fadeOut();
//        jQuery("[name='field_sector_target_id[]']").on("change", function () {
//        	var selectValue = this.value;
//        	if (selectValue === "") {
//        		jQuery(".form-item-field-sub-sector-target-id").fadeOut();
//        	} else {
//        		jQuery(".form-item-field-sub-sector-target-id").fadeIn();
//        	}
//        });
//    });
//
//
//    jQuery(".view-reports  form  button").on("click", function () {
//    	jQuery(document).ajaxComplete(function () {
//    		if (jQuery("#draw-chart").hasClass("column")) {
//    			jQuery("button[data-chart-type='column']").click();
//    		} else if (jQuery("#draw-chart").hasClass("line")) {
//    			jQuery("button[data-chart-type='line']").click();
//    		} else if (jQuery("#draw-chart").hasClass("donut")) {
//    			jQuery("button[data-chart-type='donut']").click();
//    		} else if (jQuery("#draw-chart").hasClass("pie")) {
//    			jQuery("button[data-chart-type='pie']").click();
//    		}
//    	});
//
//    });
//
//    //    Registration form placeholder
//    jQuery("#edit-mail").attr("placeholder", "Email Address");
//    jQuery("#edit-name").attr("placeholder", "Username");
//
//    //    jQuery( "<a href='http://115.186.58.50/incentive-database/users' class='button'>Cancel</a>").insertAfter("#user-form #edit-actions #edit-delete");
//    //if we have user cancel button
//    if(jQuery("#user-form #edit-actions #edit-cancel")){
//        //  user name text allow
//        var getHostName = drupalSettings.path.baseUrl;
//        //if reset page
//        if(drupalSettings.path.currentPath.match(/^user\/reset\/[0-9]+/)){
//        	jQuery("#user-form #edit-actions #edit-cancel").attr("href", getHostName);
//        }else if(drupalSettings.path.currentPath.match(/node\/[0-9]+\/delete/)){
//        	jQuery(".node-page-delete-form.node-confirm-form.confirmation #edit-cancel").attr("href", getHostName+"dashboard");
//        }else if(drupalSettings.path.currentPath.match(/node\/[0-9]+\/cancel/)){
//        	jQuery(".user-cancel-form.user-confirm-form.confirmation #edit-actions #edit-cancel").attr("href", getHostName+"user");
//        }else if(drupalSettings.path.currentPath.match(/user\/[0-9]+\/cancel/)){
//        	jQuery(".user-cancel-form.user-confirm-form.confirmation #edit-actions #edit-cancel").attr("href", getHostName+"users");
//        }else if(drupalSettings.path.currentPath.match(/taxonomy\/term\/[0-9]+\/delete/)){
//        	jQuery(".taxonomy-term-sub-sector-delete-form.taxonomy-term-confirm-form.confirmation #edit-cancel").attr("href", getHostName+"sub-sector");
//        }else if(drupalSettings.path.currentPath.match(/node\/[0-9]+\/delete/)){
//        	jQuery(".node-page-delete-form.node-confirm-form.confirmation #edit-actions #edit-cancel").attr("href", getHostName+"dashboard");
//        }
//        else{
//        	jQuery("#user-form #edit-actions #edit-cancel").attr("href", getHostName+"users");
//        }
//    }
//
//    //add user text change
//    jQuery(".btn.btn-xs.btn-success.add-user").html("Add User");
//
//    //change authenticated user cancel path
//    let auth =drupalSettings.user.roles.indexOf("authenticated") ==0;
//    if(auth){
//    	jQuery(".user-form #edit-cancel").attr("href", "/");
//    }
//    /*** 
//Country  name change to city
//**/
//let countryLabel =jQuery(".field.field--name-field-country.field--type-entity-reference.field--label-above >div.field--label");
//countryLabel.addClass("add-city");
//if(countryLabel)
//{
//	countryLabel.html("City");
//}
//
//
//    //    jQuery(function () {
//    //        jQuery('#edit-field-name-0-value').keydown(function (e) {
//    //            if (e.ctrlKey || e.altKey) {
//    //                e.preventDefault();
//    //            } else {
//    //                var key = e.keyCode;
//    //                if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
//    //                    e.preventDefault();
//    //                }
//    //            }
//    //        });
//    //    });
//
//    // jQuery('#edit-field-name-0-value').on("input", function (e) {
//    //     this.value = this.value.replace(/[^a-z]/gi, "");
//    // });
//
//    // hide countries operation and waights attritubes 
//    if(drupalSettings.user.roles.indexOf("site_admin") != -1){
//    	$trs = jQuery("#taxonomy tr")
//    	let fill = [];
//    	$trs.each(function(){
//    		$tr = jQuery(this);
//    		$tr.find("td").each(function(i){
//    			if(i>0)
//    			{	
//    				if(jQuery(this).html().length > 0)
//    				{
//    					fill[i] = true;
//    				}else if(!fill[i] )
//    				{
//                        //                     console.log(jQuery(this).html());
//                        fill[i] = false;   
//                    }
//                }else{
//
//                	fill[i] = true;
//                }
//            });
//
//
//
//    	});
//
//    	$trs.each(function(){
//    		$tr = jQuery(this);
//    		$tr.find("td, th").each(function(i){
//    			console.log(fill[i]);
//    			if(fill[i] == false)
//    			{
//    				jQuery(this).hide();
//    			}
//    		});
//    	});
//    	console.log(fill);
//    }
//
//
//    jQuery(document).ajaxComplete(function( event, xhr, settings){
//    	r = new RegExp(drupalSettings.path.baseUrl+"shs-term-data/shs-field-count.+")
//    	if(settings.url.match(r)){
//    		jQuery("#edit-field-count-wrapper .shs-widget-container[data-shs-level=1]").eq(0).prepend("<label class=\"control-label\">City</label>");
//    	}
//    });
//    jQuery("#edit-field-count-wrapper .shs-widget-container[data-shs-level=1]");
//
//
//
//    $city_orig = jQuery("[name='field_address_city[0][value]']");
//    $city = jQuery("<select name='field_address_city[0][value]'>");
//    $city.attr('id', 'citypopulate');
//
//    $city_orig.before($city);
//    $city_orig.attr('name', '');
//    $city_orig.hide();
//
//    city_none_tpl = '<option value="_none">- None -</option>';
//    $city.html(city_none_tpl);
//
//    $other_option = jQuery("<option value='_other'>Other</option>");
//
//    $country = jQuery("[name=field_address_country]");
//    $country.on('change', function () {
//    	jQuery.ajax({
//    		url: drupalSettings.path.baseUrl + 'data/getTaxonomyList',
//    		data: "parent=" + $country.val(),
//    		success: function (d) {
//    			$city.html(city_none_tpl);
//
//    			d.childs.forEach(function(child){
//    				var $option = jQuery("<option value='" + child + "'>" + child + "</option>");
//    				$city.append($option);
//    			});
//    			$city.append($other_option);
//
//    		},
//    		error: function (e) {
//    			console.log("AJAZ ERROR", e);
//    		}
//    	});
//
//    });
//
//});
//
//jQuery('#node-incentives-form #edit-title-0-value').on("input", function (e) {
//	this.value = this.value.replace(/[^a-z]/gi, "");
//});
//
//jQuery('#edit-field-name-0-value').keydown(function (e) {
//	if (e.shiftKey || e.ctrlKey || e.altKey) {
//		e.preventDefault();
//	} else {
//		var key = e.keyCode;
//		if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
//			e.preventDefault();
//		}
//	}
//});
//
//jQuery('.change-pwd-form').parent().find('h1').text('Change Password form');
//
//
