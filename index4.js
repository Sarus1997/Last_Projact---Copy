google.charts.load('current', {
    'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(loadGraph);

// function loadTable() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "http://localhost:3000/admin2");
//     xhttp.send();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var trHTML = '';
//             var num = 1;
//             const objects = JSON.parse(this.responseText);  
//             for (let object of objects) {

//                 trHTML += '<tr>';
//                 trHTML += '<td>' + num + '</td>';
//                 trHTML += '<td>' + object['id_restaurant'] + '</td>';
//                 trHTML += '<td>' + object['id_type'] + '</td>';
//                 trHTML += '<td>' + object['id_quality'] + '</td>';
//                 trHTML += '<td>' + object['id_price'] + '</td>';
//                 trHTML += '<td>' + object['id_serve'] + '</td>';
//                 trHTML += '<td>' + object['id_dress'] + '</td>';
//                 trHTML += '<td>' + object['id_cleanliness'] + '</td>';
//                 trHTML += '<td>' + object['id_polite'] + '</td>';
//                 trHTML += '<td>';
//                 trHTML += "</tr>";

//                 num++;
//             }
//             document.getElementById("mytable").innerHTML = trHTML;

//             loadGraph();
//         }
//     };
// }

// function loadQueryTable() {
//     document.getElementById("mytable").innerHTML = "<tr><th scope=\"row\" colspan=\"5\">Loading...</th></tr>";
//     const searchText = document.getElementById('searchTextBox').value;

//     const xhttp = new XMLHttpRequest();
//     if (searchText == ""){
//         window.location.reload();
//     } eles 
//     xhttp.open("GET", "http://localhost:3000/admin2/findtext/" + searchText);

//     xhttp.send();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var trHTML = '';
//             var num = 1;
//             const objects = JSON.parse(this.responseText).Complaint;
//             for (let object of objects) {
//                 trHTML += '<tr>';
//                 trHTML += '<td>' + num + '</td>';
//                 trHTML += '<td>' + object['id_restaurant'] + '</td>';
//                 trHTML += '<td>' + object['id_type'] + '</td>';
//                 trHTML += '<td>' + object['id_quality'] + '</td>';
//                 trHTML += '<td>' + object['id_price'] + '</td>';
//                 trHTML += '<td>' + object['id_serve'] + '</td>';
//                 trHTML += '<td>' + object['id_dress'] + '</td>';
//                 trHTML += '<td>' + object['id_cleanliness'] + '</td>';
//                 trHTML += '<td>' + object['id_polite'] + '</td>';
//                 trHTML += '<td>';
//                 trHTML += "</tr>";
//                 num++;
            

//             }
//             console.log(trHTML);
//             document.getElementById("mytable").innerHTML = trHTML;

//         }
//     };
// }

function showCompliantCreateBox() {

    var d = new Date();
    const date = d.toISOString().split('T')[0]

    Swal.fire({
        title: 'เพิ่มข้อมูลร้าน',
        html:
            '<div class="mb-3"><label for="id_restaurant" class="form-label">id_restaurant</label>' +
            '<input class="form-control" id="id_restaurant" placeholder="id_restaurant"></div>' +

            '<div class="mb-3"><label for="id_type" class="form-label">id_type</label>' +
            '<input class="form-control" id="id_type" placeholder="id_type"></div>' +

            '<div class="mb-3"><label for="id_quality" class="form-label">id_quality</label>' +
            '<input class="form-control" id="id_quality placeholder="id_quality"></div>' +

            '<div class="mb-3"><label for="id_price" class="form-label">id_price</label>' +
            '<input class="form-control" id="id_price" placeholder="id_price"></div>' +

            '<div class="mb-3"><label for="id_serve" class="form-label">id_serve</label>' +
            '<input class="form-control" id="id_serve" placeholder="id_serve"></div>' +

            '<div class="mb-3"><label for="id_dress" class="form-label">id_dress</label>' +
            '<input class="form-control" id="id_dress" placeholder="id_dress"></div>' +

            '<div class="mb-3"><label for="id_cleanliness" class="form-label">id_cleanliness</label>' +
            '<input class="form-control" id="id_cleanliness" placeholder="id_cleanliness"></div>' +

            '<div class="mb-3"><label for="id_polite" class="form-label">id_polite</label>' +
            '<input class="form-control" id="id_polite placeholder="id_polite"></div>' ,


        focusConfirm: false,
        preConfirm: () => {
            compliantCreate();
        }
    });
}

function loadGraph() {
    var noodles = 0;
    var appetizers= 0;
    var a_la_carte = 0;
    var drink = 0;
    var curry_rice = 0;
    var other = 0;


    var noodles = 0;
    var appetizers= 0;
    var a_la_carte = 0;
    var drink = 0;
    var curry_rice = 0;
    var other = 0;

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/admin2");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                switch (object['id_type']) {
                    case "noodles":
                        noodles = noodles + 1;
                        break;
                    case "appetizers":
                        appetizers= appetizers + 1;
                        break;
                    case "a_la_carte":
                        a_la_carte = a_la_carte + 1;
                        break;
                    case "drink":
                        drink = drink+ 1;
                        break;
                    case "curry_rice":
                        curry_rice = curry_rice + 1;
                        break;
                    default:
                        other = other + 1;
                        break;
                }

                switch (object['id_type']) {
                    case "noodles":
                        noodles = noodles + 1;
                        break;
                    case "appetizers":
                        appetizers= appetizers + 1;
                        break;
                    case "a_la_carte":
                        a_la_carte = a_la_carte + 1;
                        break;
                    case "drink":
                        drink = drink+ 1;
                        break;
                    case "curry_rice":
                        curry_rice = curry_rice + 1;
                        break;
                    default:
                        other = other + 1;
                        break;
                }
            }

            var TimelyResponseData = google.visualization.arrayToDataTable([
                ['id_type', 'Case'],
                ['ก๋วยเตี๋ยว', noodles],
                ['อาหารทานเล่น', appetizers],
                ['อาหารตามสั่ง', a_la_carte],
                ['เครื่องดื่ม', drink],
                ['ข้าวราดแกง', curry_rice],
                ['Other', other]

            ]);

            var optionsTimelyResponse = { title: 'ข้อมูลภาพรวมการประเมิน' };
            var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('piechartTimelyResponse'));
            chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

            var dataSubmitted = google.visualization.arrayToDataTable([
                ['Installs', 'Number', {
                    role: 'style'
                }, {
                    role: 'annotation'
                }],
                ['1.', appetizers, 'color: #FF2C2C', 'อาหารทานเล่น'],
                ['2.', noodles, 'color: #FFA22C', 'ก๋วยเตี๋ยว'],
                ['3.', a_la_carte, 'color: #FAFF2C', 'อาหารตามสั่ง'],
                ['4.', drink, 'color: #8DFF2C', 'เครื่องดื่ม'],
                ['5.', curry_rice, 'color: #2CFF41', 'ข้าวราดแกง'],
                ['Other', other, 'color: #25F4BC', 'Other']
            ]);

            var optionSubmitted = {
                title: 'ประเภทร้านอาหารยอดนิยม',
                legend: { position: 'none' }
            };

            var chartSubmitted = new google.visualization.BarChart(document.getElementById('barchartSubmitted'));
            chartSubmitted.draw(dataSubmitted, optionSubmitted);
        }
    };


}

