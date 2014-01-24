google.load('visualization', '1.0', {'packages':['corechart','table']});
google.setOnLoadCallback(init);


function init(){

var data = new google.visualization.DataTable();
data.addColumn('string', 'Type of Death');
data.addColumn('number', 'Deaths');
data.addRows([
        ['Diseases of heart', 616828],
        ['Malignant neoplasms', 565469],
        ['Chronic lower respiratory diseases', 141090], 
        ['Cerebrovascular diseases', 134148],
        ['Accidents', 121902],
        ['Alzheimer\'s disease', 82435],
        ['Diabetes mellitus', 70553],
        ['Influenza and pneumonia', 56284],
        ['Suicide', 36035],
        ['Septicemia', 35927],
        ['Chronic liver disease and cirrhosis', 29963],
        ['Essential hypertension and hypertensive renal disease', 25742],
        ['Parkinson\'s disease', 20483],
        ['Homicide', 17826],
        ['All other causes', 469062]
        
]);

var options = {'title':'Deaths, for the 15 leading causes of death: United States, 2008',
                     'width':1024,
                     'height':600,
                     "is3D": true
                     };


/* var chart = new google.visualization.PieChart(document.getElementById('chart')); */
/*
var chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(data, options);
*/
/*
var chart = new google.visualization.ChartWrapper({
  chartType:'BarChart',
  dataTable:data,
  options:options,
  containerId:'chart'

});
chart.draw();    
*/

var options3 = {'title':'test GoogleCharts mit daten LIK',
                     'width':1024,
                     'height':600,
                     "is3D": true
                     };

var chart = new google.visualization.ChartWrapper({
  chartType:'BarChart',
  dataSourceUrl:"https://spreadsheets.google.com/tq?key=0AtYyaSft5ZThdDJLTzF5YzVESXRmU3NnOWl6LUpxZnc",
  query: 'SELECT A,B,C,D ORDER BY A',
  refreshInterval: 1,
  options:options3,
  containerId:'chart'

});
chart.draw(); 

}

/*
-- mit google-spreadsheet geht es:
https://docs.google.com/a/sofim.com/spreadsheet/ccc?key=0AtYyaSft5ZThdDJLTzF5YzVESXRmU3NnOWl6LUpxZnc&usp=sharing
https://spreadsheets.google.com/tq?key=0AtYyaSft5ZThdDJLTzF5YzVESXRmU3NnOWl6LUpxZnc

-- mit excel-datei geht es nicht
https://drive.google.com/a/sofim.com/file/d/0B9YyaSft5ZThSmJGMm96QUNXOEU/edit?usp=sharing
https://spreadsheets.google.com/tq?key=0B9YyaSft5ZThSmJGMm96QUNXOEU
*/

/*
-- google fusion-table erstellt ab xls :
--
https://www.google.com/fusiontables/DataSource?docid=15KknoWfsd4R3hzbVeuJzGT-_nITJPLXK7LCFSf0
--
-- damit grafik gemacht (innerhalb fusion)
https://www.google.com/fusiontables/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col3%2C+col4%2C+col5%2C+col2+from+15KknoWfsd4R3hzbVeuJzGT-_nITJPLXK7LCFSf0+order+by+col2+desc+limit+25&viz=GVIZ&t=BAR&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&gco_useFirstColumnAsDomain=true&gco_isStacked=false&gco_booleanRole=certainty&gco_hAxis=%7B%22useFormatFromData%22%3Atrue%2C+%22viewWindow%22%3A%7B%22max%22%3A110%2C+%22min%22%3A-10%7D%2C+%22minValue%22%3A-10%2C+%22maxValue%22%3A110%2C+%22titleTextStyle%22%3A%7B%22color%22%3A%22%23222%22%2C+%22fontSize%22%3A%2211%22%2C+%22italic%22%3Atrue%7D%2C+%22textStyle%22%3A%7B%22color%22%3A%22%23222%22%2C+%22fontSize%22%3A%2211%22%7D%2C+%22minorGridlines%22%3A%7B%22count%22%3A%224%22%7D%2C+%22gridlines%22%3A%7B%22count%22%3A%2210%22%7D%2C+%22viewWindowMode%22%3A%22explicit%22%7D&gco_vAxes=%5B%7B%22useFormatFromData%22%3Atrue%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%2C+%22viewWindow%22%3Anull%2C+%22viewWindowMode%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%7D%5D&gco_legend=bottom&gco_title=test+mit+fusiontables+von+google&gco_fontName=Arial+Narrow&gco_titleTextStyle=%7B%22color%22%3A%22%23666666%22%2C+%22fontSize%22%3A%2220%22%2C+%22bold%22%3Atrue%7D&gco_legendTextStyle=%7B%22color%22%3A%22%23434343%22%2C+%22fontSize%22%3A%2210%22%7D&gco_backgroundColor=%7B%22fill%22%3A%22%23f3f3f3%22%7D&att=true&width=1500&height=885
https://www.google.com/fusiontables/embedviz?containerId=googft-gviz-canvas&q=select+col1%2C+col3%2C+col4%2C+col5%2C+col2+from+15KknoWfsd4R3hzbVeuJzGT-_nITJPLXK7LCFSf0+order+by+col2+desc+limit+15&viz=GVIZ&t=BAR&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&gco_useFirstColumnAsDomain=true&gco_isStacked=false&gco_booleanRole=certainty&gco_hAxis=%7B%22useFormatFromData%22%3Atrue%2C+%22viewWindow%22%3A%7B%22max%22%3Anull%2C+%22min%22%3Anull%7D%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%2C+%22titleTextStyle%22%3A%7B%22color%22%3A%22%23222%22%2C+%22fontSize%22%3A%2211%22%2C+%22italic%22%3Atrue%7D%2C+%22textStyle%22%3A%7B%22color%22%3A%22%23222%22%2C+%22fontSize%22%3A%2211%22%7D%2C+%22minorGridlines%22%3A%7B%22count%22%3A%222%22%7D%2C+%22gridlines%22%3A%7B%22count%22%3A%2210%22%7D%7D&gco_vAxes=%5B%7B%22useFormatFromData%22%3Atrue%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%2C+%22viewWindow%22%3Anull%2C+%22viewWindowMode%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%7D%5D&gco_legend=bottom&gco_title=test+mit+fusiontables+von+google&gco_fontName=Arial+Narrow&gco_titleTextStyle=%7B%22color%22%3A%22%23666666%22%2C+%22fontSize%22%3A%2220%22%2C+%22bold%22%3Atrue%7D&gco_legendTextStyle=%7B%22color%22%3A%22%23434343%22%2C+%22fontSize%22%3A%2210%22%7D&gco_backgroundColor=%7B%22fill%22%3A%22%23f3f3f3%22%7D&att=true&width=1000&height=585

*/