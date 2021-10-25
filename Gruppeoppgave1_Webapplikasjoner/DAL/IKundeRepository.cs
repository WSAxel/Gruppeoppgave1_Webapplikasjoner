using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Gruppeoppgave1_Webapplikasjoner.Models;

namespace Gruppeoppgave1_Webapplikasjoner.DAL
{
    public interface IKundeRepository
    {
        Task<bool> SettInn(Billett bestiltBillett);
        Task<List<Billett>> HentAlle();
        Task<Billett> HentEn(int id);
        Task<bool> LoggInn(Bruker bruker);
        Task<List<Ruter>> HentRuter();
        Task<bool> Slett(int id);
        Task<bool> SlettRute(int id);
        Task<bool> Endre(Billett endreBillett);
    }
}
