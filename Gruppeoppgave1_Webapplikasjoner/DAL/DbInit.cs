using System;
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

                context.SaveChanges();
            }
        }
    }
}
