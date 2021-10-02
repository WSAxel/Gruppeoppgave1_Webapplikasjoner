using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gruppeoppgave1_Webapplikasjoner.DAL;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gruppeoppgave1_Webapplikasjoner.Controllers
{
    [Route("[controller]/[action]")]
    public class KundeController : ControllerBase
    {
        private readonly IKundeRepository _db;

        public KundeController(IKundeRepository db)
        {
            _db = db;
        }

        public async Task<bool> SettInn(Billett bestiltBillett)
        {
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
