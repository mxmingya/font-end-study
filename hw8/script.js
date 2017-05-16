function submit_button(){

        //window.alert("onclick function works!");

        var xhr = new XMLHttpRequest();
        var first_name = document.getElementById("first_name").value;
        //window.alert(first_name);
        var last_name = document.getElementById("last_name").value;
        var address_line1 = document.getElementById("address_line1").value;
        var address_line2 = document.getElementById("address_line2").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var zipcode = document.getElementById("zipcode").value;

        //check form validation, if not, reset the form
        if (first_name.length == 0 ||
            last_name.length == 0 ||
            address_line1.length == 0 ||
            city.length == 0 ||
            state.length == 0||
            zipcode.length == 0) {
              window.alert("plz fill out all the require information");
              document.getElementById('form1').reset();
            } else {
              var content = "first_name" + first_name +
                            "&last_name" + last_name +
                            "&address_line1" + address_line1 +
                            "&city" + city +
                            "&state" + state +
                            "&zipcode" + zipcode;
                            if (address_line2 != "") {
                              content = content + "&address_line2"+address_line2;
                            }
            }

        xhr.open("POST", "parser.php", true);
        xhr.setRequestHeader("Context-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            //window.alert("state has changed");
            //window.alert("readystate is" + this.readyState +"\n" + "statue is" + this.status);
            if (this.readyState == 4 && this.status == 200) {
                //window.alert("state has changed function works!");
                document.getElementById('demo').innerHTML = this.responseText;
            }

        };

        xhr.send(content);
        document.getElementById('form1').reset();
    }

function cancel_button(){
  window.alert("reset the form!");
  document.getElementById('form').reset();
}
