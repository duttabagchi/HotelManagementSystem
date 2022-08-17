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
    public class InventoryController : ControllerBase
    {
        private readonly InventoryService S_inventory;

        private HotelContext _context;

        public InventoryController(InventoryService inventory, HotelContext context)
        {
            S_inventory = inventory;
            _context = context;
        }

        #region InsertInventory
        [HttpPost("InsertInventory")]
        public IActionResult InsertInventory(Inventory inventory)
        {
            return Ok(S_inventory.InsertInventory(inventory));
        }
        #endregion

        #region UpdateInventory
        [HttpPut("UpdateInventory")]
        public IActionResult UpdateInventory(Inventory inventory)
        {
            return Ok(S_inventory.UpdateInventory(inventory));
        }
        #endregion

        #region DeleteInventory
        [HttpDelete("DeleteInventory")]
        public IActionResult DeleteInventory(int Id)
        {
            return Ok(S_inventory.DeleteInventory(Id));
        }
        #endregion

        #region GetInventoryById
        [HttpGet("GetInventoryById")]
        public IActionResult GetInventoryById(int Id)
        {
            if (S_inventory.GetInventoryById(Id) == "200")
            {
                return Ok(_context.Inventoriess.Find(Id));
            }
            else
            {
                return Ok(new { message = "Not Found" });
            }
        }
        #endregion

        #region GetAllInventories
        [HttpGet("GetAllInventories")]
        public IActionResult GetAllInventories()
        {
            return Ok(S_inventory.GetAllInventories());
        }
        #endregion
    }
}
