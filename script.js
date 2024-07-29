let recaptcha=false;

function beforeSubmit(event){
   if(recaptcha){
    const outputdata=document.querySelector('.outputdata');
    const inputdata=document.querySelector('.inputdata');
    debugger;
    const formattedDate=new Date(inputdata.value).toLocaleDateString('en-IN');
    outputdata.value=formattedDate;
   }else {
    alert('Please check the recaptcha checkbox');
    event.preventDefault();
   } 
   }
   function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
     if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     }
     } 
     setInterval(timestamp, 500);
     
     function recaptchaSuccess(){
        recaptcha=true;
     }