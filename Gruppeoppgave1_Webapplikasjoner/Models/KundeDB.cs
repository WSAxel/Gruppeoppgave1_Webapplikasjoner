using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Gruppeoppgave1_Webapplikasjoner.Models
{
    public class KundeDB : DbContext 
                
    {
        public KundeDB (DbContextOptions<KundeDB> options) : base(options)
            
        {
            Database.EnsureCreated();
        } 

        public DbSet<Billett> Kunder { get; set; } // Tror dette blir riktig istedet for "Kunde". Vi har jo alle datapunktene under "Billett" ikke "kunde"..
    }
}