google.charts.load('current', {
    'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(loadTable);

function loadQueryTable() {
    document.getElementById("mytable").innerHTML = "<tr><th scope=\"row\" colspan=\"5\">Loading...</th></tr>";
    const searchText = document.getElementById('searchTextBox').value;

    const xhttp = new XMLHttpRequest();
    if (searchText == "") {
        window.location.reload();
    } eles
    xhttp.open("GET", "http://localhost:3000/admin/findtext/" + searchText);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var trHTML = '';
            var num = 1;
            const objects = JSON.parse(this.responseText).Complaint;
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>' + num + '</td>';
                trHTML += '<td>' + object['ame'] + '</td>';
                trHTML += '<td>' + object['Type'] + '</td>';
                trHTML += '<td>' + object['Tel'] + '</td>';
                trHTML += '<td>' + object['Opening'] + '</td>';
                trHTML += '<td>';
                trHTML += "</tr>";
                num++;


            }
            console.log(trHTML);
            document.getElementById("mytable").innerHTML = trHTML;

        }
    };
}

function compliantCreate() {
    const r_name = document.getElementById("r_name").value;
    const r_email = document.getElementById("r_email").value;
    const r_password = document.getElementById("r_password").value;


    console.log(JSON.stringify({
        "r_nme": r_name,
        "r_email": r_email,
        "r_password ": r_password ,
    }));

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/admin/register");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "Name": Name,
        "Type": Type,
        "Tel": Tel,
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

function compliantDelete(id) {
    console.log("Delete: ", id);
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/admin/delete2");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "_id": id
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const object = JSON.parse(this.responseText);
            console.log(object);
            Swal.fire(
                'Good job!',
                'Delete Compliant Successfully!',
                'success'
            );
            loadTable();
        }
    };
}

