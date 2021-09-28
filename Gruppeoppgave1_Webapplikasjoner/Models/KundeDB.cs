using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.EntityFrameworkCore;

namespace Gruppeoppgave1_Webapplikasjoner.Models
{
    public class Kunde
    {
        [Key]
        public int KId { get; set; }
        public string Fornavn { get; set; }
        public string Etternavn { get; set; }
        public string Adresse { get; set; }
        public string Postnr { get; set; }
        public string Poststed { get; set; }
        public string Telefonnr { get; set; }
        public string Mail { get; set; }

        public virtual List<Bestilling> Bestillinger { get; set; }

    }

    public class Bestilling
    {
        [Key]
        public int BId { get; set; }
        public int AntallBarn { get; set; }
        public int AntallVoksne { get; set; }
        public string Avreise { get; set; }
    }

}
    public class KundeDB : DbContext 
                
    {
        public KundeDB (DbContextOptions<KundeDB> options) : base(options)
            
        {
            Database.EnsureCreated();
        } 

        public DbSet<Kunde> Kunder { get; set; }
        public DbSet<Bestilling> Bestillinger { get; set; }
}
