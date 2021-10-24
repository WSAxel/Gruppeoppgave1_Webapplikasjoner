$(function () {
    hentRuter();
    const id = window.location.search.substring(1);

    const url = "Kunde/HentEn?" + id;
    $.get(url, function (billett) {
        $("#id").val(billett.id);
        $("#fornavn").val(billett.fornavn);
        $("#etternavn").val(billett.etternavn);
        $("#adresse").val(billett.adresse);
        $("#telefon").val(billett.telefonnr);
        $("#postnr").val(billett.postnr);
        $("#poststed").val(billett.poststed);
        $("#reiserute").val(billett.rute);
        $("#reiseDato").val(billett.avreise);
        $("#rutetider").val(billett.tid);
        $("#e-post").val(billett.mail);

    });
});



function hentRuter() {
    $.get("Kunde/HentRuter", function (Ruter) {
        formaterRuter(Ruter);
    });
}

function formaterRuter(Ruter) {
    let ut = "";
    for (let rute of Ruter) {
        ut += "<option id=" + rute.id + " value=" + rute.tilFra + ">" + rute.tilFra + "</option> ";
    }
    $("#reiserute").html(ut);
}


function validerOgLagreBillett() {
    const fornavnOK = validerFornavn($("#fornavn").val());
    const telefonOK = validerTlf($("#telefon").val());
    const datoOK = validerDato($("#reiseDato").val());
    const etternavnOK = validerEtternavn($("#etternavn").val());
    const epostOK = validerEpost($("#e-post").val());
    const adresseOK = validerAdresse($("#adresse").val());
    const poststedOK = validerPoststed($("#poststed").val());
    const postnrOK = validerPostnr($("#postnr").val());
    if (fornavnOK && telefonOK && datoOK && etternavnOK && epostOK && adresseOK && poststedOK && postnrOK) {

        endreBestilling();
    }
}

function endreBestilling() {
    const Billett = {
        id: $("#id").val(),
        fornavn: $("#fornavn").val(),
        rute: $("#reiserute").val(),
        telefonnr: $("#telefon").val(),
        avreise: $("#reiseDato").val(),
        antallVoksne: $("#antallVoksne").val(),
        etternavn: $("#etternavn").val(),
        mail: $("#e-post").val(),
        adresse: $("#adresse").val(),
        antallBarn: $("#antallBarn").val(),
        postnr: $("#postnr").val(),
        poststed: $("#poststed").val(),
        tid: $("#rutetider").val()
    };
    $.post("Kunde/Endre", Billett, function () {
        window.location.href = 'admin.html';
    })
    .fail(function () {
        $("#feil").html("feil på server");
    });
}