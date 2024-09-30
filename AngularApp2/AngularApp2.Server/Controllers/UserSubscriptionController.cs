using AngularApp2.Server.DTO;
using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubscriptionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UserSubscriptionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpPost]
        public IActionResult userSubscription([FromBody] userSubscriptionDTO userSubscriptionDTO) 
        {
            var subscription = _db.Subscriptions.Where( u=>u.SubscriptionId == userSubscriptionDTO.SubscriptionId).FirstOrDefault();
            var amount = subscription.SubscriptionAmount;
            var startDate = DateOnly.FromDateTime(DateTime.Now);
            DateOnly endDate = DateOnly.FromDateTime(DateTime.Now);
            switch (amount)
            {
                case ("9.99"):
                    startDate = startDate.AddDays(1); break;
                case ("19.99"):
                    endDate = endDate.AddMonths(3);break;
                case ("29.99"):
                    endDate = endDate.AddYears(1);break;
            }
            var userSubscription = new UserSubscription
            {
                
                SubscriptionId = subscription.SubscriptionId,
                SubServiceId = subscription.SubscriptionId,
                UserId = userSubscriptionDTO.UserId,
                EndDate = endDate,
                StartDate = startDate,

            }; 
            _db.UserSubscriptions.Add(userSubscription);
            _db.SaveChanges();
            return Ok(userSubscription);
        }
    }
}
