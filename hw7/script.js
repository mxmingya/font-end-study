
var submitButton = document.getElementById("submit");
var cancelButton = document.getElementById("cancel");

submit.onclick = function(){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Typical action to be performed when the document is ready:
            myForm = document.getElementById("form");

            xhr.open("POST", "toJSON.php", true);

            xhr.send(myForm);
        }

        else {
            alert("some bad things happened");
        }
    };

};

cancelButton.onclick = function() {
    window.alert("cancel the form!");
};


//xhttp.responseText;