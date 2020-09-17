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

  // Bonus:
  // Creare una select con i seguenti generi: pop, rock, metal e jazz.
  // In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.
  var arrayGeneri = ['Rock','Pop','Jaaz','Metal'],
  gen = document.getElementById('gen');

  for( generi in arrayGeneri) {
    gen.add( new Option(arrayGeneri[generi]));
  };

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
