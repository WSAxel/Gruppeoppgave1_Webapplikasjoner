function loggInn() {
    const bruker = {
        brukernavn: $("#brukernavn").val(),
        passord: $("#passord").val()
    }
    $.post("Kunde/LoggInn", bruker, function (OK) {
        if (OK) {
            window.location.href = 'Admin.html';
        }
        else {
            $("#feil").html("Feil på server");
        }
    });
}