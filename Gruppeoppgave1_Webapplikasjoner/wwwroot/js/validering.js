//ALLE REGEXENE MÅ TESTES.
function validerFornavn(fornavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if (!ok) {
        $("#feilFornavn").html("Fornavnet må bestå av 2 til 20 bokstaver");
        return true;
    }
    else {
        $("#feilFornavn").html("");
        return true;
    }
}
function validerTlf(telefon) {
    const regexp = /^(?:\+?\d{2}[ -]?\d{3}[ -]?\d{5}|\d{4})$/;
    const ok = regexp.test(telefon);
    if (!ok) {
        $("#feilTlf").html("Nummeret for telefon er feil, landskode må være med");
        return true;
    }
    else {
        $("#feilTlf").html("");
        return true;
    }
}
function validerDato(reiseDato) {
    const regexp = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
    const ok = regexp.test(reiseDato);
    if (!ok) {
        $("#feilDato").html("Dato er feil prøv med DD/MM/YYYY eller DD-MM-YYYY");
        return true;
    }
    else {
        $("feilDato").html("");
        return true;
    }
}
function validerEtternavn(etternavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    const ok = regexp.test(etternavn);
    if (!ok) {
        $("#feilEtternavn").html("Etternavnet må bestå av 2 til 20 bokstaver");
        return true;
    }
    else {
        $("#feilEtternavn").html("");
        return true;
    }
}
function validerEpost(epost) {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ok = regexp.test(epost);
    if (!ok) {
        $("#feilEpost").html("E-post er feil, prøv igjen.")
        return true;
    }
    else {
        $("#feilEpost").html("");
        return true;
    }
}
function validerAdresse(adresse) {
    var regexp = /^[0-9a-zA-ZæøåÆØÅ\ \.\-]{2,50}$/;
    var ok = regexp.test(adresse);
    if (!ok) {
        $("#feilAdresse").html("Adressen må bestå av 2 til 50 bokstaver og tall");
        return false;
    }
    else {
        $("#feilAdresse").html("");
        return true;
    }
}
