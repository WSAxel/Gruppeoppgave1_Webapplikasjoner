using System;
using Gruppeoppgave1_Webapplikasjoner.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Gruppeoppgave1_Webapplikasjoner.DAL
{
    public static class DbInit
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<KundeDB>();

                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                var bruker = new Brukere();
                bruker.Brukernavn = "Admin";
                string passord = "Test11";
                byte[] salt = KundeRepository.LagSalt();
                byte[] hash = KundeRepository.LagHash(passord, salt);
                bruker.Passord = hash;
                bruker.Salt = salt;
                context.Brukere.Add(bruker);


                context.SaveChanges();
            }
        }
    }
}
