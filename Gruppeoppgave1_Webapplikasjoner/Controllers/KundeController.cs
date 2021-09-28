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

        public List<Kunde> HentAlle()
        {
            List<Kunde> alleKundene = _kundeDB.Kunder.ToList();
            return alleKundene;
        }

        public bool Lagre(Kunde innKunde)
        {
            try
            {
                _kundeDB.Kunder.Add(innKunde);
                _kundeDB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
           
            
        }
        
    }
}
