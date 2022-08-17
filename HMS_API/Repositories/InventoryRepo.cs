using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public class InventoryRepo : IInventory
    {
        private HotelContext _context;

        public InventoryRepo(HotelContext context)
        {
            _context = context;
        }

        #region DeleteInventory 
        /// <summary>
        /// This method is to delete inventory details.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string DeleteInventory(int id)
        {
            string stcode = string.Empty;
            try
            {
                var inventory = _context.Inventoriess.Find(id);
                if (inventory != null)
                {
                    _context.Inventoriess.Remove(inventory);
                    _context.SaveChanges();
                    stcode = "200";
                }
                else
                {
                    stcode = "400";
                }
            }
            catch
            {
                stcode = "400";
            }
            return stcode;
        }
        #endregion

        #region GetAllInventories
        /// <summary>
        /// This method to read all inventory values.
        /// </summary>
        /// <returns></returns>
        public List<Inventory> GetAllInventories()
        {
            try
            {
                List<Inventory> inventory = _context.Inventoriess.ToList();
                return inventory;
            }
            catch
            {
                throw;
            }
        }
        #endregion

        #region GetInventoryById
        /// <summary>
        /// This method is to get inventory values by specific id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string GetInventoryById(int Id)
        {
            string stcode = string.Empty;
            try
            {
                Inventory? inv = _context.Inventoriess.Find(Id);
                if (inv != null)
                {

                    _context.SaveChanges();
                    stcode = "200";
                }
                else
                {
                    stcode = "400";
                }
            }
            catch (Exception e)
            {

                stcode = e.Message;
            }
            return stcode;
        }
        #endregion

        #region InsertInventory
        /// <summary>
        /// This method is to insert inventory details.
        /// </summary>
        /// <param name="inventory"></param>
        /// <returns></returns>
        public string InsertInventory(Inventory inventory)
        {
            string stcode = string.Empty;
            try
            {
                _context.Inventoriess.Add(inventory);
                _context.SaveChanges();
                stcode = "200";

            }
            catch (Exception e)
            {
                stcode = "400";
            }
            return stcode;
        }
        #endregion

        #region SaveInventory 
        /// <summary>
        /// This method is to save inventory details.
        /// </summary>
        /// <param name="inventory"></param>
        public void SaveInventory(Inventory inventory)
        {
            _context.SaveChanges();
        }
        #endregion

        #region UpdateInventory
        /// <summary>
        /// This method is to update inventory details.
        /// </summary>
        /// <param name="inventory"></param>
        /// <returns></returns>
        public string UpdateInventory(Inventory inventory)
        {
            string stcode = string.Empty;
            try
            {
                _context.Inventoriess.Update(inventory);
                _context.SaveChanges();
                stcode = "200";

            }
            catch (Exception e)
            {
                stcode = "400";
            }
            return stcode;
        }
        #endregion
    }
}
