﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server_loogikaskeem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NOTloogikaController : ControllerBase
    {
        [HttpGet("not_operatsioon/{bool_1}")]
        public bool not_operatsioon(bool bool_1)
        {
            

            if (bool_1 == true)
            {
                bool answer = false;
                return answer;
            }
            else if (bool_1 == false)
            {
                bool answer = true;
                return answer;
            }
            
            return false;
        }
    }
}
