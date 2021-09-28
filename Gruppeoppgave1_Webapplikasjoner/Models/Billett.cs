﻿using System;
namespace Gruppeoppgave1_Webapplikasjoner.Models
{
    public class Billett
    {
        public int Id { get; set; }
        public string Fornavn { get; set; }
        public string Etternavn { get; set; }
        public string Telefonnr { get; set; }
        public string Mail { get; set; }
        public string Adresse { get; set; }
        public string Postnr { get; set; }
        public string Poststed { get; set; }

        public int AntallBarn { get; set; }
        public int AntallVoksne { get; set; }
        public string Avreise { get; set; }
    } 
}


