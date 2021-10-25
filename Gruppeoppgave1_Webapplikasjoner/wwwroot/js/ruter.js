$(function () {
    hentRuter();
    
});



function hentRuter() {
    $.get("Kunde/HentRuter", function (Ruter) {
        formaterRuter(Ruter);
    });
}


function formaterRuter(Ruter) {
    let ut = "<table class = 'table table-striped'>" +
        "<tr>" +
        "<th>Rute</th>" +
        "</tr>";
    for (let rute of Ruter) {
        ut += "<tr>" +

            "<td>" + rute.tilFra + "</td>" + "<td>" + rute.id + "</td>" +
           
            "<td> <a class='btn btn-primary' href='ruteEndre.html?id=" + rute.id + "'>Endre</a></td>" +
            "<td><button class='btn btn-danger' onclick='slettRute(" + rute.id + ")'>slett</button></td> " +
            "</tr>";
    }
    ut += "</table>";
    $("#ruter").html(ut);
}


/*function lagreRute() {
    const url = "kunde/SlettRute?id" + id;

}*/



function slettRute(id) {
    const url = "Kunde/SlettRute?id=" + id;

    $.get(url, function () {
        window.location.href = 'ruter.html';

    })
        .fail(function () {
            $("#feil").html("Feil på server - prøv igjen");
        });
}