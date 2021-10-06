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
           /* _log.LogInformation("billett Info: " +
                "Navn - " + bestiltBillett.Fornavn + " " + bestiltBillett.Etternavn +
                "Adresse, postnr/poststed " + bestiltBillett.Adresse + " " + bestiltBillett.Postnr + "/" + bestiltBillett.Poststed +
                "Reise fra/til " + bestiltBillett.Rute + " tid: " + bestiltBillett.Tid + " Antall voksne " + bestiltBillett.AntallVoksne + " Antall Barn " + bestiltBillett.AntallBarn); */
            bool returOK =  await _db.SettInn(bestiltBillett);
            if (!returOK)
            {
                _log.LogInformation("Billetten ble ikke bestilt");
                return BadRequest("Bilett ble ikke lagret, noe gikk galt - Prøv igjen senere");
            }
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
    }
}
