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
    public class RateController : ControllerBase
    {
        private readonly RateService S_rate;
        private HotelContext _context;

        public RateController(RateService rate, HotelContext context)
        {
            S_rate = rate;
            _context = context;
        }

        #region InsertRate
        [HttpPost("InsertRate")]
        public IActionResult InsertRate(Rate rate)
        {
            return Ok(S_rate.InsertRate(rate));
        }
        #endregion

        #region UpdateRate
        [HttpPut("UpdateRate")]
        public IActionResult UpdateRate(Rate rate)
        {
            return Ok(S_rate.UpdateRate(rate));
        }
        #endregion

        #region DeleteRate
        [HttpDelete("DeleteRate")]
        public IActionResult DeleteRate(int Id)
        {
            return Ok(S_rate.DeleteRate(Id));
        }
        #endregion

        #region GetAllRate
        [HttpGet("GetAllRate")]
        public IActionResult GetAllRate()
        {
            return Ok(S_rate.GetAllRate());
        }
        #endregion

        #region GetRateById
        [HttpGet("GetRateById")]
        public IActionResult GetRateById(int id)
        {
            if (S_rate.GetRateById(id) == "200")
            {
                return Ok(_context.Rates.Find(id));
            }
            else
            {
                return Ok(new { message = "Not Found" });
            }
        }
        #endregion
    }
}
