using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Gruppeoppgave1_Webapplikasjoner.DAL
{
    public class KundeRepository : IKundeRepository
    {
        private readonly KundeDB _kundeDB;


        public KundeRepository(KundeDB kundeDb)
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


                var nyBestillingsrad = new Bestillinger();
                nyBestillingsrad.AntallBarn = bestiltBillett.AntallBarn;
                nyBestillingsrad.AntallVoksne = bestiltBillett.AntallVoksne;
                nyBestillingsrad.Avreise = bestiltBillett.Avreise;
                nyBestillingsrad.Rute = bestiltBillett.Rute;
                nyBestillingsrad.Tid = bestiltBillett.Tid;

                nyKundeRad.Bestilling = nyBestillingsrad;

                var sjekkPoststed = await _kundeDB.Poststeder.FindAsync(bestiltBillett.Postnr);
                if (sjekkPoststed == null)
                {
                    var nyPoststedsRad = new Poststeder();
                    nyPoststedsRad.Postnr = bestiltBillett.Postnr;
                    nyPoststedsRad.Poststed = bestiltBillett.Poststed;
                    nyKundeRad.Poststed = nyPoststedsRad;

                }
                else
                {
                    nyKundeRad.Poststed = sjekkPoststed;
                }

                _kundeDB.Kunder.Add(nyKundeRad);
                await _kundeDB.SaveChangesAsync();

                return true;


            }
            catch
            {
                return false;
            }
           
        }

        public async Task<List<Billett>> HentAlle()
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
                    Postnr = k.Poststed.Postnr,
                    Poststed = k.Poststed.Poststed,
                    AntallBarn = k.Bestilling.AntallBarn,
                    AntallVoksne = k.Bestilling.AntallVoksne,
                    Avreise = k.Bestilling.Avreise,
                    Rute = k.Bestilling.Rute,
                    Tid = k.Bestilling.Tid

                }).ToListAsync();

                return alleKunder;
            }
            catch
            {
                return null;
            }
            
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
                    Postnr = enKunde.Poststed.Postnr,
                    Poststed = enKunde.Poststed.Poststed,
                    AntallBarn = enKunde.Bestilling.AntallBarn,
                    AntallVoksne = enKunde.Bestilling.AntallVoksne,
                    Avreise = enKunde.Bestilling.Avreise,
                    Rute = enKunde.Bestilling.Rute,
                    Tid = enKunde.Bestilling.Tid
                };
                return hentetKunde;
            }
            catch
            {
                return null;
            }
        }

        public static byte[] LagHash(string passord, byte[] salt)
        {
            return KeyDerivation.Pbkdf2(
                password: passord,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 1000,
                numBytesRequested: 32);
        }

        public static byte[] LagSalt()
        {
            var csp = new RNGCryptoServiceProvider();
            var salt = new byte[24];
            csp.GetBytes(salt);
            return salt;
        }

        public async Task<bool> LoggInn(Bruker bruker)
        {
            try
            {
                Brukere funnetBruker = await _kundeDB.Brukere.FirstOrDefaultAsync(b => b.Brukernavn == bruker.Brukernavn);
                byte[] hash = LagHash(bruker.Passord, funnetBruker.Salt);
                bool ok = hash.SequenceEqual(funnetBruker.Passord);

                if (ok)
                {
                    return true;
                }
                return false;
            }
            catch
            {
              
                return false;
            }
        }
    }
}

