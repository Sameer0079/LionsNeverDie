function validate(){
  let uname=document.getElementById("uname").value;
  let pass=document.getElementById("pass").value;
  let result=true;
  ((pass.length>=8) && (pass.length<15)) ? (!(uname=="sameer") || !(pass=="12345678")) ? result=false :result=true : result=false
  return result;
}

function passShow(){
  var a=document.getElementById("pass");
  var b=document.getElementById("eye1");
  var c=document.getElementById("eye2");
  if(a.type==="password"){
    a.type="text";
    b.style.display="block";
    c.style.display="none";
  }else{
    a.type="password";
    b.style.display="none";
    c.style.display="block";
  }
}
