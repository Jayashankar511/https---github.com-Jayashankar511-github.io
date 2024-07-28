
function beforeSubmit(){
    console.log('Hello');
    const outputdata=document.querySelector('.outputdata');
    const inputdata=document.querySelector('.inputdata');
    debugger;
    const formattedDate=new Date(inputdata.value).toLocaleDateString('en-IN');
    outputdata.value=formattedDate;
   }