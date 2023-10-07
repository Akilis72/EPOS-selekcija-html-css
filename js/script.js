function proveriCenu(){
    let brojPosetilaca = document.getElementById("input_dropdown").value;
    let vodic = document.getElementById("input_radio1");
    let obilazak1 = document.getElementById("input_checkbox1");
    let obilazak2 = document.getElementById("input_checkbox2");

    let cena = 0;
    let result = "Cena za dati obilazak iznosi: ";


    if(obilazak1.checked == true){
        cena = cena + 300;
        if(vodic.checked == true){
            cena = cena + 100;
        }
    }

    if(obilazak2.checked == true){
        cena = cena + 400;
        if(vodic.checked == true){
            cena = cena + 100;
        }
    }

    cena = cena * brojPosetilaca;
    result = result + cena + " RSD";


    document.getElementById("p_cena").innerHTML = result;
};

function validacijaForme(){
    let ime = document.getElementById("input_ime").value;
    let prezime = document.getElementById("input_prezime").value;
    let brojPosetilaca = document.getElementById("input_dropdown").value;
    let vodic = document.getElementById("input_radio1");
    let obilazak1 = document.getElementById("input_checkbox1");
    let obilazak2 = document.getElementById("input_checkbox2");
    let datum = document.getElementById("input_date").value;

    let result = "";
    let signal = true;
    let sada = new Date();

    if(obilazak1.checked == true){
        obilazak1 = document.getElementById("input_checkbox1").value;
    }

    if(obilazak2.checked == true){
        obilazak2 = document.getElementById("input_checkbox2").value;
    }

    if(vodic.checked == true){
        vodic = document.getElementById("input_radio1").value;
    }
    else{
        vodic = document.getElementById("input_radio2").value;
    }


    if(ime == null || ime.length == 0){
        result = result + "Molimo Vas unesite ime\n";
        signal = false;
    }

    if(/[0-9]/.test(ime) == true){
        result = result + "Ime ne sme da sadrži brojeve\n";
        signal = false;
    }

    if(prezime == null || prezime.length == 0){
        result = result + "Molimo Vas unesite prezime\n";
        signal = false;
    }

    if(/[0-9]/.test(prezime) == true){
        result = result + "Prezime ne sme da sadrži brojeve\n";
        signal = false;
    }

    if(obilazak1 != "meki_sir" && obilazak2 != "tvrdi_sir"){
        result = result + "Morate da selektujete koju izložbu želite da obiđete\n";
        signal = false;
    }

    if(isNaN(Date.parse(datum))){
        result = result + "Morate da unesete datum posete\n";
        signal = false;
    }
    else if(Date.parse(datum) < sada){
        result = result + "Datum posete mora biti neki momenat u budućnosti.\n";
        signal = false;
    }

    if(signal == false){
        alert(result + "\nMolimo Vas pokušajte ponovo!");
        return false;
    }
    else{
        result = result + "Ime: " + ime + "\n";
        result = result + "Prezime: " + prezime + "\n";
        result = result + "Broj posetilaca: " + brojPosetilaca + "\n";
        result = result + "Vodic: " + vodic + "\n";
        

        if(obilazak1 == "meki_sir"){
            result = result + "Obilazak izložbe mekog sira: Da\n";
        }
        else{
            result = result + "Obilazak izložbe mekog sira: Ne\n";
        }

        if(obilazak2 == "tvrdi_sir"){
            result = result + "Obilazak izložbe tvrdog sira: Da\n";
        }
        else{
            result = result + "Obilazak izložbe tvrdog sira: Ne\n";
        }
        
        result = result + "Datum: " + datum + "\n";

        result = result + "\nPritisnite OK ako želite da potvrdite rezervaciju.";

        return confirm(result);
    }
};

$('#gugl_mape').on('click', function(){
    window.open('https://goo.gl/maps/VFk21Hs8ywcPJwke8');
});

function hamburger() {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }