google.charts.load('current', {
    'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(loadTable);

function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/admin");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trHTML = '';
            var num = 1;
            const objects = JSON.parse(this.responseText);  
            for (let object of objects) {

                trHTML += '<tr>';
                trHTML += '<td>' + num + '</td>';
                trHTML += '<td>' + object['Name'] + '</td>';
                trHTML += '<td>' + object['Type'] + '</td>';
                trHTML += '<td>' + object['Tel'] + '</td>';
                trHTML += '<td>' + object['Opening'] + '</td>';
                trHTML += '<td>' + object['Id_note'] + '</td>';
                trHTML += '<td>';
                trHTML += "</tr>";

                num++;
            }
            document.getElementById("mytable").innerHTML = trHTML;

            loadGraph();
        }
    };
}

function loadQueryTable() {
    document.getElementById("mytable").innerHTML = "<tr><th scope=\"row\" colspan=\"5\">Loading...</th></tr>";
    const searchText = document.getElementById('searchTextBox').value;

    const xhttp = new XMLHttpRequest();
    if (searchText == ""){
        window.location.reload();
    } eles 
    xhttp.open("GET", "http://localhost:3000/admin/findtext/" + searchText);

    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trHTML = '';
            var num = 1;
            const objects = JSON.parse(this.responseText).Complaint;
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>' + num + '</td>';
                trHTML += '<td>' + object['Name'] + '</td>';
                trHTML += '<td>' + object['Type'] + '</td>';
                trHTML += '<td>' + object['Tel'] + '</td>';
                trHTML += '<td>' + object['Opening'] + '</td>';
                trHTML += '<td>' + object['Id_note'] + '</td>';
                trHTML += '<td>';
                trHTML += "</tr>";
                num++;
            

            }
            console.log(trHTML);
            document.getElementById("mytable").innerHTML = trHTML;

        }
    };
}
