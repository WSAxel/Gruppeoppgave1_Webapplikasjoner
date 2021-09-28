function validerOgLagreBillett() {
    const fornavnOK = validerFornavn($("#fornavn").val());
    const telefonOK = validerTlf($("#telefon").val());
    const datoOK = validerDato($("#reiseDato").val());
    const etternavnOK = validerEtternavn($("#etternavn").val());
    const epostOK = validerEpost($("#e-post").val());
    const adresseOK = validerAdresse($("#adresse").val());
    if (fornavnOK && telefonOK && datoOK && etternavnOK && epostOK && adresseOK) {
        lagreBestilling();
    }
}

function lagreBestilling() {
    const billett = {
        rute: $("#reiserute").val(),
        fornavn: $("#fornavn").val(),
        telefon: $("#telefon").val(),
        dato: $("#reiseDato").val(),
        antallVoksne: $("#antallVoksne").val(),
        etternavn: $("#etternavn").val(),
        epost: $("#e-post").val(),
        adresse: $("#adresse").val(),
        antallBarn: $("#antallBarn").val()
    }
    const url = "Kunde/Lagre";
    $.post(url, billett, function (OK) {
        if (OK) {
            //window.location.href = "index.html"
            console.log("fungerer, info lagres");
        }
        else {
            alert("Feil i db, prøv igjen senere");
        }
    })
        .fail(function () {
            alert("Vil ikke kjøre post");
        }); 
};
