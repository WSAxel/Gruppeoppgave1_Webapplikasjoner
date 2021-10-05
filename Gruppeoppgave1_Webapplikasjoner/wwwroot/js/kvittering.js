$(function () {
    hentAlleKunder();
});

function hentAlleKunder() {
    $.get("Kunde/HentEn", function (kunde) {
        formaterKunder(kunde);
    });
}

function formaterKunder(kunde) {
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
    $("#visKvittering").html(ut);
}