using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ServicesController(MyDbContext db)
        {
            _db = db;



        }

        [HttpGet]
        public IActionResult GetServices()
        {

            var services = _db.Services.ToList();
            return Ok(services);
        }
        
    }
}
