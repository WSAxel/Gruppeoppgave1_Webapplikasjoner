//ALLE REGEXENE MÅ TESTES.

function validerFornavn(fornavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if (!ok) {
        $("#feilFornavn").html("Fornavnet må bestå av 2 til 20 bokstaver");
        return false;
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
        return false;
    }
    else {
        $("#feilTlf").html("");
        return true;
    }
}
function validerDato(reiseDato) {
   // const regexp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    // const regexp = ^(0[1-9]|[12][0-9]|3[01])[-/.];
    const regexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    const ok = regexp.test(reiseDato);
    if (!ok) {
        $("#feilDato").html("Dato er feil prøv med DD/MM/YYYY");
        return false;
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
        return false;
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
        return false;
    }
    else {
        $("#feilEpost").html("");
        return true;
    }
}
function validerAdresse(adresse) {
    const regexp = /^[0-9a-zA-ZæøåÆØÅ\ \.\-]{2,50}$/;
    const ok = regexp.test(adresse);
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
    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    //const regexp = /^[A - Za - zÆØÅæøå]{2,30}$/;
    const ok = regexp.test(poststed);
    if (!ok) {
        $("#feilPoststed").html("Poststed er feil");
        return false;
    }
    else {
        $("#feilPoststed").html("");
        return true;
    }
}
function validerPostnr(postnr) {
    const regexp = /^\d{4}$/;
    const ok = regexp.test(postnr);
    if (!ok) {
        $("#feilPostnr").html("Postnr er feil, må være 4 tegn");
        return false;
    }
    else {
        $("#feilPostnr").html("");
        return true;
    }
}
function validerKortnummer(kortnummer) {
    //denne regexen er for Visa

    // denne skal kanskje brukes senere: const regexp = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const regexp = /^[0-9]$/;
    const ok = regexp.test(kortnummer);
    if (!ok) {
        $("#feilKortnummer").html("Kortnummer er feil");
        return false;
    }
    else {
        $("#feilKortnummer").html("");
        return true;
    }
}
function validerKortnavn(kortNavn) {
    //Bare lagt til regex for å sjekke navn, sjekkes ikke mot det bruker skrev på forrige side.

    const regexp = /^[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$/;
    const ok = regexp.test(kortNavn);
    if (!ok) {
        $("#feilKortNavn").html("Navnet på kortet er feil");
        return false;
    }
    else {
        $("#feilKortNavn").html("");
        return true;
    }
}
function validerCcv2(ccv2) {
    const regexp = /^[0-9]{2,4}$/;
    const ok = regexp.test(ccv2);
    if (!ok) {
        $("#feilCcv2").html("ccv2 er feil, prøv igjen");
        return false;
    }
    else {
        $("#feilCcv2").html("");
        return true;
    }
}
function validerUtløpsDato(utløpsDato) {
    const regexp = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const ok = regexp.test(utløpsDato);
    if (!ok) {
        $("#feilUtløpsDato").html("Utløpsdato er feil, prøv igjen");
        return false;
    }
    else {
        $("#feilUtløpsDato").html("");
        return true;
    }
}