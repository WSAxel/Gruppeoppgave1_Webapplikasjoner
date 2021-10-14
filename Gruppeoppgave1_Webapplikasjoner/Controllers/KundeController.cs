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

        public async Task<ActionResult> SettInn(Billett bestiltBillett)
        {
         
            bool returOK =  await _db.SettInn(bestiltBillett);
            if (!returOK)
            {
                _log.LogInformation("Billetten ble ikke bestilt");
                return BadRequest("Bilett ble ikke lagret, noe gikk galt - Prøv igjen senere");
            }
            _log.LogInformation("billett Info: " + "Navn - " + bestiltBillett.Fornavn + " " + bestiltBillett.Etternavn +
                                "Adresse, postnr/poststed " + bestiltBillett.Adresse + " " + bestiltBillett.Postnr +
                                "/" + bestiltBillett.Poststed + ", Reise(fra-til) " + bestiltBillett.Rute + ", Dato - tid: " +
                                bestiltBillett.Avreise +" "+ bestiltBillett.Tid + " Antall voksne " + bestiltBillett.AntallVoksne + " Antall Barn " +
                                bestiltBillett.AntallBarn);

            return Ok("Billett lagret! God Tur!");
        }

        public async Task<ActionResult> HentAlle()
        {
            List<Billett> alleBilletter = await _db.HentAlle();
            return Ok(alleBilletter);
        }

        public async Task<ActionResult> HentEn(int id)
        {
            Billett enBillett = await _db.HentEn(id);
            if(enBillett == null)
            {
                _log.LogInformation("Billettemb le ikke hentet/fummet - Prøv igjen");
                return NotFound("Billetten ble ikke funnet");
            }
            return Ok("Billetten hentet");
        }

        public async Task<ActionResult> LoggInn(Bruker bruker)
        {
            if (ModelState.IsValid)
            {
                bool returnOK = await _db.LoggInn(bruker);
                if (!returnOK)
                {
                    _log.LogInformation("Innlogging feilet" + bruker.Brukernavn);
                    return Ok(false);
                }
                return Ok(true);
            }
            _log.LogInformation("Feil i input");
            return BadRequest("feil i input - server");
        }
    }
}
