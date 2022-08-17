using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineHotelManagementAPI.Models
{
    public class Payment
    {
        [Key]
        [DataType("int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentID { get; set; }


        [DataType("Varchar(30)")]
        public string CardholderName { get; set; }


        [DataType("varchar(16)")]
        public string CardNumber { get; set; }


        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }
}
