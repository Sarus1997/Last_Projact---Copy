google.charts.load('current', {
    'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(loadTable);

function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/admin");
    xhttp.send();
    xhttp.onreadystatechange = function () {
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
                trHTML += '<td>';
                trHTML += '<a type="button" class="btn btn-outline-secondary" onclick="showCompliantEditBox(\'' + object['_id'] + '\')"><i class="fas fa-edit"></i></a>';
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
                trHTML += '<td>' + object['Name'] + '</td>';
                trHTML += '<td>' + object['Type'] + '</td>';
                trHTML += '<td>' + object['Tel'] + '</td>';
                trHTML += '<td>' + object['Opening'] + '</td>';
                trHTML += '<td>';
                trHTML += '<a type="button" class="btn btn-outline-secondary" onclick="showCompliantEditBox(\'' + object['_id'] + '\')"><i class="fas fa-edit"></i></a>';
                trHTML += "</tr>";
                num++;


            }
            console.log(trHTML);
            document.getElementById("mytable").innerHTML = trHTML;

        }
    };
}

function loadGraph() {
    var db1 = 0;
    var db2 = 0;
    var db3 = 0;
    var db4 = 0;
    var db5 = 0;

    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;

    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var s4 = 0;
    var s5 = 0;

    var d1 = 0;
    var d2 = 0;
    var d3 = 0;
    var d4 = 0;
    var d5 = 0;

    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    var c5 = 0;

    var po1 = 0;
    var po2 = 0;
    var po3 = 0;
    var po4 = 0;
    var po5 = 0;

    ///////////คุณภาพอาหาร//////////////
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/admin2");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                switch (object['id_quality']) {
                    case "5":
                        db1 = db1 + 1;
                        break;
                    case "4":
                        db2 = db2 + 1;
                        break;
                    case "3":
                        db3 = db3 + 1;
                        break;
                    case "2":
                        db4 = db4 + 1;
                        break;
                    case "1":
                        db5 = db5 + 1;
                        break;
                }

            }

            //////////////////คุณภาพด้านราคา//////////////////
            for (let object of objects) {
                switch (object['id_price']) {
                    case "5":
                        p1 = p1 + 1;
                        break;
                    case "4":
                        p2 = p2 + 1;
                        break;
                    case "3":
                        p3 = p3 + 1;
                        break;
                    case "2":
                        p4 = p4 + 1;
                        break;
                    case "1":
                        p5 = p5 + 1;
                        break;
                }
            }

            ///////////////คุณภาพด้านการบริการ///////////////////////
            for (let object of objects) {
                switch (object['id_serve']) {
                    case "5":
                        s1 = s1 + 1;
                        break;
                    case "4":
                        s2 = s2 + 1;
                        break;
                    case "3":
                        s3 = s3 + 1;
                        break;
                    case "2":
                        s4 = s4 + 1;
                        break;
                    case "1":
                        s5 = s5 + 1;
                        break;
                }
            }

            ////////////////คุณภาพด้านการแต่งการ////////////
            for (let object of objects) {
                switch (object['id_dress']) {
                    case "5":
                        d1 = d1 + 1;
                        break;
                    case "4":
                        d2 = d2 + 1;
                        break;
                    case "3":
                        d3 = d3 + 1;
                        break;
                    case "2":
                        d4 = d4 + 1;
                        break;
                    case "1":
                        d5 = d5 + 1;
                        break;
                }
            }

            ////////////////คุณภาพด้านความสะอาด////////////
            for (let object of objects) {
                switch (object['id_cleanliness']) {
                    case "5":
                        c1 = c1 + 1;
                        break;
                    case "4":
                        c2 = c2 + 1;
                        break;
                    case "3":
                        c3 = c3 + 1;
                        break;
                    case "2":
                        c4 = c4 + 1;
                        break;
                    case "1":
                        c5 = c5 + 1;
                        break;
                }
            }

            ////////////////คุณภาพด้านตวามสุภาพของร้านค้า///////////
            for (let object of objects) {
                switch (object['id_polite']) {
                    case "5":
                        po1 = po1 + 1;
                        break;
                    case "4":
                        po2 = po2 + 1;
                        break;
                    case "3":
                        po3 = po3 + 1;
                        break;
                    case "2":
                        po4 = po4 + 1;
                        break;
                    case "1":
                        po5 = po5 + 1;
                        break;
                }
            }

            /////////อาหาร////////////
            var TimelyResponseData = google.visualization.arrayToDataTable([
                ['id_quality', 'Case'],
                ['ดีเยี่ยม', db1],
                ['ดี', db2],
                ['ปานกลาง', db3],
                ['พอใช้', db4],
                ['ปรับปรุง', db5],
            ]);

            var optionsTimelyResponse = {
                title: 'ข้อมูลการประเมินของลูกค้าทั้งหมด ในระดับ คุณภาพของอาหาร '
                , is3D: true
            };

            var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('piechartTimelyResponse'));
            chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

            var dataSubmitted = google.visualization.arrayToDataTable([
                ['Data', 'id_quality', {
                    role: 'style'
                }, {
                        role: 'annotation'
                    }],
                [, db1, 'color: #FF2C2C', '5'],
                [, db2, 'color: #FFA22C', '4'],
                [, db3, 'color: #FAFF2C', '3'],
                [, db5, 'color: #8DFF2C', '2'],
                [, db5, 'color: #2CFF41', '1'],

            ]);

            var optionSubmitted = {
                title: 'ยอดรวมจำนวนการประเมินด้านคุณภาพอาหาร',
                legend: { position: 'none' }
            };

            var chartSubmitted = new google.visualization.BarChart(document.getElementById('barchartSubmitted'));
            chartSubmitted.draw(dataSubmitted, optionSubmitted);

            /////////////////ราคา/////////////////////////
            var TimelyResponseData = google.visualization.arrayToDataTable([
                ['id_price', 'Case'],
                ['ดีเยี่ยม', p1],
                ['ดี', p2],
                ['ปานกลาง', p3],
                ['พอใช้', p4],
                ['ปรับปรุง', p5],
            ]);

            var optionsTimelyResponse = {
                title: 'ข้อมูลการประเมินของลูกค้าทั้งหมด ในระดับ คุณภาพด้านราคา '
                , is3D: true
            };

            var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('chart2'));
            chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

            var dataSubmitted = google.visualization.arrayToDataTable([
                ['Data', 'id_price', {
                    role: 'style'
                }, {
                        role: 'annotation'
                    }],
                [, p1, 'color: #FF2C2C', '5'],
                [, p2, 'color: #FFA22C', '4'],
                [, p3, 'color: #FAFF2C', '3'],
                [, p4, 'color: #8DFF2C', '2'],
                [, p5, 'color: #2CFF41', '1'],

            ]);

            var optionSubmitted = {
                title: 'ยอดรวมจำนวนการประเมินด้านคุณภาพราคา',
                legend: { position: 'none' }
            };

            var chartSubmitted = new google.visualization.BarChart(document.getElementById('chart3'));
            chartSubmitted.draw(dataSubmitted, optionSubmitted);

        }

        //////////////////บริการ////////////////////////
        var TimelyResponseData = google.visualization.arrayToDataTable([
            ['id_serve', 'Case'],
            ['ดีเยี่ยม', s1],
            ['ดี', s2],
            ['ปานกลาง', s3],
            ['พอใช้', s4],
            ['ปรับปรุง', s5],
        ]);

        var optionsTimelyResponse = {
            title: 'ข้อมูลการประเมินของลูกค้าทั้งหมด ในระดับ คุณภาพของการบริการ '
            , pieHole: 0.4,
        };

        var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('chart4'));
        chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

        var dataSubmitted = google.visualization.arrayToDataTable([
            ['Data', 'id_serve', {
                role: 'style'
            }, {
                    role: 'annotation'
                }],
            [, s1, 'color: #FF2C2C', '5'],
            [, s2, 'color: #FFA22C', '4'],
            [, s3, 'color: #FAFF2C', '3'],
            [, s4, 'color: #8DFF2C', '2'],
            [, s5, 'color: #2CFF41', '1'],

        ]);

        var optionSubmitted = {
            title: 'ยอดรวมจำนวนการประเมินด้านการบริการ',
            legend: { position: 'none' }
        };

        var chartSubmitted = new google.visualization.BarChart(document.getElementById('chart5'));
        chartSubmitted.draw(dataSubmitted, optionSubmitted);


        //////////////////การแต่งกาย////////////////////////
        var TimelyResponseData = google.visualization.arrayToDataTable([
            ['id_dress', 'Case'],
            ['ดีเยี่ยม', d1],
            ['ดี', d2],
            ['ปานกลาง', d3],
            ['พอใช้', d4],
            ['ปรับปรุง', d5],
        ]);

        var optionsTimelyResponse = {
            title: 'ข้อมูลการประเมินของลูกค้าทั้งหมด ในระดับ คุณภาพของการแต่งกาย '
            , pieHole: 0.4,
        };

        var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('chart6'));
        chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

        var dataSubmitted = google.visualization.arrayToDataTable([
            ['Data', 'id_dress', {
                role: 'style'
            }, {
                    role: 'annotation'
                }],
            [, d1, 'color: #FF2C2C', '5'],
            [, d2, 'color: #FFA22C', '4'],
            [, d3, 'color: #FAFF2C', '3'],
            [, d4, 'color: #8DFF2C', '2'],
            [, d5, 'color: #2CFF41', '1'],

        ]);

        var optionSubmitted = {
            title: 'ยอดรวมจำนวนการประเมินด้านการแต่งกาย',
            legend: { position: 'none' }
        };

        var chartSubmitted = new google.visualization.BarChart(document.getElementById('chart7'));
        chartSubmitted.draw(dataSubmitted, optionSubmitted);


         //////////////////ความสะอาด////////////////////////
         var TimelyResponseData = google.visualization.arrayToDataTable([
            ['id_cleanliness', 'Case'],
            ['ดีเยี่ยม', c1],
            ['ดี', c2],
            ['ปานกลาง', c3],
            ['พอใช้', c4],
            ['ปรับปรุง', c5],
        ]);

        var optionsTimelyResponse = {
            title: 'ข้อมูลการประเมินของลูกค้าทั้งหมด ในระดับ คุณภาพของความสะอาด '
            , pieHole: 0.4,
        };

        var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('chart8'));
        chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

        var dataSubmitted = google.visualization.arrayToDataTable([
            ['Data', 'id_cleanliness', {
                role: 'style'
            }, {
                    role: 'annotation'
                }],
            [, c1, 'color: #FF2C2C', '5'],
            [, c2, 'color: #FFA22C', '4'],
            [, c3, 'color: #FAFF2C', '3'],
            [, c4, 'color: #8DFF2C', '2'],
            [, c5, 'color: #2CFF41', '1'],

        ]);

        var optionSubmitted = {
            title: 'ยอดรวมจำนวนการประเมินด้านความสะอาด',
            legend: { position: 'none' }
        };

        var chartSubmitted = new google.visualization.BarChart(document.getElementById('chart9'));
        chartSubmitted.draw(dataSubmitted, optionSubmitted);


         //////////////////ตวามสุภาพของร้านค้า////////////////////////
         var TimelyResponseData = google.visualization.arrayToDataTable([
            ['id_polite', 'Case'],
            ['ดีเยี่ยม', po1],
            ['ดี', po2],
            ['ปานกลาง', po3],
            ['พอใช้', po4],
            ['ปรับปรุง', po5],
        ]);

        var optionsTimelyResponse = {
            title: 'ข้อมูลการประเมินของลูกค้าทั้งหมด ในระดับ คุณภาพของตวามสุภาพของร้านค้า '
        };

        var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('chart10'));
        chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

        var dataSubmitted = google.visualization.arrayToDataTable([
            ['Data', 'id_polite', {
                role: 'style'
            }, {
                    role: 'annotation'
                }],
            [, po1, 'color: #FF2C2C', '5'],
            [, po2, 'color: #FFA22C', '4'],
            [, po3, 'color: #FAFF2C', '3'],
            [, po4, 'color: #8DFF2C', '2'],
            [, po5, 'color: #2CFF41', '1'],

        ]);

        var optionSubmitted = {
            title: 'ยอดรวมจำนวนการประเมินด้านตวามสุภาพของร้านค้า',
            legend: { position: 'none' }
        };

        var chartSubmitted = new google.visualization.BarChart(document.getElementById('chart11'));
        chartSubmitted.draw(dataSubmitted, optionSubmitted);

    }

};


function showCompliantCreateBox() {

    var d = new Date();
    const date = d.toISOString().split('T')[0]

    Swal.fire({
        title: 'เพิ่มข้อมูลร้าน',
        html: '<div class="mb-3"><label for="Name" class="form-label">Name</label>' +
            '<input class="form-control" id="Name" placeholder=" Name"></div>' +

            '<div class="mb-3"><label for="Type" class="form-label">Type</label>' +
            '<select class="form-select" id="Type" for="Type" aria-label="Default select example" placeholder=" Name">' +
            '<option selected disabled>Select Type</option>' +
            '<option value="อาหารตามสั่ง">อาหารตามสั่ง</option>' +
            '<option value="ข้าวราดแกง">ข้าวราดแกง</option>' +
            '<option value="ก๋วยเตี๋ยว">ก๋วยเตี๋ยว</option>' +
            '<option value="เครื่องดื่ม">เครื่องดื่ม</option>' +
            ' <option value="อาหารทานเล่น">อาหารทานเล่น</option>' +
            '</select>' +
            '</div>' +

            '<div class="mb-3"><label for="Tel" class="form-label">Tel</label>' +
            '<input class="form-control" id="Tel" placeholder=" Tel"></div>' +

            '<div class="mb-3"><label for="Opening" class="form-label">Opening</label>' +
            '<input class="form-control" id="Opening" placeholder=" Opening"></div>' ,


        focusConfirm: false,
        preConfirm: () => {
            compliantCreate();
        }
    });
}

function compliantCreate() {
    const Name = document.getElementById("Name").value;
    const Type = document.getElementById("Type").value;
    const Tel = document.getElementById("Tel").value;
    const Opening = document.getElementById("Opening").value;

    console.log(JSON.stringify({
        "Name": Name,
        "Type": Type,
        "Tel": Tel,
        "Opening": Opening,
    }));

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/admin/create");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "Name": Name,
        "Type": Type,
        "Tel": Tel,
        "Opening": Opening,
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
    xhttp.open("DELETE", "http://localhost:3000/admin/delete");
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

function showCompliantEditBox(id) {
    console.log("edit", id);
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/admin/" + id);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const object = JSON.parse(this.responseText).object;
            console.log("showCompliantEditBox", object);
            Swal.fire({
                title: 'แก้ไขข้อมูลร้าน',
                html: '<input id="id" class="swal2-input" placeholder="Name" type="hidden" value="' + object['_id'] + '"><br>' +
                    '<div class="mb-3"><label for="Name" class="form-label">Name</label>' +
                    '<input class="form-control" id="Name" placeholder="Name" value="' + object['Name'] + '"></div>' +

                    '<div class="mb-3"><label for="Type" class="form-label">Type</label>' +
                    '<select class="form-select" id="Type" for="Type" aria-label="Default select example" placeholder=" Name">' +
                    '<option selected disabled>Select Type</option>' +
                    '<option value="อาหารตามสั่ง">อาหารตามสั่ง</option>' +
                    '<option value="ข้าวราดแกง">ข้าวราดแกง</option>' +
                    '<option value="ก๋วยเตี๋ยว">ก๋วยเตี๋ยว</option>' +
                    '<option value="เครื่องดื่ม">เครื่องดื่ม</option>' +
                    ' <option value="อาหารทานเล่น">อาหารทานเล่น</option>' +
                    '</select>' +
                    '</div>' +
                    
                    '<div class="mb-3"><label for="Tel" class="form-label">Tel</label>' +
                    '<input class="form-control" id="Tel" placeholder="Tel" value="' + object['Tel'] + '"></div>' +

                    '<div class="mb-3"><label for="Opening" class="form-label">Opening</label>' +
                    '<input class="form-control" id="Opening" placeholder="Opening" value="' + object['Opening'] + '"></div>',


                focusConfirm: false,
                preConfirm: () => {
                    userEdit();
                }
            });
        }
    };
}

function userEdit() {
    const id = document.getElementById("id").value;
    const Name = document.getElementById("Name").value;
    const Type = document.getElementById("Type").value;
    const Tel = document.getElementById("Tel").value;
    const Opening = document.getElementById("Opening").value;

    console.log(JSON.stringify({
        "_id": id,
        "Name": Name,
        "Type": Type,
        "Tel": Tel,
        "Opening": Opening,
    }));

    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "http://localhost:3000/admin/update");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "_id": id,
        "Name": Name,
        "Type": Type,
        "Tel": Tel,
        "Opening": Opening,
    }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire(
                'Good job!',
                'Update Compliant Successfully!',
                'success'
            )
            loadTable();
        }
    };
}