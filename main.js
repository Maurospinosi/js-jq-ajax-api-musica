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

function albumMusica (resp){
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < resp.length; i++){
    var context = {
      "copertina" : resp[i].poster,
      "titolo" : resp[i].title,
      "autore" : resp[i].author,
      "genere" : resp[i].genre,
      "anno" : resp[i].year,
    };


    var html = template(context);
    $(".appeso").append(html);
  }
}
