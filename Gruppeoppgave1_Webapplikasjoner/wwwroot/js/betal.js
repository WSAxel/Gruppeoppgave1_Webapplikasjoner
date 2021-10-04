function validerOgKjøp() {
    const kortnummerOK = validerKortnummer($("#kortnummer").val());
    const kortnavnOK = validerKortnavn($("#kortNavn").val());
    const ccv2OK = validerCcv2($("#ccv2").val());
    const utløpsdatoOK = validerUtløpsDato($("#utløpsDato").val());
    if (kortnummerOK && kortnavnOK && ccv2OK && utløpsdatoOK) {
        visKvittering();
    }
}

function visKvittering() {
    $.get("Kunde/hentAlle", function ())
}