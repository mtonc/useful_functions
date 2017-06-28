<script>
jQuery( document ).ready(function( $ ) {
    //get parameter string
    var pageURL = decodeURIComponent(window.location.search.substring(1));
    //split the paramets up
    var queryParams = pageURL.split('&');
    var allCookies = document.cookie;
    cookieObject = {};
    var now = new Date();
    var expireTime = new Date(now.getTime()+(1000*60*60*24*3));

    function updateCookieObject() {
        allCookies = document.cookie;
        cookies = allCookies.split(';');
        cookies.forEach(function(val){
            var element = val.split('=')
            cookieObject[element[0].trim()] = element[1];
        });
    }


    function buildCookie() {
        queryParams.forEach( function(val, index) {
            //split val in key (element[0]) and value (element[1])
            var element = val.split('=');
            //only assign val to cookie if matches the utm field
            switch(element[0]) {
                case 'utm_campaign':
                case 'utm_medium':
                case 'utm_source':
                case 'utm_content':
                case 'utm_term':
                    document.cookie = element[0] + "=" + element[1] + "; expires="+ expireTime.toUTCString() + "; path=/";
                    break;
            }
        });
        updateCookieObject();
    }

    function updateUI(){
        $('input[name="C_UTM_Campaign"]').val(cookieObject.utm_campaign);
        $('input[name="C_UTM_Medium"]').val(cookieObject.utm_medium);
        $('input[name="C_UTM_Source"]').val(cookieObject.utm_source);
        $('input[name="C_UTM_Content"]').val(cookieObject.utm_content);
        $('input[name="C_UTM_Term"]').val(cookieObject.utm_term);
    }

    updateCookieObject();
    if(cookieObject.euCookie === "set"){
        buildCookie();
        updateUI();
    }
    $('#pea_cook_btn').click(function (){
        console.log("button click");
        buildCookie();
        updateUI();
    });
});
</script>
