jQuery(document).ready(function () {
    //    remove class from add sub organizer form 
    //    let url =jQuery(location).attr('href');
    //    if(url =='https://115.186.58.50/boi-event-portal/add/new-user'){
    //
    //        jQuery('body').removeClass('path-custom-hooks');
    //    }

    //move top menu item permission box to panel headding
    jQuery(".parent-permission").each(function(){
    	var  $this = jQuery(this);
    	$this.closest(".panel").find(".panel-heading").prepend($this);
    });


    if(window.location.href === "https://115.186.58.50/boi-event-portal/welcome-sub-organizer"){
    	jQuery("body").append('<div id="overlay"><div class="cv-spinner"><span class="spinner"></span></div></div>');

    }
    if(window.location.href === "https://115.186.58.50/boi-event-portal/add/new-user"){
    	jQuery("body").removeClass('path-custom-hooks');

    }





    // append dynamic check in all labels
    jQuery(".control-label.option").append("<span class='check'></span>");
    jQuery(".check-list-view-form .control-label.option .view").before("<span class='check'></span>");
    jQuery("#edit-conditions #edit-conditions-group60 .panel-heading input, #edit-conditions #edit-conditions-group62 .panel-heading input, #edit-conditions #edit-conditions-group66 .panel-heading input, #edit-conditions #edit-conditions-group71 .panel-heading input").after("<span class='check'></span>");

    // append dynamic cnic in specific labels
    jQuery(".role-anonymous  .select-wrapper").prepend("<label class='control-label'>Select CNIC or Passport</label>");


    // calling check class and selct in ajax
    jQuery(document).ajaxComplete(function(){
    	jQuery(".control-label.option").append("<span class='check'></span>");
    	jQuery('.field--name-field-select-priority select').select2();

    });

    // adding class to register form
    jQuery(".custom-siteadmin").closest(".user-register-form.user-form").addClass("myregister-form");

    // adding class to other register form
    jQuery(".custom-siteadmin-edit ~ form.user-form").addClass("myedit-form");

    // calling select2
    jQuery('.field--name-field-select-priority select').select2();

    // calling select2
    jQuery('#edit-select-roles').select2();

    // append dynamic  labels for register form and edit form
    jQuery(".myregister-form  .form-type-password.js-form-type-password.form-item-pass").prepend("<label class='control-label'>Password</label");
    jQuery(".myedit-form  .form-type-password.js-form-type-password.form-item-pass").prepend("<label class='control-label'>Password</label");

    // work for sub organizer page
    jQuery(".view-welcome-sub-organizer .views-field-nothing-1 a.activity").on("click" , function(){
    	jQuery(this).closest(".views-field-nothing-1").next(".views-field-view-1").removeClass("activity-block").next(".views-field-view").addClass("activity-block");
    	jQuery(this).closest(".views-field-nothing-1").next(".views-field-view-1").addClass("activity-none");
    });

    jQuery(".view-welcome-sub-organizer a.activity").on("click" , function(){
    	jQuery(this).css({"background-color":"#31b0d5" , "border":"1px solid #31b0d5" , "color":"#fff"});
    	jQuery("a.active.comment").css({"background-color":"transparent" , "border":"1px solid #ccc" , "color":"#999"});
    });

    jQuery(".view-welcome-sub-organizer .active.comment").on("click" , function(){
    	jQuery(this).css({"background-color":"#31b0d5" , "border":"1px solid #31b0d5" , "color":"#fff"});
    	jQuery(".btn.activity").css({"background-color":"transparent" , "border":"1px solid #ccc" , "color":"#999"});
    	jQuery(this).closest(".views-field-nothing-1").next(".views-field-view-1").removeClass("activity-none").addClass("activity-block");
    	jQuery(this).closest(".views-field-nothing-1").next(".views-field-view-1").next(".views-field-view").removeClass("activity-block");
    });


    // work for registration steps
    jQuery("#bootstrap-panel .btn").on("click" , function(){
    	jQuery(this).closest(".panel-body").parent("#bootstrap-panel").addClass("bootstrap-steps-panel-one");
    	jQuery(this).closest(".panel-body").parent("#bootstrap-panel").next("#bootstrap-panel--2").addClass("bootstrap-steps-panel-two")
    	jQuery("#block-attendeesteps .custom-steps li.one").removeClass("active");
    	jQuery("#block-attendeesteps .custom-steps li.two").addClass("active");
    });
    jQuery(".path-custom-hooks #edit-submit").on("click" , function(){
    	jQuery("#bootstrap-panel--2").addClass("bootstrap-steps-panel-two-visible");
    	jQuery("#block-congratulation").show();
    });	

    // work for event edit page
    jQuery(".node-new-event-edit-form").addClass("node-new-event-form");

    // work for comments
    uid = drupalSettings.user.uid;
    jQuery(".view-sub-organizer-comments .views-row").addClass("other-comment");
    jQuery(".view-sub-organizer-comments .views-row.by-"+uid).removeClass("other-comment").addClass("self-commment");

    // work for groups
    jQuery(document).on("click" , ".field--name-field-groups-and-users-types .fieldset-wrapper .form-item:nth-child(1)" , function(){
    	jQuery(this).closest(".field--name-field-groups-and-users-types").addClass("added-group-class");
    	jQuery(this).closest(".field--name-field-groups-and-users-types").removeClass("added-value-class");

    });
    jQuery(document).on("click" , ".field--name-field-groups-and-users-types .fieldset-wrapper .form-item:nth-child(2)" , function(){
    	jQuery(this).closest(".field--name-field-groups-and-users-types").removeClass("added-group-class");
    	jQuery(this).closest(".field--name-field-groups-and-users-types").addClass("added-value-class");

    });
    jQuery('.status-color').each(function () {
    	this.className = this.textContent; 
    });
    // Append image in login page
    jQuery('.custom-empty-two').prepend('<img  src="/boi-event-portal/themes/incentive/images/bannerimg.png" />');

    jQuery('.custom-empty-one').prepend('<img  src="/boi-event-portal/themes/incentive/images/logoboi.jpg" />');


    if(window.location.href === "https://115.186.58.50/boi-event-portal/user/register"){
    	jQuery(".custom-code input").pincodeInput();
    }

    // work on url for attandance page
    if(window.location.href === "https://115.186.58.50/boi-event-portal/node/add/attachments"){
    	jQuery(".custom-mark-attentance").removeClass("active");
    	jQuery(".custom-attachments").addClass("active");
    }
    if(window.location.href === "https://115.186.58.50/boi-event-portal/attendance-history"){
    	jQuery(".custom-mark-attentance").removeClass("active");
    	jQuery(".custom-history").addClass("active");
    }


    // calculate days 
    function dayscalculate(){
    	var date1 = new Date();
    	var dd = date1.getDate();
    	var mm = date1.getMonth()+1; 
    	var yyyy = date1.getFullYear();
    	date1 = yyyy+'-'+mm+'-'+dd;
    	datep = Date.parse(date1);

    	var date2 = jQuery("#edit-form-field-field-start-date-0-field-start-date-0-value-date").val();
    	dateh = Date.parse(date2);
    	var timeDiff = dateh - datep;
    	daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    	jQuery(".calculate-days span").text(daysDiff);
    }
    dayscalculate();


    // work for dynamic progress bar
    // get box count
    var count = 0;
    var checked = 0;
    function countBoxes() { 
    	count = jQuery(".views-field-task-views-field .check-list-view-form #edit-tasks input[type='checkbox']").length;
    	console.log(count);
    }

    countBoxes();
    jQuery(".views-field-task-views-field .check-list-view-form  #edit-tasks input[type='checkbox']:checkbox").click(countBoxes);

    // count checks

    function countChecked() {
    	checked = jQuery(".views-field-task-views-field .check-list-view-form #edit-tasks input:checked").length;

    	var percentage = parseInt(((checked / count) * 100),10);
    	console.log(percentage);
    	jQuery(".percentage-inner-wrapper").text(percentage + "% Complete");
    	jQuery(".percentage-text-inner-wrapper").width(percentage + '%');

    	jQuery(".check-list-view-form > .form-item input").click(function () {
    		jQuery('#edit-tasks .form-item input:checkbox').not(this).prop('checked', this.checked);
    		if(jQuery(this).prop("checked") == true){
    			console.log("checked");
    			var percentage = parseInt((100),10);
    			jQuery(".percentage-inner-wrapper").text(percentage + "% Complete");
    			jQuery(".percentage-text-inner-wrapper").width(percentage + '%');
    		}
    		else{
    			console.log("unchecked");
    			var percentage = parseInt(((checked / count) * 0),10);
    			jQuery(".percentage-inner-wrapper").text(percentage + "% Complete");
    			jQuery(".percentage-text-inner-wrapper").width(percentage + '%');

    		}
    	});

    }

    countChecked();
    jQuery(".views-field-task-views-field .check-list-view-form #edit-tasks input[type='checkbox']:checkbox").click(countChecked);

    // work for sub organizer page 
    // var customhtml = jQuery(".row.custom-checked-unchecked-view .col-md-12").html();
    // jQuery("#check-list-view-form > .form-item").after(customhtml);

    // ajax call for email
    jQuery(".varifyemail").on("click" , function(){
    	var editmail = jQuery("#edit-mail").val();

    	jQuery.ajax({
    		type:"POST",
    		data:{mail:editmail},
    		url: drupalSettings.path.baseUrl+"generateOtp",
    		success:function(d){console.log(d)}
    	});
    });

    //work for forms that map value of one field to other field 
    function valueassign(){


    	jQuery(".node-new-event-form .field--type-list-string.field--name-field-same-as-event-name.field--widget-options-buttons.form-group .form-checkboxes input").on('click' , function(){

    		if(jQuery(this).prop("checked") == true){
    			var phoneval = jQuery("#edit-title-wrapper input").val();
    			var personval = jQuery("#edit-field-user-wrapper input").val();
    			var numberval = jQuery("#edit-field-phone-number2-0-value").val();

    			jQuery(".node-new-event-form #edit-field-add-new-session-0-subform-field-session-name-wrapper input").val(phoneval);
    			jQuery(".node-new-event-form #edit-field-add-new-session-0-subform-field-p2-0-value").val(numberval);
    			jQuery(".node-new-event-form #edit-field-add-new-session-0-subform-field-focal-person-wrapper input").val(personval);
    		}
    		else if(jQuery(this).prop("checked") == false){
    			jQuery(".node-new-event-form #edit-field-add-new-session-0-subform-field-session-name-wrapper input").val('');
    			jQuery(".node-new-event-form #edit-field-add-new-session-0-subform-field-p2-0-value").val('');
    			jQuery(".node-new-event-form #edit-field-add-new-session-0-subform-field-focal-person-wrapper input").val('');
    		}
    	}); 

    }

    valueassign();

    function replaceHtml(){
    	jQuery("#edit-checkboxes-fieldset12 .panel-title").html(jQuery(".form-item-fieldset12 label").html());
    	jQuery("#edit-checkboxes-fieldset13 .panel-title").html(jQuery(".form-item-fieldset13 label").html());
    	jQuery("#edit-checkboxes-fieldset17 .panel-title").html(jQuery(".form-item-fieldset17 label").html());
    }
    replaceHtml();

    // dropdown enable and disable 
    jQuery(".path-custom-hooks #edit-field-passport-wrapper input").attr("disabled", 'disabled');
    jQuery(".path-custom-hooks .user-register-form.user-form .select-wrapper select").on("change" , function(){
    	if(jQuery(this).val()== 1){
    		jQuery(".path-custom-hooks #edit-field-passport-wrapper input").removeAttr('disabled');
    		jQuery(".path-custom-hooks #edit-field-cnic-wrapper input").attr("disabled", 'disabled');
    	}
    	if(jQuery(this).val()== 0){
    		jQuery(".path-custom-hooks #edit-field-passport-wrapper input").attr("disabled", 'disabled');
    		jQuery(".path-custom-hooks #edit-field-cnic-wrapper input").removeAttr('disabled');
    	}
    });

    // append event whole section

    jQuery(".custom-session-plus").click(function(){
    	jQuery("#edit-field-add-new-session-wrapper").clone().insertAfter("#edit-field-add-new-session-wrapper");
    });

    //append thead in event view

    jQuery(".view-event-request .views-row:first-child .fold-table").prepend("<thead><th></th><th></th><th>USER NAME</th><th>EMAIL</th><th>DESIGNATION</th><th>CNIC</th><th>ALL<span>✖</span><span>✔</span></th></thead>");

    jQuery(".plus-minus p").on("click", function(){
    	jQuery(this).closest(".fold-table").toggleClass("addplus-minus");
    });

    //Disable Button With countdown
    jQuery(".custom-resent-seconds").html("00.<span clas='sec-time'>30</span>sec");
    var getcounter = jQuery(".custom-resent-seconds span").html();
    function startTimer(){
    	var counter = 30;
    	setInterval(function() {
    		counter--;
    		if (counter >= 0) {
    			getcounter = counter ;
    			jQuery(".custom-resent-seconds span").html(counter);
    			jQuery("#edit-submit").attr("disabled", true); 
    			jQuery(".path-custom-hooks #bootstrap-panel--2  .varifyemail.btn.btn-success").attr("disabled", true);
    		}
    		if (counter === 0) {
    			clearInterval(counter);
    			jQuery("#edit-submit").removeAttr("disabled"); 
    			jQuery(".path-custom-hooks #bootstrap-panel--2  .varifyemail.btn.btn-success").removeAttr("disabled"); 
    		}
    	}, 1000);
    }
    jQuery(".path-custom-hooks #bootstrap-panel--2  .varifyemail.btn.btn-success").click(function(){
    	startTimer();
    });
    jQuery(".role-anonymous #user-login-form #edit-name").attr('type', 'email'); 
    jQuery(".role-anonymous #user-login-form #edit-pass").attr("placeholder", "Enter Password");
    

    $select = jQuery("[name='field_add_new_session[0][subform][field_past_events]']");
    $placeholder = jQuery("<div></div>");
    $select.parent().append($placeholder);
    $select.on("change", function(e){
    	var $this = jQuery(this);
    	var value = $this.val();

    	jQuery.ajax({
    		type:"POST",
    		url: "https://115.186.58.50/boi-event-portal/views/ajax?_wrapper_format=drupal_ajax",
    		data: {view_name: "past_events_selection",
    		view_display_id: "page_1",
    		view_path: "/boi-event-portal/past-events-selection",
    		view_base_path: "/past-events-selection",
    		view_dom_id: "myid",
    		pager_element: 0,
    		_drupal_ajax: 1,
    		view_args: value,
    		"ajax_page_state[theme]": "seven"
    	},
    	success:function(d){
    		var html = "";    
    		if(d){

    			for(i=0;i<d.length;i++){
    				var command = d[i];
    				if(command.command == "insert"){
    					html += command.data;
    				}
    			}

    		}
    		$placeholder.html(html);
    	}
    });

    });
    






    //    event request comment append
    let cPath = window.location.pathname =='/new-users-requests';
    if(cPath =true){

    	jQuery('.customcomments').each(function(){
    		let $this = jQuery(this);
    		$this.closest(".views-row").find(".modal-body").append($this);    
    	});


        //        jQuery(".modal-body").append(jQuery());

    }
});


