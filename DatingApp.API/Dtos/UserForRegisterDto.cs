using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string  Username { get; set; }
        
        [Required]
        [StringLength(20,MinimumLength = 4,ErrorMessage = "長度大於4小於20")]
        public string Password { get; set; }
    }
}