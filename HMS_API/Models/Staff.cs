using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineHotelManagementAPI.Models
{
    public class Staff
    {
        [Key]
        [DataType("int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StaffId { get; set; }


        [DataType("Varchar(30)")]
        public string StaffName { get; set; }


        [DataType("Varchar(255)")]
        public string Address { get; set; }


        [DataType("Nvarchar(20)")]
        public string NIC { get; set; }


        public double Salary { get; set; }


        public int Age { get; set; }


        public string Occupation { get; set; }


        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }
}
