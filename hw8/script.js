window.onload = function() {

    var submitButton = document.getElementById('submit');
    var cancelButton = document.getElementById('cancel');

    submitButton.onclick = function(){

        //window.alert("onclick function works!");

        var xhr = new XMLHttpRequest();
        // var first_name = document.getElementById("first_name").value;
        // window.alert(first_name);
        // var last_name = document.getElementById("last_name").value;
        // var address_line1 = document.getElementById("address_line1").value;
        // var address_line2 = document.getElementById("address_line2").value;
        // var city = document.getElementById("city").value;
        // var state = document.getElementById("state").value;
        // var zipcode = document.getElementById("zipcode").value;
        // var content = first_name + last_name + address_line1 + address_line2 + city + state + zipcpde;

        xhr.open("POST", "toJSON.php", true);
        xhr.setRequestHeader("Context-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            //window.alert("state has changed");
            window.alert("readystate is" + this.readyState +"\n" + "statue is" + this.status);
            if (this.readyState == 4 && this.status == 200) {
                //window.alert("state has changed function works!");
                document.getElementById("demo").innerHTML = this.responseText;
            }

            // else {
            //     alert("some bad things happened");
            // }

        };

        xhr.send();
    };

    cancelButton.onclick = function() {
        window.alert("cancel the form!");
    };

};
