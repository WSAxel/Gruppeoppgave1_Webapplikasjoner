using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gruppeoppgave1_Webapplikasjoner.Controllers
{
    [Route("[controller]/[action]")]
    public class KundeController : ControllerBase
    {

        private readonly KundeDB _kundeDB;
       
        public KundeController(KundeDB kundeDb)
        {
            _kundeDB = kundeDb;
        }

        public async Task<bool> SettInn(Billett bestiltBillett)
        {
            try
            {
                var nyKundeRad = new Kunder();
                nyKundeRad.Fornavn = bestiltBillett.Fornavn;
                nyKundeRad.Etternavn = bestiltBillett.Etternavn;
                nyKundeRad.Adresse = bestiltBillett.Adresse;
                nyKundeRad.Telefonnr = bestiltBillett.Telefonnr;
                nyKundeRad.Mail = bestiltBillett.Mail;
                nyKundeRad.Postnr = bestiltBillett.Postnr;
                nyKundeRad.Poststed = bestiltBillett.Poststed;

                var nyBestillingsrad = new Bestillinger();
                nyBestillingsrad.AntallBarn = bestiltBillett.AntallBarn;
                nyBestillingsrad.AntallVoksne = bestiltBillett.AntallVoksne;
                nyBestillingsrad.Avreise = bestiltBillett.Avreise;
                nyBestillingsrad.Rute = bestiltBillett.Rute;

                nyKundeRad.Bestilling = nyBestillingsrad;

                _kundeDB.Kunder.Add(nyKundeRad);
                await _kundeDB.SaveChangesAsync();

                return true;


            }
            catch
            {
                return false;
            }
            /*
            var bestilling = new Bestilling()
            {
                AntallBarn = bestiltBillett.AntallBarn,
                AntallVoksne = bestiltBillett.AntallVoksne,
                Avreise = bestiltBillett.Avreise,
                Rute = bestiltBillett.Rute

            };

            Kunde funnetKunde = _kundeDB.Kunder.FirstOrDefault(k => k.Fornavn == bestiltBillett.Fornavn);

            if(funnetKunde == null) {
                //oprett kunde
                var kunde = new Kunde
                {
                    Fornavn = bestiltBillett.Fornavn,
                    Etternavn = bestiltBillett.Etternavn,
                    Telefonnr = bestiltBillett.Telefonnr,
                    Mail = bestiltBillett.Mail,
                    Adresse = bestiltBillett.Adresse,
                    Postnr = bestiltBillett.Postnr,
                    Poststed = bestiltBillett.Poststed
                };
                //legg bestilling inn i kunde
                kunde.Bestillinger = new List<Bestilling>();
                kunde.Bestillinger.Add(bestilling);
                _kundeDB.Kunder.Add(kunde);
                _kundeDB.SaveChanges();
            }
            else
            {
                funnetKunde.Bestillinger.Add(bestilling);
                _kundeDB.SaveChanges();
            }*/
        }

        public async Task<List<Billett>>HentAlle()
        {
            try
            {
                List<Billett> alleKunder = await _kundeDB.Kunder.Select(k => new Billett
                {
                    Id = k.KId,
                    Fornavn = k.Fornavn,
                    Etternavn = k.Etternavn,
                    Adresse = k.Adresse,
                    Telefonnr = k.Telefonnr,
                    Mail = k.Mail,
                    Postnr = k.Postnr,
                    Poststed = k.Poststed,
                    AntallBarn = k.Bestilling.AntallBarn,
                    AntallVoksne = k.Bestilling.AntallVoksne,
                    Avreise = k.Bestilling.Avreise,
                    Rute = k.Bestilling.Rute

                }).ToListAsync();

                return alleKunder;
            }
            catch
            {
                return null;
            }
           /* List<Kunder> alleKundene = _kundeDB.Kunder.ToList();

            List<Billett> alleBestillinger = new List<Billett>();
            foreach (var kunde in alleKundene)
            {
                foreach (var best in kunde.Bestilling)
                {
                    var enBestilling = new Billett
                    {
                        Fornavn = kunde.Fornavn,
                        Etternavn = kunde.Etternavn,
                        Telefonnr = kunde.Telefonnr,
                        Mail = kunde.Mail,
                        Adresse = kunde.Adresse,
                        Postnr = kunde.Postnr,
                        Poststed = kunde.Poststed,

                        AntallBarn = best.AntallBarn,
                        AntallVoksne = best.AntallVoksne,
                        Avreise = best.Avreise,
                        Rute = best.Rute

                    };
                    alleBestillinger.Add(enBestilling);
                }
            }
            return alleKundene;*/
        }

       
        public async Task<Billett> HentEn(int id)
        {
            try
            {


                Kunder enKunde = await _kundeDB.Kunder.FindAsync(id);
                var hentetKunde = new Billett()
                {
                    Id = enKunde.KId,
                    Fornavn = enKunde.Fornavn,
                    Etternavn = enKunde.Etternavn,
                    Adresse = enKunde.Adresse,
                    Telefonnr = enKunde.Telefonnr,
                    Mail = enKunde.Mail,
                    Postnr = enKunde.Postnr,
                    Poststed = enKunde.Poststed,
                    AntallBarn = enKunde.Bestilling.AntallBarn,
                    AntallVoksne = enKunde.Bestilling.AntallVoksne,
                    Avreise = enKunde.Bestilling.Avreise,
                    Rute = enKunde.Bestilling.Rute
                };
                return hentetKunde;
            }
            catch
            {
                return null;
            }
        }
    }
}
