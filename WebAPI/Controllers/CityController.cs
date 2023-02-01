using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext dc;
        public CityController(DataContext dc)
        {
            this.dc = dc;
        }


        // Get api/city
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities = await dc.Cities!.ToListAsync();
            return Ok(cities);
        }


        // Post api/city/add?cityname=Miami
        [HttpPost("add")]
        public async Task<IActionResult> AddCityFromParam(string cityName)
        {
            City city = new City();
            city.Name = cityName;
            await dc.Cities!.AddAsync(city);
            await dc.SaveChangesAsync();

            return Ok(city);
        }


        [HttpPost("add/{cityName}")]
        public async Task<IActionResult> AddCities(string cityName)
        {
            City city = new City();
            city.Name = cityName;
            await dc.Cities!.AddAsync(city);
            await dc.SaveChangesAsync();

            return Ok(city);
        }
        

        [HttpPost("post")]
        public async Task<IActionResult> AddCities(City city)
        {
            await dc.Cities!.AddAsync(city);
            await dc.SaveChangesAsync();

            return Ok(city);
        }


        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            var city = await dc.Cities!.FindAsync(id);
            dc.Cities.Remove(city!);
            await dc.SaveChangesAsync();

            return Ok(id);
        }
    }
}
