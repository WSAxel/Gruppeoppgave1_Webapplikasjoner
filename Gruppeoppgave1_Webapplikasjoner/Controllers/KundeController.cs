using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gruppeoppgave1_Webapplikasjoner.DAL;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.AspNetCore.Http;
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

        private const string _loggetInn = "loggetInn";

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
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            List<Billett> alleBilletter = await _db.HentAlle();
            return Ok(alleBilletter);
        }
        public async Task<ActionResult> HentRuter()
        {
            
            List<Ruter> alleRuter = await _db.HentRuter();
            return Ok(alleRuter);
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
                    _log.LogInformation("innlogget feilet: " + bruker.Brukernavn);
                   HttpContext.Session.SetString(_loggetInn, "");
                    return Ok(false);
                }
                HttpContext.Session.SetString(_loggetInn, "LoggetInn");
                return Ok(true);

            }
            _log.LogInformation("feil i inputvalidering");
            return BadRequest("Feil i inputvaldiering - server");
        }

        public void LoggUt()
        {
            HttpContext.Session.SetString(_loggetInn, "");
        }


        public async Task<ActionResult> Slett(int id)
        {
            bool returOK = await _db.Slett(id);
            if (!returOK)
            {
                _log.LogInformation("Sletting av kunden ikke utført");
                return NotFound("Billetten ble ikke funnet");
            }
            return Ok("Billett slettet");
        }

        public async Task<ActionResult> SlettRute(int id)
        {
            bool returOK = await _db.SlettRute(id);
                if (!returOK)
                {
                    _log.LogInformation("slett av rute ikke utført");
                    return NotFound("rute ikke funnet");
                }
                return Ok("Billett slettet");
            
        }
        
        public async Task<ActionResult> Endre(Billett endreBillett)
        {
            bool returOK = await _db.Endre(endreBillett);
            if (!returOK)
            {
                _log.LogInformation("Endringene kunne ikke utføres");
                return NotFound("Endringer av bestilling ikke utført");
            }
            return Ok("Bestilling endret");
        }
        [HttpPost]
        public async Task<ActionResult> EndreRute(Ruter endreRute)
        {
          
                bool returOK = await _db.EndreRute(endreRute);
                if (!returOK)
                {
                    _log.LogInformation("Endringene kunne ikke utføres");
                    return NotFound("Endringer av rute ikke utført");
                }
                return Ok("Bestilling endret");
            
           
        }



    }

    
}
