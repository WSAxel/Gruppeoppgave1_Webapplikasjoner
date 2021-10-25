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

function LagreRute() {
    const rute = {
        id: $("#id").val(),
        tilFra: $("#rute").val()
    }
    const url = "Kunde/EndreRute";
    $.post(url, rute, function () {
        window.location.href = 'ruter.html'
    })
        .fail(function (feil) {
            if (feil.status == 401) {
                window.location.href = 'logginn.html';
            }
            else {
                $("#feil").html("feil på server");
            }
        });
}

function endreBestilling() {
    const billett = {
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

    const url = "Kunde/Endre";
    $.post(url, billett, function () {
        window.location.href = 'admin.html';
    })
        .fail(function () {
            $("#feil").html("feil på server");
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