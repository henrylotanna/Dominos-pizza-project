function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("E-mail must be filled out");
      return false;
    }
      var x = document.forms ["myForm"]["lname"].value;
      var j = document.forms ["myForm"]["fname"].value;
      alert ("welcome : " + x + " " +j )
      // document.getElementById("demo").innerHTML="welcome:" +x + j;   
      return true;
}
   
  function change(){
    alert("Domino's Pizza Love your country")
  }
 
  
