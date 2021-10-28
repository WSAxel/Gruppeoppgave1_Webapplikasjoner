using Gruppeoppgave1_Webapplikasjoner.Controllers;
using Gruppeoppgave1_Webapplikasjoner.DAL;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace XUnitTestProject1
{
    public class UnitTest1
    {

        [Fact]
        public async Task SettInnInnlogget()
        {

        }

        [Fact]
        public async Task SettInnIkkeInnlogget()
        {

        }





        [Fact]
        public async Task HentAlle()
        {
            //Arrange
            var kunde1 = new Billett
            {
                Id = 1,
                Fornavn = "Lars",
                Etternavn = "Larsen",
                Adresse = "Larsveien 69",
                Telefonnr = "12345678",
                Mail = "lars.larsen@gmail.com",
                Postnr = "1234",
                Poststed = "Larsnes",
                AntallBarn = 1,
                AntallVoksne = 2,
                Avreise = DateTime.Today,
                Rute = "Oslo-->kiel",
                Tid = "18.00"
            };
            var kunde2 = new Billett
            {
                Id = 2,
                Fornavn = "Axel",
                Etternavn = "Axelsen",
                Adresse = "Axelveien 420",
                Telefonnr = "01234567",
                Mail = "axel.axelsen@gmail.com",
                Postnr = "1235",
                Poststed = "Axelsnes",
                AntallBarn = 0,
                AntallVoksne = 1,
                Avreise = DateTime.Today,
                Rute = "Oslo-->kiel",
                Tid = "19.00"
            };

            var kunde3 = new Billett
            {
                Id = 3,
                Fornavn = "Sheima",
                Etternavn = "Sheimasen",
                Adresse = "Sheimaveien 123",
                Telefonnr = "10234567",
                Mail = "sheima.sheimasen@gmail.com",
                Postnr = "1244",
                Poststed = "Sheimanes",
                AntallBarn = 0,
                AntallVoksne = 2,
                Avreise = DateTime.Today,
                Rute = "Oslo-->kiel",
                Tid = "17.00"
            };

            var kunde4 = new Billett
            {
                Id = 4,
                Fornavn = "Markus",
                Etternavn = "Markussen",
                Adresse = "Markusveien 666",
                Telefonnr = "12045678",
                Mail = "markus.markussen@gmail.com",
                Postnr = "1334",
                Poststed = "Markusnes",
                AntallBarn = 0,
                AntallVoksne = 2,
                Avreise = DateTime.Today,
                Rute = "Oslo-->kiel",
                Tid = "20.00"

            };

            var kundeListe = new List<Billett>();
            kundeListe.Add(kunde1);
            kundeListe.Add(kunde2);
            kundeListe.Add(kunde3);
            kundeListe.Add(kunde4);

            var mock = new Mock<IKundeRepository>();
            mock.Setup(k => k.HentAlle()).ReturnsAsync(kundeListe);
            var kundeController = new KundeController(mock.Object, null); //skjønner ikke hva som er feil her...
            List<Billett> resultat = await kundeController.HentAlle();
            Assert.Equal<List<Billett>>(kundeListe, resultat);

        }

        [Fact]
        public async Task HentEnInnlogget()
        {
            var kunde = new Billett
            {
                Id = 1,
                Fornavn = "Lars",
                Etternavn = "Larsen",
                Adresse = "Larsveien 69",
                Telefonnr = "12345678",
                Mail = "lars.larsen@gmail.com",
                Postnr = "1234",
                Poststed = "Larsnes",
                AntallBarn = 1,
                AntallVoksne = 2,
                Avreise = DateTime.Today,
                Rute = "Oslo-->kiel",
                Tid = "18.00"
            };

            var mock = new Mock<IKundeRepository>();
            mock.Setup(k => k.HentEn(1)).ReturnsAsync(kunde);
            var kundeController = new KundeRepository(mock.Object);
            List<Billett> resultat = await IKundeRepository.HentEn(1);
            Assert.Equal<List<Billett>>(kunde, resultat);
        }

        [Fact]
        public async Task HentEnIkkeInnlogget()
        {

        }

        [Fact]
        public async Task LoggInn()
        {

        }

        [Fact]
        public async Task HentRuterInnlogget()
        {

        }

        [Fact]
        public async Task HentRuterIkkeInnlogget()
        {

        }

        [Fact]
        public async Task SlettInnlogget()
        {

        }
        [Fact]
        public async Task SlettIkkeInnlogget()
        {

        }
        [Fact]
        public async Task EndreInnlogget()
        {

        }

        [Fact]
        public async Task EndreIkkeInnlogget()
        {

        }

    }
}
