using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public interface IInventory
    {
        List<Inventory> GetAllInventories();
        string GetInventoryById(int Id);
        string InsertInventory(Inventory inventory);
        string UpdateInventory(Inventory inventory);
        string DeleteInventory(int inventory);
        void SaveInventory(Inventory inventory);
    }
}
