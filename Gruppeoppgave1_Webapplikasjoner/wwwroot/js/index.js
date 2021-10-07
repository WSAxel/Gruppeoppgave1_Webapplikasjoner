﻿function prisKalkulering() {
    let antallVoksne = $("#antallVoksne").val();
    let antallBarn = $("#antallBarn").val();
    let sumVoksne = antallVoksne * 1000;
    let sumBarn = antallBarn * 300;
    let sum = sumVoksne + sumBarn;
    console.log(sumVoksne + " " + sumBarn + " " + sum);
    let ut = "Totalpris: " + sum + "kr";

    $("#pris").html(ut);
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
        lagreBestilling();
        document.getElementById("second").style.display = "block";
        document.getElementById("first").style.display = "none";
    }
}
billettList = [];
function lagreBestilling() {
    const billett = {
        rute: $("#reiserute").val(),
        fornavn: $("#fornavn").val(),
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
    }
    billettList.push(billett);
    const url = "Kunde/SettInn";
    $.post(url, billett, function (OK) {
            console.log("fungerer, info lagres");
    })
        .fail(function () {
            $("#feil").html("OBS noe gikk galt, feil på server - prøv igjen senere");
        }) ;

};

function validerOgKjøp() {
    const kortnummerOK = validerKortnummer($("#kortnummer").val());
    const kortnavnOK = validerKortnavn($("#kortNavn").val());
    // const ccv2OK = validerCcv2($("#ccv2").val());

    const utlopsdatoOK = validerUtlopsDato($("#utlopsDato").val());
    if (kortnummerOK && kortnavnOK && utlopsdatoOK) {
        visKvittering();
        document.getElementById("visKvittering").style.display = "block";
        document.getElementById("second").style.display = "none";
    }
}


function visKvittering() {
    let billettKvittering = $("#visKvittering");
    for (billett of billettList) {
        billettKvittering.append(formaterKunder(billett));
    }
   
}


function formaterKunder(billett) {
    let antallVoksne = $("#antallVoksne").val();
    let antallBarn = $("#antallBarn").val();
    let sumVoksne = antallVoksne * 1000;
    let sumBarn = antallBarn * 300;
    let sum = sumVoksne + sumBarn;

    return $(`
        <div class="visBillett">
            <h1> Her er billetten:</h1>
            <p> Billett for ${billett.fornavn} ${billett.etternavn}</p><br>
           <p> ${billett.adresse}, ${billett.postnr} ${billett.poststed}</p><br>
            <p> Antall Barn som reiser er ${billett.antallBarn} og antall voksne som reiser er ${billett.antallVoksne}</p><br>
            <p> Reiser til ${billett.rute}, dato: ${billett.avreise}, tid: ${billett.tid}</p><br>
<p> Totalpris ${sum} kr </p>
        </div>
`)

}