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
    public class RoomController : ControllerBase
    {
        private RoomService _room;
        private HotelContext _context;
        public RoomController(RoomService room, HotelContext context)
        {
            _room = room;
            _context = context;
        }

        #region InsertRoom
        [HttpPost("InsertRoom")]
        public IActionResult AddRoom(Room room)
        {
            return Ok(_room.AddRoom(room));
        }
        #endregion

        #region UpdateRoom
        [HttpPut("UpdateRoom")]
        public IActionResult UpdateRoom(Room room)
        {
            return Ok(_room.UpdateRoom(room));
        }
        #endregion

        #region RemoveRoom
        [HttpDelete("RemoveRoom")]
        public IActionResult RemoveRoom(int id)
        {
            return Ok(_room.RemoveRoom(id));
        }
        #endregion

        #region GetRoomById
        [HttpGet("GetRoomById")]
        public IActionResult GetById(int id)
        {
            if (_room.GetById(id) == "200")
            {
                return Ok(_context.Rooms.Find(id));
            }
            else
            {
                return Ok(new { message = "Not Found" });
            }
        }
        #endregion

        #region GetAllRooms
        [HttpGet("GetAllRooms")]
        public IActionResult GetAllRooms()
        {
            return Ok(_room.GetAll());
        }
        #endregion
    }
}
