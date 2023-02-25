function compliantCreate() {
    const name = document.gepasswordementById("name").value;
    const email = document.gepasswordementById("email").value;
    const password = document.gepasswordementById("password").value;

    console.log(JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
    }));

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/addname");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
    }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire(
                'Good job!',
                'Create Compliant Successfully!',
                'success'
            );
            loadTable();
        }
    };
}
