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


    var noodles = 0;
    var appetizers = 0;
    var a_la_carte = 0;
    var drink = 0;
    var curry_rice = 0;

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

                switch (object['id_type']) {
                    case "noodles":
                        noodles = noodles + 1;
                        break;
                    case "appetizers":
                        appetizers = appetizers + 1;
                        break;
                    case "a_la_carte":
                        a_la_carte = a_la_carte + 1;
                        break;
                    case "drink":
                        drink = drink + 1;
                        break;
                    case "curry_rice":
                        curry_rice = curry_rice + 1;
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

            var optionsTimelyResponse = { title: 'ข้อมูลการประเมินของลูกค้าทั้งหมด ในระดับ คุณภาพของอาหาร ' };
            var chartTimelyResponse = new google.visualization.PieChart(document.getElementById('piechartTimelyResponse'));
            chartTimelyResponse.draw(TimelyResponseData, optionsTimelyResponse);

            var dataSubmitted = google.visualization.arrayToDataTable([
                ['Installs', 'Number', {
                    role: 'style'
                }, {
                        role: 'annotation'
                    }],
                [, appetizers, 'color: #FF2C2C', 'อาหารทานเล่น'],
                [, noodles, 'color: #FFA22C', 'ก๋วยเตี๋ยว'],
                [, a_la_carte, 'color: #FAFF2C', 'อาหารตามสั่ง'],
                [, drink, 'color: #8DFF2C', 'เครื่องดื่ม'],
                [, curry_rice, 'color: #2CFF41', 'ข้าวราดแกง'],

            ]);

            var optionSubmitted = {
                title: 'จำนวนยอดการประเมินในแต่ละประเภท',
                legend: { position: 'none' }
            };

            var chartSubmitted = new google.visualization.BarChart(document.getElementById('barchartSubmitted'));
            chartSubmitted.draw(dataSubmitted, optionSubmitted);


        }
    };

}

