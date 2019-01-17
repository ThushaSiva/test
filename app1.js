/*
//this is the 1st way.
$(document).ready(function(){
    $('#upload').click(function(){

        var csv = $('#filename');
        var csvFile = csv[0].files[0];
        var ext = csv.val().split(".").pop().toLowerCase();

        if($.inArray(ext, ["csv"]) === -1){
            alert('upload csv');
            return false;
        }
        if(csvFile != undefined){
            reader = new FileReader();
            reader.onload = function(e){

                csvResult = e.target.result.split(/\r|\n|\r\n/);
                $('.csv').append(csvResult);
            }
            reader.readAsText(csvFile);
        }
    });
});
*/

$("#filename").change(function(e){
	var ext = $("#filename").val().split(".").pop().toLowerCase();

	if($.inArray(ext, ["csv"]) == -1) {
		alert('Upload CSV');
		return false;
	}

	if(e.target.files != undefined){
		var reader = new FileReader();
		reader.onload = function(e){
			csvResult = e.target.result.split(/\r|\n|\r\n/);
			$('.csv').append(csvResult);
		}
		reader.readAsText(e.target.files.item(0));
	}
});

var tabulate = function (data,columns) {
  var table = d3.select('body').append('table')
	var thead = table.append('thead')
	var tbody = table.append('tbody')

	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  .append('tr')

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['variable','aror','asd','maxdd']
  tabulate(data,columns)
})
