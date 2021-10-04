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
    const regexp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    const ok = regexp.test(reiseDato);
    if (!ok) {
        $("#feilDato").html("Dato er feil prøv med DD/MM/YYYY");
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
function validerPoststed(poststed) {
    var regexp = /^ [A - Za - zÆØÅæøå\\s] + $/;
    var ok = regexp.test(poststed);
    if (!ok) {
        $("#feilPoststed").html("Poststed er feil");
        return true;
    }
    else {
        $("#feilPoststed").html("");
        return true;
    }
}
function validerPostnr(postnr) {
    var regexp = /^\\d{ 4}$/;
    var ok = regexp.test(postnr);
    if (!ok) {
        $("#feilPostnr").html("Postnr er feil, må være 4 tegn");
        return true;
    }
    else {
        $("#feilPostnr").html("");
        return true;
    }
}
function validerKortnummer(kortnummer) {
    //denne regexen er for Visa
    var regexp = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var ok = regexp.test(kortnummer);
    if (!ok) {
        $("#feilKortnummer").html("Kortnummer er feil");
        return true;
    }
    else {
        $("#feilKortnummer").html("");
        return true;
    }
}
function validerKortnavn(kortNavn) {
    //Bare lagt til regex for å sjekke navn, sjekkes ikke mot det bruker skrev på forrige side.
    var regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    var ok = regexp.test(kortNavn);
    if (!ok) {
        $("#feilKortNavn").html("Navnet på kortet er feil");
        return true;
    }
    else {
        $("#feilKortNavn").html("");
        return true;
    }
}
function validerCcv2(ccv2) {
    var regexp = /^[0-9]{2,4}$/;
    var ok = regexp.test(ccv2);
    if (!ok) {
        $("#feilCcv2").html("ccv2 er feil, prøv igjen");
        return true;
    }
    else {
        $("#feilCcv2").html("");
        return true;
    }
}
function validerUtløpsDato(utløpsDato) {
    var regexp = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    var ok = regexp.test(utløpsDato);
    if (!ok) {
        $("#feilUtløpsDato").html("Utløpsdato er feil, prøv igjen");
        return true;
    }
    else {
        $("#feilUtløpsDato").html("");
        return true;
    }
}