using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server_loogikaskeem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ANDloogikaController : ControllerBase
    {
        [HttpGet("and_operatsioon/{bool_1}/{bool_2}")]
        public bool and_operatsioon(bool bool_1, bool bool_2)
        {

            
            if (bool_1 == true && bool_2 == true)
            {
                bool answer = true;
                return answer;
            }
            else if (bool_1 == false || bool_2 == false)
            {
                bool answer = false;
                return answer;
            }
            return false;
        }
    }
}
