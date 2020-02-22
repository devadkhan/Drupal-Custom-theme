jQuery( document ).ready(function() {
    let timeout = null;
    function checkLangSelect()
    {
        let a = jQuery(".gtranslate select");

        if(a.length > 1)
        {

            //            console.log(a);
            //            console.log("A", "'"+a.eq(0).val()+"'");
            //            console.log("B", "'"+a.eq(1).val()+"'");
            if(a.eq(0).val() == null || a.eq(0).val().length == 0){
                //en|en
                a.eq(1).find("option").removeClass("selectedlan");
                a.eq(1).find("option[value='en|en']").addClass("selectedlan");
                a.eq(1).val('en|en');
                timeout = setTimeout(checkLangSelect, 500);
                return;
            }
            clearTimeout(timeout);

            a.eq(1).find("option").removeClass("selectedlan");
            a.eq(1).val("en|"+a.eq(0).val());

            a.eq(1).find("option[value='"+"en|"+a.eq(0).val()+"']").addClass("selectedlan");
            a.eq(1).val("en|"+a.eq(0).val()).css("font-weight", "bold");

            a.eq(1).on("change", function(){

                if(a.eq(0).val().trim().length == 0){
                    a.eq(1).find("option").removeClass("selectedlan");
                    a.eq(1).find("option[value='en|en']").addClass("selectedlan");
                    a.eq(1).val('en|en');
                }else{
                    a.eq(1).find("option").removeClass("selectedlan");
                    a.eq(1).find("option[value='"+"en|"+a.eq(0).val()+"']").addClass("selectedlan");
                    a.eq(1).val("en|"+a.eq(0).val()).css("font-weight", "bold");
                }
            });


        }else{
            setTimeout(checkLangSelect, 500);
        }

    }

    setTimeout(checkLangSelect, 500);


});