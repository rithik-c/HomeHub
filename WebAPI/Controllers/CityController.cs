using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork uow;

        public CityController(IUnitOfWork uow)
        {
            this.uow = uow;
        }


        // Get api/city
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities = await uow.CityRepository.GetCitiesAsync();
            return Ok(cities);
        }


        // // TWO OTHER WAYS TO ADD CITIES
        // // Post api/city/add?cityname=Miami
        // [HttpPost("add")]
        // public async Task<IActionResult> AddCityFromParam(string cityName)
        // {
        //     City city = new City();
        //     city.Name = cityName;
        //     await dc.Cities!.AddAsync(city);
        //     await dc.SaveChangesAsync();

        //     return Ok(city);
        // }


        // [HttpPost("add/{cityName}")]
        // public async Task<IActionResult> AddCities(string cityName)
        // {
        //     City city = new City();
        //     city.Name = cityName;
        //     await dc.Cities!.AddAsync(city);
        //     await dc.SaveChangesAsync();

        //     return Ok(city);
        // }
        

        // Post api/city/post --Post the data in JSON Format
        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city)
        {
            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();

            return StatusCode(201);
        }


        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();

            return Ok(id);
        }
    }
}
