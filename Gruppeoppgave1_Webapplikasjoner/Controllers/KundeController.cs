using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gruppeoppgave1_Webapplikasjoner.DAL;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Gruppeoppgave1_Webapplikasjoner.Controllers
{
    [Route("[controller]/[action]")]
    public class KundeController : ControllerBase
    {
        private readonly IKundeRepository _db;

        private ILogger<KundeController> _log;

        public KundeController(IKundeRepository db, ILogger<KundeController> log)
        {
            _db = db;
            _log = log;
        }

        public async Task<bool> SettInn(Billett bestiltBillett)
        {
            _log.LogInformation("billett Info: " +
                "Navn - " + bestiltBillett.Fornavn + " " + bestiltBillett.Etternavn +
                "Adresse, postnr/poststed " + bestiltBillett.Adresse + " " + bestiltBillett.Postnr + "/" + bestiltBillett.Poststed +
                "Reise fra/til " + bestiltBillett.Rute + " tid: " + bestiltBillett.Tid + " Antall voksne " + bestiltBillett.AntallVoksne + " Antall Barn " + bestiltBillett.AntallBarn); ;
            return await _db.SettInn(bestiltBillett);
        }

        public async Task<List<Billett>> HentAlle()
        {
           
            return await _db.HentAlle();
        }

        public async Task<Billett> HentEn(int id)
        {
            return await _db.HentEn(id);
        }
    }
}
