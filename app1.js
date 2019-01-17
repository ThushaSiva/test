
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


/* $("#filename").change(function(e){
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
