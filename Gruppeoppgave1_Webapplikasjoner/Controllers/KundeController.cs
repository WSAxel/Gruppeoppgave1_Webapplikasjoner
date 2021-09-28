using System;
using System.Collections.Generic;
using System.Linq;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.AspNetCore.Mvc;

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

        public void SettInn(Billett bestiltBillett)
        {
            var bestilling = new Bestilling()
            {
                AntallBarn = bestiltBillett.AntallBarn,
                AntallVoksne = bestiltBillett.AntallVoksne,
                Avreise = bestiltBillett.Avreise

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
            }
        }

        public List<Kunde> HentAlle()
        {
            List<Kunde> alleKundene = _kundeDB.Kunder.ToList();

            List<Billett> alleBestillinger = new List<Billett>();
            foreach (var kunde in alleKundene)
            {
                foreach (var best in kunde.Bestillinger)
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
                        Avreise = best.Avreise

                    };
                    alleBestillinger.Add(enBestilling);
                }
            }
            return alleKundene;
        }

       
        
    }
}
