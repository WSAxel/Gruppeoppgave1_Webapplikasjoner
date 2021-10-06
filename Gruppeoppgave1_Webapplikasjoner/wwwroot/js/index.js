function prisKalkulering() {
    let antallVoksne = $("#antallVoksne").val();
    let antallBarn = $("#antallBarn").val();
    let sumVoksne = antallVoksne * 1000;
    let sumBarn = antallBarn * 300;
    let sum = sumVoksne + sumBarn;
    console.log(sumVoksne + " " + sumBarn + " " + sum);
    let ut = "<tr>" +
        "<td>" + "Prisen for alle voksne er " + sumVoksne + "</td>" +
        "<td>" + "Prisen for alle barn er " + sumBarn + "</td>" +
        "<td>" + "Full pris blir " + sum + "</td>" +
        "</tr>";

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
        poststed: $("#poststed").val()
    }
    const url = "Kunde/SettInn";
    $.post(url, billett, function (OK) {
        if (OK) {
            //   window.location.href = "betal.html";
            console.log("fungerer, info lagres");
        }
        else {
            alert("Feil i db, prøv igjen senere");
        }
    });

};

function validerOgKjøp() {
    const kortnummerOK = validerKortnummer($("#kortnummer").val());
    const kortnavnOK = validerKortnavn($("#kortNavn").val());
    // const ccv2OK = validerCcv2($("#ccv2").val());
    const utløpsdatoOK = validerUtløpsDato($("#utløpsDato").val());
    if (kortnummerOK && kortnavnOK && utløpsdatoOK) {
        visKvittering();
        document.getElementById("visKvittering").style.display = "block";
        document.getElementById("second").style.display = "none";

    }
}


function visKvittering() {
    const id = window.location.search.substring(1);
    $.get("Kunde/HentEn?" + id, function (billett) {

    });
}

function formaterKunder(billett) {

    $("#visKvittering").html(ut);
}