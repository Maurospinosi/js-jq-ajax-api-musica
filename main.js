$(document).ready(function() {
  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {
        var resp = data.response;
        albumMusica(resp);
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    }
  );
});

// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.
$(".genere").change(function(){

  var valSelect = $(this).val();

  if(valSelect == " "){
    $(".cd").show();
  } else {
    $(".cd").hide();
    $(".cd[data-genere='"+ valSelect +"']").show();
  }

});

function albumMusica (resp){
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < resp.length; i++){
    var album = resp[i];

    var html = template(album);
    $(".cds-container").append(html);
  }
}
