using System;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Gruppeoppgave1_Webapplikasjoner.DAL;

namespace Gruppeoppgave1_Webapplikasjoner.DAL
{
    public static class DBInit
    {
        public static void Initialize(IApplicationBuilder app)
        {

            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var db = serviceScope.ServiceProvider.GetService<KundeDB>();

                db.Database.EnsureCreated();
                db.Database.EnsureDeleted();

                var bruker = new Brukere();
                bruker.Brukernavn = "Admin";
                string passord = "Test11";
                byte[] salt = KundeRepository.LagSalt();
                byte[] hash = KundeRepository.LagHash(passord, salt);
                bruker.Passord = hash;
                bruker.Salt = salt;
            //  db.Brukere.Add(bruker);

                db.SaveChanges();

            }
                
        }
    }
}
