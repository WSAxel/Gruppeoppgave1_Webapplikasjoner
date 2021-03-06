$(function() {
    hentBilletter();
});

function hentBilletter() {
    $.get("Kunde/HentAlle", function (billetter) {
        formaterBilletter(billetter);
    })
    .fail(function (feil) {
            if (feil.status == 401) {
                window.location.href = 'logginn.html';
            }
            else {
                $("#feil").html("Feil på server");
            }
    });
}

function formaterBilletter(billetter) {
    let ut = "<table class = 'table table-striped'>" +
        "<tr>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Adresse</th><th>postnr</th><th>poststed</th><th>Rute</th><th>Avreise</th><th>Tid</th><th>AntallBarn</th><th>Antall voksne</th>" +
        "</tr>";
    for (let billett of billetter) {
        ut += "<tr>" +
            "<td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td>" +
            "<td>" + billett.telefonnr + "</td>" +
            "<td>" + billett.adresse + "</td>" +
            "<td>" + billett.postnr + "</td>" +
            "<td>" + billett.poststed + "</td>" +
            "<td>" + billett.rute + "</td>" +
            "<td>" + billett.avreise + "</td>" +
            "<td>" + billett.tid + "</td>" +
            "<td>" + billett.antallBarn + "</td>" +
            "<td>" + billett.antallVoksne + "</td>" +
            "<td> <a class='btn btn-primary' href='endre.html?id=" + billett.id + "'>Endre</a></td>" +
            "<td><button class='btn btn-danger' onclick='slettBestilling(" + billett.id + ")'>slett</button></td> " +
            "</tr>";
    }
    ut += "</table>";
    $("#billetter").html(ut);

}
function slettBestilling(id) {
    const url = "Kunde/Slett?id=" + id;

    $.get(url, function () {
        window.location.href = 'Admin.html';

    })
        .fail(function () {
            $("#feil").html("Feil på server - prøv igjen");
        });
}