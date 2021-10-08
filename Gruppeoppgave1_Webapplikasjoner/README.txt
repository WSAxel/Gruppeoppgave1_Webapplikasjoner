Prosjektoppgave for WebApp Del 1:

 - Applikasjon for bestilling av billetter.
For å bestille billetter til båtreise velger man rute, tid og dato, og derretter fyller man ut kundeinformasjonen og antall passasjerer som er med.
Ved å trykke på bestill knappen går man videre til betaling, og får etter det skrevet ut billetten/kvittering på siden.

Backend tok vi utgangspunkt i eksemplene i canvas og utvidet de til å kunne lage tre tabeller i databasen.
Vi har en kundetabell, bestillingstabell og en poststedstabell. I disse tabellene lagrer vi både informasjon om kunden og om billetten.

Validering for kortnummer:
for visa: 16 siffer, og starter med 4
for mastercard: 16 siffer og starter med 51-55

Sidene til "Reiser", "priser" og "MinSide" på navbaren kommer vi til å bruke i Del2