function validerOgKjøp() {
    const fornavnOK = validerFornavn($("#fornavn").val());
    const telefonOK = validerTlf($("#telefon").val());
    const datoOK = validerDato($("#reiseDato").val());
    const etternavnOK = validerEtternavn($("#etternavn").val());
    const epostOK = validerEpost($("#e-post").val());
    const adresseOK = validerAdresse($("#adresse").val());
    const poststedOK = validerPoststed($("#poststed").val());
    const postnrOK = validerPostnr($("#postnr").val());
    const kortnummerOK = validerKortnummer($("#kortnummer").val());
    const kortnavnOK = validerKortnavn($("#kortNavn").val());
    // const ccv2OK = validerCcv2($("#ccv2").val());
    const utløpsdatoOK = validerUtløpsDato($("#utløpsDato").val());
    if (fornavnOK && telefonOK && datoOK && etternavnOK && epostOK && adresseOK && poststedOK && postnrOK
        && kortnummerOK && kortnavnOK && utløpsdatoOK) {
        lagreBestilling();
        visKvittering();
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


function visKvittering() {
    const id = window.location.search.substring(1);
    $.get("Kunde/HentEn?" + id, function (billett) {
        formaterKunder(billett);
    })
    .fail(function () {
        alert("Feil med å hente billett")
    });
}

function formaterKunder(billett) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th><th>Adresse</th><th>Poststed</th><th>Postnr</th>" +
        "<th>AntallBarn</th><th>AntallVoksne</th><th>Rute</th><th>ReiseDato</th>" +
        "</tr>";
    for (let kunder of kunde) {
        ut += "<tr>" +
            "<td>" + kunder.fornavn + "</td" > +
            "<td>" + kunder.etternavn + "</td" > +
            "<td>" + kunder.telefonnr + "</td" > +
            "<td>" + kunder.mail + "</td" > +
            "<td>" + kunder.adresse + "</td" > +
            "<td>" + kunder.poststed + "</td" > +
            "<td>" + kunder.postnr + "</td" > +
            "<td>" + kunder.antallBarn + "</td" > +
            "<td>" + kunder.antallVoksne + "</td" > +
            "<td>" + kunder.rute + "</td" > +
            "<td>" + kunder.avreise + "</td" > +
            "</tr>";
    }
    ut += "</table>";
    console.log("Har formatert");
    window.location.href = "kvittering.html";
    console.log("formaterer");
    $("#visKvittering").html(ut);
    console.log("Ferdig formatert");
}