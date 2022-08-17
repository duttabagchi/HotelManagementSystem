using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineHotelManagementAPI.Models
{
    public class Guest
    {
        [Key]
        [DataType("int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GuestId { get; set; }


        [DataType("varchar(25)")]
        public string Name { get; set; }


        [DataType("varchar(255)")]
        public string Address { get; set; }


        [DataType("varchar(10)")]
        public string PhnNumber { get; set; }


        [DataType("varchar(10)")]
        public string gender { get; set; }
    }
}
