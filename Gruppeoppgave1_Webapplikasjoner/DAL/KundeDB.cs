using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.EntityFrameworkCore;

namespace Gruppeoppgave1_Webapplikasjoner.Models
{
    public class Kunder
    {
        [Key]
        public int KId { get; set; }
        public string Fornavn { get; set; }
        public string Etternavn { get; set; }
        public string Adresse { get; set; }
        public string Telefonnr { get; set; }
        public string Mail { get; set; }

        virtual public Bestillinger Bestilling { get; set; }
        virtual public Poststeder Poststed { get; set; }

    }

    public class Bestillinger
    {
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.None)] //denne sørger for at tabellen ikke gir autoincrement id
        public int BId { get; set; }
        public int AntallBarn { get; set; }
        public int AntallVoksne { get; set; }
        public DateTime Avreise { get; set; }
        public string Rute { get; set; }
        public string Tid { get; set; }
    }

    public class Poststeder
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Postnr { get; set; }
        public string Poststed { get; set; }

    }

    public class Brukere
    {
        public int Id { get; set; }
        public string Brukernavn { get; set; }
        public byte[] Passord { get; set; }
        public byte[] Salt { get; set; }
    }
}

public class KundeDB : DbContext 
                
{
    public KundeDB (DbContextOptions<KundeDB> options) : base(options)
    {
        Database.EnsureCreated();
    }


    public DbSet<Kunder> Kunder { get; set; }
    public DbSet<Bestillinger> Bestillinger { get; set; }
    public DbSet<Poststeder> Poststeder { get; set; }
    public DbSet<Brukere> Brukere { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseLazyLoadingProxies();
    }
}   
