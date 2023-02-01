using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class CityRepository : ICityRepository
    {
        // Fields
        private readonly DataContext dc;

        // Constructor
        public CityRepository(DataContext dc)
        {
            this.dc = dc;
        }

        // Interface Method Implementation
        public void AddCity(City city)
        {
            dc.Cities!.AddAsync(city);
        }

        public void DeleteCity(int cityId)
        {
            var city = dc.Cities!.Find(cityId);
            dc.Cities.Remove(city!);
        }

        public async Task<IEnumerable<City>> GetCitiesAsync()
        {
            return await dc.Cities!.ToListAsync();
        }

        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}