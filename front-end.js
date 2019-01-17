// using jQuery
$("#2020data").submit(function(e) {

  $.ajax({
    url: "https://e0d92634.ngrok.io/test",
    type: "POST",
    data: new FormData(this),
    processData: false,
    contentType: false
  });

  return false;
});
