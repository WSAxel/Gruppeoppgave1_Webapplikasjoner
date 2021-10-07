using System;
using System.ComponentModel.DataAnnotations;

namespace Gruppeoppgave1_Webapplikasjoner.Models
{
    public class Billett
    {
        public int Id { get; set; }
        //[RegularExpression(@"[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$")]
        public string Fornavn { get; set; }
       // [RegularExpression(@"[a-zA-ZæøåÆØÅ\.\ \-]{2,20}$")]
        public string Etternavn { get; set; }
       // [RegularExpression(@"(?:\+?\d{2}[ -]?\d{3}[ -]?\d{ 5}|\d{ 4})$")]
        public string Telefonnr { get; set; }

        public string Mail { get; set; }
        public string Adresse { get; set; }
        public string Postnr { get; set; }
        public string Poststed { get; set; }

        public int AntallBarn { get; set; }
        public int AntallVoksne { get; set; }
        public DateTime Avreise { get; set; }
        public string Rute { get; set; }
        public string Tid { get; set; }
    } 
}


