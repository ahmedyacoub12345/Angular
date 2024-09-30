using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubServicesController : ControllerBase
    {
        private readonly MyDbContext _db;

        public SubServicesController(MyDbContext db)
        {
            _db = db;
        }





        [HttpGet("getSubSerBySerId/{serID}")]
        public IActionResult getSubSerBySerId(int serID)
        {
            if (serID <= 0) return BadRequest("invalid Id");

            var Sub = _db.SubServices.Where(a => a.ServiceId == serID).ToList();

            if (Sub == null) return NotFound("no subservice found");

            return Ok(Sub);
        }

        [HttpGet("GetSubServicesDetailsById/{id:int}")]
        public IActionResult GetDetails(int id)
        {
            var data = _db.SubServices.Find(id);
            return Ok(data);
        }
        //[HttpGet("getSubSerById/{subID}")]
        //public IActionResult getSubSerById(int subID)
        //{
        //    if (subID <= 0) return BadRequest("in valid id");

        //    var sub = _db.SubServices.FirstOrDefault(a => a.SubServiceId == subID);

        //    if (sub == null) return NotFound("no sub service found");

        //    return Ok(sub);
        //}

    }
}
