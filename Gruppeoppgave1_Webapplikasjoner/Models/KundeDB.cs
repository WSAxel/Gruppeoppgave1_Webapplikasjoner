using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Gruppeoppgave1_Webapplikasjoner.Models
{
    public class KundeDB : DbContext 
                //Her skal "DbContext" bli samme farge som "KundeDB"
    {
        public KundeDB (DbContextOptions<KundeDB> options) : base(options)
            //"DbContextOptions" skal ogs? endre farge egentlig
        {
            Database.EnsureCreated();
        } //Hele denne skal endre farger

        public DbSet<Kunde> Kunder { get; set; }
    }
}