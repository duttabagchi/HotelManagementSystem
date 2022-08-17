using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Repositories;

namespace OnlineHotelManagementAPI.Service
{
    public class InventoryService : IInventory
    {
        private IInventory _IInventory;

        public InventoryService(IInventory iInventory)
        {
            _IInventory = iInventory;
        }

        public string DeleteInventory(int inventory)
        {
            return _IInventory.DeleteInventory(inventory);
        }

        public List<Inventory> GetAllInventories()
        {
            return _IInventory.GetAllInventories();
        }

        public string GetInventoryById(int Id)
        {
            return _IInventory.GetInventoryById(Id);
        }

        public string InsertInventory(Inventory inventory)
        {
            return _IInventory.InsertInventory(inventory);
        }

        public void SaveInventory(Inventory inventory)
        {
            _IInventory.SaveInventory(inventory);
        }

        public string UpdateInventory(Inventory inventory)
        {
            return _IInventory.UpdateInventory(inventory);
        }
    }
}
