google.charts.load('current', {
    'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(loadGraph);

function loadGraph() {


    ///////////คุณภาพอาหาร//////////////

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/restaurants");
    xhttp.setRequestHeader("Content-Type", "application/json")
    const restaurant_id = localStorage.getItem('name')
    if (localStorage.getItem('role') === 'restaurant') {
        if (restaurant_id.includes('ชา 8')) {
            const data = {
                "restaurant_id": "ร้านชา 8"
            }
            xhttp.send(JSON.stringify(data))
        } else if (restaurant_id.includes('ป้าละม่อม')) {
            const data = {
                "restaurant_id": "ร้านป้าละม่อม"
            }
            xhttp.send(JSON.stringify(data))
        } else if (restaurant_id.includes('อัสมา')) {
            const data = {
                "restaurant_id": "ร้านอัสมา"
            }
            xhttp.send(JSON.stringify(data))
        } else if (restaurant_id.includes('ผลไม้')) {
            const data = {
                "restaurant_id": "สิทธิวงศ์ ผลไม้"
            }
            xhttp.send(JSON.stringify(data))
        } else {
            const data = {
                "restaurant_id": restaurant_id
            }
            xhttp.send(JSON.stringify(data))
        }
    } else {
        const data = {
            "restaurant_id": ""
        }
        xhttp.send(JSON.stringify(data))
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            console.log(objects)

            let cleanliness_1 = 0;
            let cleanliness_2 = 0;
            let cleanliness_3 = 0;
            let cleanliness_4 = 0;
            let cleanliness_5 = 0;

            let dress_1 = 0;
            let dress_2 = 0;
            let dress_3 = 0;
            let dress_4 = 0;
            let dress_5 = 0;

            let polite_1 = 0;
            let polite_2 = 0;
            let polite_3 = 0;
            let polite_4 = 0;
            let polite_5 = 0;

            let price_1 = 0;
            let price_2 = 0;
            let price_3 = 0;
            let price_4 = 0;
            let price_5 = 0;

            let quality_1 = 0;
            let quality_2 = 0;
            let quality_3 = 0;
            let quality_4 = 0;
            let quality_5 = 0;

            let serve_1 = 0;
            let serve_2 = 0;
            let serve_3 = 0;
            let serve_4 = 0;
            let serve_5 = 0;

            const rows = objects.length;

            for (var i = 0; i < objects.length; i++) {
                if (objects[i].id_cleanliness == 1) {
                    cleanliness_1++;
                } else if (objects[i].id_cleanliness == 2) {
                    cleanliness_2++;
                } else if (objects[i].id_cleanliness == 3) {
                    cleanliness_3++;
                } else if (objects[i].id_cleanliness == 4) {
                    cleanliness_4++;
                } else if (objects[i].id_cleanliness == 5) {
                    cleanliness_5++;
                }

                if (objects[i].id_dress == 1) {
                    dress_1++;
                } else if (objects[i].id_dress == 2) {
                    dress_2++;
                } else if (objects[i].id_dress == 3) {
                    dress_3++;
                } else if (objects[i].id_dress == 4) {
                    dress_4++;
                } else if (objects[i].id_dress == 5) {
                    dress_5++;
                }

                if (objects[i].id_polite == 1) {
                    polite_1++;
                } else if (objects[i].id_polite == 2) {
                    polite_2++;
                } else if (objects[i].id_polite == 3) {
                    polite_3++;
                } else if (objects[i].id_polite == 4) {
                    polite_4++;
                } else if (objects[i].id_polite == 5) {
                    polite_5++;
                }

                if (objects[i].id_price == 1) {
                    price_1++;
                } else if (objects[i].id_price == 2) {
                    price_2++;
                } else if (objects[i].id_price == 3) {
                    price_3++;
                } else if (objects[i].id_price == 4) {
                    price_4++;
                } else if (objects[i].id_price == 5) {
                    price_5++;
                }

                if (objects[i].id_quality == 1) {
                    quality_1++;
                } else if (objects[i].id_quality == 2) {
                    quality_2++;
                } else if (objects[i].id_quality == 3) {
                    quality_3++;
                } else if (objects[i].id_quality == 4) {
                    quality_4++;
                } else if (objects[i].id_quality == 5) {
                    quality_5++;
                }

                if (objects[i].id_serve == 1) {
                    serve_1++;
                } else if (objects[i].id_serve == 2) {
                    serve_2++;
                } else if (objects[i].id_serve == 3) {
                    serve_3++;
                } else if (objects[i].id_serve == 4) {
                    serve_4++;
                } else if (objects[i].id_serve == 5) {
                    serve_5++;
                }
            }

            const total_clean = (cleanliness_1 * 1) + (cleanliness_2 * 2) + (cleanliness_3 * 3) + (cleanliness_4 * 4) + (cleanliness_5 * 5)
            const total_dress = (dress_1 * 1) + (dress_2 * 2) + (dress_3 * 3) + (dress_4 * 4) + (dress_5 * 5)
            const total_polite = (polite_1 * 1) + (polite_2 * 2) + (polite_3 * 3) + (polite_4 * 4) + (polite_5 * 5)
            const total_price = (price_1 * 1) + (price_2 * 2) + (price_3 * 3) + (price_4 * 4) + (price_5 * 5)
            const total_quality = (quality_1 * 1) + (quality_2 * 2) + (quality_3 * 3) + (quality_4 * 4) + (quality_5 * 5)
            const total_serve = (serve_1 * 1) + (serve_2 * 2) + (serve_3 * 3) + (serve_4 * 4) + (serve_5 * 5)
            const max_score = rows * 5;

            const score_clean = (total_clean / max_score) * 100;
            const score_dress = (total_dress / max_score) * 100;
            const score_polite = (total_polite / max_score) * 100;
            const score_price = (total_price / max_score) * 100;
            const score_quality = (total_quality / max_score) * 100;
            const score_serve = (total_serve / max_score) * 100;

            console.log('คะแนนสะอาด', score_clean)
            console.log('คะแนนแต่งกาย', score_dress)
            console.log('คะแนนสุภาพ', score_polite)
            console.log('คะแนนราคา', score_price)
            console.log('คะแนนคุณภาพ', score_quality)
            console.log('คะแนนบริการ', score_serve)


            var score = google.visualization.arrayToDataTable([['id_quality', 'Case', {role: 'style'}],
                ['สะอาด', score_clean, 'color: #FFA500'],
                ['แต่งกาย', score_dress, 'color: #FFC0CB'],
                ['สุภาพ', score_polite, 'color: #00BFFF'],
                ['ราคา', score_price, 'color: #90EE90'],
                ['คุณภาพ', score_quality, 'color: #FF6347'],
                ['บริการ', score_serve, 'color: #9370DB']
            ]);


            var options = {
                title: 'Overall Ratings',
                titleTextStyle: {
                    fontSize: 24,
                    bold: true
                },
                bar: {
                    groupWidth: "100%",
                    width: 50
                },
                legend: {position: "none"},
                vAxis: {
                    viewWindow: {
                        min: 0,
                        max: 6
                    },
                    ticks: [0, 20, 40, 60, 80, 100]
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById("overall_status"));
            chart.draw(score, options);


            console.log('สะอาด ', cleanliness_1, cleanliness_2, cleanliness_3, cleanliness_4, cleanliness_5)
            console.log('แต่งกาย', dress_1, dress_2, dress_3, dress_4, dress_5)
            console.log('สุภาพ', polite_1, polite_2, polite_3, polite_4, polite_5)
            console.log('ราคา', price_1, price_2, price_3, price_4, price_5)
            console.log('คุณภาพ', quality_1, quality_2, quality_3, quality_4, quality_5)
            console.log('บริการ', serve_1, serve_2, serve_3, serve_4, serve_5)

            /////////อาหาร////////////
            var cleanliness = google.visualization.arrayToDataTable([
                ['id_quality', 'Case'],
                ['ดีเยี่ยม', cleanliness_5],
                ['ดี', cleanliness_4],
                ['ปานกลาง', cleanliness_3],
                ['พอใช้', cleanliness_2],
                ['ปรับปรุง', cleanliness_1],
            ]);

            var options_Cleanliness_pie = {
                title: 'ความสะอาด',
                is3D: true,
            };

            var chartCleanliness = new google.visualization.PieChart(document.getElementById('chart8'));
            chartCleanliness.draw(cleanliness, options_Cleanliness_pie);

            /////////อาหาร////////////
            var chartCleanliness_column = new google.visualization.ColumnChart(document.getElementById('chart9'));
            chartCleanliness_column.draw(cleanliness, options_Cleanliness_pie);

            /////////ราคา////////////
            var price = google.visualization.arrayToDataTable([
                ['id_quality', 'Case'],
                ['ดีเยี่ยม', price_5],
                ['ดี', price_4],
                ['ปานกลาง', price_3],
                ['พอใช้', price_2],
                ['ปรับปรุง', price_1],
            ]);

            var options_price_pie = {
                title: 'ราคา',
                is3D: true,
            }

            var chartPrice = new google.visualization.PieChart(document.getElementById('chart2'));
            chartPrice.draw(price, options_price_pie);

            var chartPrice_column = new google.visualization.ColumnChart(document.getElementById('chart3'));
            chartPrice_column.draw(price, options_price_pie);


            /////////การแต่งกาย////////////
            var dress = google.visualization.arrayToDataTable([
                ['id_dress', 'Case'],
                ['ดีเยี่ยม', dress_5],
                ['ดี', dress_4],
                ['ปานกลาง', dress_3],
                ['พอใช้', dress_2],
                ['ปรับปรุง', dress_1],
            ]);

            var options_dress_pie = {
                title: 'การแต่งกาย',
                is3D: true,
            };

            var chartDress = new google.visualization.PieChart(document.getElementById('chart6'));
            chartDress.draw(dress, options_dress_pie);

            var chartDress_column = new google.visualization.ColumnChart(document.getElementById('chart7'));
            chartDress_column.draw(dress, options_dress_pie);


            /////////การบริการ////////////
            var serve = google.visualization.arrayToDataTable([
                ['id_serve', 'Case'],
                ['ดีเยี่ยม', serve_5],
                ['ดี', serve_4],
                ['ปานกลาง', serve_3],
                ['พอใช้', serve_2],
                ['ปรับปรุง', serve_1],
            ]);

            var options_serve_pie = {
                title: 'การบริการ',
                is3D: true,
            }

            var chartServe = new google.visualization.PieChart(document.getElementById('chart4'));
            chartServe.draw(serve, options_serve_pie);

            var chartServe_column = new google.visualization.ColumnChart(document.getElementById('chart5'));
            chartServe_column.draw(serve, options_serve_pie);


            /////////คุณภาพ////////////
            var quality = google.visualization.arrayToDataTable([
                ['id_quality', 'Case'],
                ['ดีเยี่ยม', quality_5],
                ['ดี', quality_4],
                ['ปานกลาง', quality_3],
                ['พอใช้', quality_2],
                ['ปรับปรุง', quality_1],
            ]);

            var options_quality_pie = {
                title: 'คุณภาพ',
                is3D: true,
            }

            var chartQuality = new google.visualization.PieChart(document.getElementById('piechartTimelyResponse'));
            chartQuality.draw(quality, options_quality_pie);

            var chartQuality_column = new google.visualization.ColumnChart(document.getElementById('barchartSubmitted'));
            chartQuality_column.draw(quality, options_quality_pie);


            /////////สุภาพ////////////
            var polite = google.visualization.arrayToDataTable([
                ['id_polite', 'Case'],
                ['ดีเยี่ยม', polite_5],
                ['ดี', polite_4],
                ['ปานกลาง', polite_3],
                ['พอใช้', polite_2],
                ['ปรับปรุง', polite_1],
            ]);

            var options_polite_pie = {
                title: 'สุภาพ',
                is3D: true,
            }

            var chartPolite = new google.visualization.PieChart(document.getElementById('chart10'));
            chartPolite.draw(polite, options_polite_pie);

            var chartPolite_column = new google.visualization.ColumnChart(document.getElementById('chart11'));
            chartPolite_column.draw(polite, options_polite_pie);
        }
    }
}

