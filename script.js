var klik = 0;
var miejsca = [['', '', ''], ['', '', ''], ['', '', '']];

window.onload = function() {
    var wybor = prompt("Kto gra pierwszy(X czy O)? ");
    if(wybor == "X"){
        klik = 1;
    }
    else{
        klik = 0;
    }
    var pola = document.querySelectorAll(".pole");
    for (var i = 0; i < pola.length; i++) {
    // wywołanie clicka na polu
    pola[i].addEventListener("click", function(event) {
      // pobieranie id
      var j = event.target.id;
      // rozdzielenie id na kolumny i rzedy
      var [kolumna, rzad] = j.split('-').map(Number);
      if (miejsca[kolumna][rzad] === '') {
        klik += 1;
        // pobranie pola
        var pole = document.getElementById(j);
        // wybranie znaku zależnie od kliku
        if(klik%2==0){
            var znak = "X";
        }
        else{
            var znak = "O";
        }
        // zmiana zawartości pola
        pole.textContent = znak;
        miejsca[kolumna][rzad] = znak;
        sprawdz(miejsca);
      }
    });
  }
};

function sprawdz(miejsca) {
  // pion
  for (var kolumna = 0; kolumna < 3; kolumna++) {
    if (miejsca[kolumna][0] != '' && miejsca[kolumna][0] == miejsca[kolumna][1] && miejsca[kolumna][1] == miejsca[kolumna][2]) {
        var zwyciezca = miejsca[kolumna][0];
        alert("Wygrał: "+zwyciezca);
    }
  }
  // poziom
  for (var rzad = 0; rzad < 3; rzad++) {
    if (miejsca[0][rzad] != '' && miejsca[0][rzad] == miejsca[1][rzad] && miejsca[1][rzad] == miejsca[2][rzad]) {
        var zwyciezca = miejsca[0][rzad];
        alert("Wygrał: "+zwyciezca);
    }
  }
  // skos
  if (miejsca[0][0] != '' && miejsca[0][0] == miejsca[1][1] && miejsca[1][1] == miejsca[2][2]) {
    var zwyciezca = miejsca[0][0];
    alert("Wygrał: "+zwyciezca)
  }
  if (miejsca[0][2] != '' && miejsca[0][2] == miejsca[1][1] && miejsca[1][1] == miejsca[2][0]) {
    var zwyciezca = miejsca[0][2];
    alert("Wygrał: "+zwyciezca)
  }
  // brak to null
  return null;
}