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

            "<td>" + rute.tilFra + "</td>" + "<td class="+rute.id+">" + rute.id + "</td>" +
           
            "<td> <a class='btn btn-primary' href='ruteEndre.html?id=" + rute.id + "'>Endre</a></td>" +
            "<td><button class='btn btn-danger' onclick='slettRute(" + rute.id + ")'>slett</button></td> " +
            "</tr>";
    }
    ut += "</table>";
    $("#ruter").html(ut);
}

function GetUrl(url) {
    let a = url.split('?')[1].split("=")[1];
    console.log(a);
    return a;
}
function LagreRute() {
    const rute = {
        id: GetUrl(window.location.href),
        tilFra: $("#rute").val()
    };
    
    const url = "Kunde/EndreRute";
    $.post(url, rute, function (OK) {
        window.location.href = 'ruter.html'
        //console.log("ok");
    })
        .fail(function (feil) {
            console.log("feil: ", feil);
            if (feil.status == 401) {
                window.location.href = 'logginn.html';
            }
            else {
                $("#feil").html("feil på server");
            }
        });
}

function slettRute(id) {
    const url = "Kunde/SlettRute?id=" + id;

    $.get(url, function () {
        window.location.href = 'ruter.html';

    })
        .fail(function () {
            $("#feil").html("Feil på server - prøv igjen");
        });
}