function check_vali() {
    var fn = document.getElementById("first_name").value;
    var ln = document.getElementById("last_name").value;
    var add1 = document.getElementById("add1").value;
    var add2 = document.getElementById("add2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

    if (fn.length == 0 ||
        ln.length == 0 ||
        add1.length == 0 ||
        add2.length == 0 ||
        city.length == 0 ||
        state.length == 0 ||
        zip.length == 0) {
        window.alert('fill out all the required sections please');
    }

    document.getElementById('form').reset(); 
}
