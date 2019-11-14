/**
 *
 *
 * @param {*} url
 * @param {*} fnSucc
 * @param {*} fnFail
 */
function ajax(url, fnSucc, fnFail){

    if(window.XMLHttpRequest){
        //for not IE6
        var oAjax = new XMLHttpRequest();
    } else {
        //IE6
        var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
        
    }
    
    alert(oAjax);

    //connect to server, add new Date().getTime() to prevent cache
    oAjax.open('GET', url+'?t=' + new Date().getTime(), true);
    
    oAjax.send();
    
    //deal with response
    oAjax.onreadystatechange = function(){

        if(oAjax.readyState == 4){ //load complete
            
            if(oAjax.status == 200){
                //success
                // alert('success' + oAjax.responseText);
                fnSucc(oAjax.responseText);
            } else {
                //fail
                // alert('fail' + oAjax.status);
                if(fnFail){
                    fnFail(oAjax.status);
                }
            };
        }
    }
}