google.charts.load('current', {
    'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(loadGraph);

function loadGraph() {
    var db1 = 0;
    var db2 = 0;
    var db3 = 0;
    var db4 = 0;
    var db5 = 0;


    var quality5 = 0;
    var quality4 = 0;
    var quality3 = 0;
    var quality2 = 0;
    var quality1 = 0;

    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;

    var p11 = 0;
    var p22 = 0;
    var p33 = 0;
    var p44 = 0;
    var p55 = 0;

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

                switch (object['id_quality']) {
                    case "5":
                        quality5 = quality5 + 1;
                        break;
                    case "4":
                        quality4 = quality4 + 1;
                        break;
                    case "3":
                        quality3 = quality3 + 1;
                        break;
                    case "2":
                        quality2 = quality2 + 1;
                        break;
                    case "1":
                        quality1 = quality1 + 1;
                        break;
                }
            }

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

                switch (object['id_price']) {
                    case "5":
                        p55 = p55 + 1;
                        break;
                    case "4":
                        p44 = p44 + 1;
                        break;
                    case "3":
                        p33 = p33 + 1;
                        break;
                    case "2":
                        p22 = p22 + 1;
                        break;
                    case "1":
                        p11 = p11 + 1;
                        break;
                }
            }


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
                ,is3D: true};

            var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('piechartTimelyResponse'));
            chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

            var dataSubmitted = google.visualization.arrayToDataTable([
                ['Data', 'id_quality', {
                    role: 'style'
                }, {
                        role: 'annotation'
                    }],
                [, quality5, 'color: #FF2C2C', '5'],
                [, quality4, 'color: #FFA22C', '4'],
                [, quality3, 'color: #FAFF2C', '3'],
                [, quality2, 'color: #8DFF2C', '2'],
                [, quality1, 'color: #2CFF41', '1'],

            ]);

            var optionSubmitted = {
                title: 'ยอดรวมจำนวนการประเมินด้านคุณภาพอาหาร',
                legend: { position: 'none' }
            };
///
            var chartSubmitted = new google.visualization.BarChart(document.getElementById('barchartSubmitted'));
            chartSubmitted.draw(dataSubmitted, optionSubmitted);

            var TimelyResponseData = google.visualization.arrayToDataTable([
                ['id_price', 'Case'],
                ['ดีเยี่ยม', p1],
                ['ดี', p2],
                ['ปานกลาง', p3],
                ['พอใช้', p4],
                ['ปรับปรุง', p5],
            ]);

            var optionsTimelyResponse = { 
                title: 'ข้อมูลการประเมินของลูกค้าทั้งหมด ในระดับ คุณภาพของอาหาร ' 
                ,is3D: true};

            var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('chart2'));
            chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

            var dataSubmitted = google.visualization.arrayToDataTable([
                ['Data', 'id_price', {
                    role: 'style'
                }, {
                        role: 'annotation'
                    }],
                [, p55, 'color: #FF2C2C', '5'],
                [, p44, 'color: #FFA22C', '4'],
                [, p33, 'color: #FAFF2C', '3'],
                [, p22, 'color: #8DFF2C', '2'],
                [, p11, 'color: #2CFF41', '1'],

            ]);

            var optionSubmitted = {
                title: 'ยอดรวมจำนวนการประเมินด้านคุณภาพอาหาร',
                legend: { position: 'none' }
            };

            var chartSubmitted = new google.visualization.BarChart(document.getElementById('chart3'));
            chartSubmitted.draw(dataSubmitted, optionSubmitted);

        }
    };

}
