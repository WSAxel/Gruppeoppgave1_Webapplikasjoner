function prisKalkulering() {
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
    const ccv2OK = validerCcv2($("#ccv2").val());

    const utlopsdatoOK = validerUtlopsDato($("#utlopsDato").val());
    if (kortnummerOK && kortnavnOK && utlopsdatoOK && ccv2OK) {
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
            <h1> Takk for bestilling! Nedenfor finner du billett info:</h1>
            <p> Navn:  ${billett.fornavn} ${billett.etternavn}<br>
             Adresse: ${billett.adresse}, ${billett.postnr} ${billett.poststed}<br>
            Telefonnr: ${billett.telefonnr}<br>
            E-Mail: ${billett.mail}<br>
            Antall voksne: ${billett.antallVoksne}<br>
            Antall Barn: ${billett.antallBarn}<br>
            Reiser til: ${billett.rute} <br>
            dato, tid:  ${billett.avreise}, ${billett.tid}<br>
            <div class="tPris">Totalpris: ${sum} kr</div> </p>

            <h5> Ha en fin tur :) </h5>
        </div>
`)

}