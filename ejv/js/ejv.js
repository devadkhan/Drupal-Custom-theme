jQuery(document).ready(function(){
//	Added autocomplete attribute on register form
    jQuery('#edit-pass-pass2').attr('autocomplete', 'off');
    jQuery('#edit-pass-pass1').attr('autocomplete', 'off');
	// jQuery.ajax({
	// 	"crossDomain": true,
	// 	"url": drupalSettings.path.baseUrl+"jv-status-rest",
	// 	success:function(e){	
	// 		console.log(e);
	// 		for(var i of e){ 
	// 			// if(Object.keys(e[i])=='comment-1'){
	// 			// 	jQuery(".menu.menu--permanent.nav li a:contains('eJV Status')").addClass('newmessage');
	// 			// }
	// 			// else{
	// 			// 	jQuery(".menu.menu--permanent.nav li a:contains('eJV Status')").removeClass('newmessage');
	// 			// }
	// 			if ((Object.values(e)).length>0){
	// 				jQuery(".menu.menu--permanent.nav li a:contains('eJV Status')").addClass('newmessage');
	// 			}
	// 		}
	// 	}
	// });

	// jQuery.ajax({
	// 	"crossDomain": true,
	// 	"url": drupalSettings.path.baseUrl+"jv-status-rest",
	// 	success:function(e){	
	// 		// console.log(e);
	// 		var count = 0;
	// 		for(var i=0;i<e.length;i++){ 
	// 			if(e[i]['comment-1']){
	// 				count++;
	// 			}
	// 		}
	// 		console.log(count);
	// 		if(count>0){
	// 				jQuery(".menu.menu--permanent.nav li a:contains('eJV Status')").addClass('newmessage');

	// 		}
	// 	}
	// });

	if(jQuery('body.site-admin .company-profile-front.view.view-company-profile.view-id-company_profile.view-display-id-page_1 div').hasClass('view-empty')) {
		jQuery('#block-adminfooter').css('bottom','-250px');
	}

	if (jQuery('.authenticated.user-logged-in.path-search-proposal.has-glyphicons .region.region-content div').hasClass('search-table-wrap view view-proposal-project view-id-proposal_project view-display-id-page_2')){
		jQuery('.region.region-content').css('margin-bottom','100px');
	}

	

	// jQuery('.view.view-company-signup.view-id-company_signup.view-display-id-block_4 #edit-signup-status-approved').on('click',function(){
	// 		jQuery(this).closest('div').addClass('input-checked');
	// 		jQuery('.view.view-company-signup.view-id-company_signup.view-display-id-block_4 #edit-signup-status-rejected').closest('div').removeClass('input-checked');
		
	// })

	jQuery('.view.view-company-signup.view-id-company_signup.view-display-id-block_4 #edit-signup-status-rejected').on('click',function(){
			jQuery(this).closest('div').addClass('input-checked');
			jQuery('.view.view-company-signup.view-id-company_signup.view-display-id-block_4 #edit-signup-status-approved').closest('div').removeClass('input-checked');

	})

	jQuery('.view.view-company-signup.view-id-company_signup.view-display-id-block_4 form.signup-status-top-form.proposal-status-top-form.draft-proposal div.form-item div input').val('Rejected').closest('div').on('click',function(){
		jQuery(document).ajaxComplete(function(){
			jQuery(this).removeClass('input-checked');
		})
	})
		
	
})


