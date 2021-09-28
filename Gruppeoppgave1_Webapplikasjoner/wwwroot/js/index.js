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
    const url = "Billett/Lagre";
    $.post(url, billett, function () {
        window.location.href = "index.html"
        console.log("fungerer, info lagres");
    })
        .fail(function () {
            alert("Feil i server, prøv igjen senere");
        });
};
