using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Service;

namespace OnlineHotelManagementAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GuestController : ControllerBase
    {
        private GuestService _guest;
        private HotelContext _context;

        public GuestController(GuestService guest, HotelContext context)
        {
            _guest = guest;
            _context = context;
        }

        #region InsertGuest
        [HttpPost("InsertGuest")]
        public IActionResult AddGuest(Guest guest)
        {
            return Ok(_guest.AddGuest(guest));
        }
        #endregion

        #region UpdateGuest
        [HttpPut("UpdateGuest")]
        public IActionResult UpdateGuest(Guest guest)
        {
            return Ok(_guest.UpdateGuest(guest));
        }
        #endregion

        #region DeleteGuest
        [HttpDelete("DeleteGuest")]
        public IActionResult RemoveGuest(int id)
        {
            return Ok(_guest.RemoveGuest(id));
        }
        #endregion

        #region GetGuestById
        [HttpGet("GetGuestById")]
        public IActionResult GetGuestById(int id)
        {
            if(_guest.GetById(id) == "200")
            {
                return Ok(_context.Guests.Find(id));
            }
            else
            {
                return Ok(new { message = "Not Found" });
            }       
        }
        #endregion

        #region GetAllGuests
        [HttpGet("GetAllGuests")]
        public IActionResult GetAllGuests()
        {
            return Ok(_guest.GetAll());
        }
        #endregion
    }
}
