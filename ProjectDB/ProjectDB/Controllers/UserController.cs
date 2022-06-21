using ProjectDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjectDB.Controllers
{
    [EnableCors("*", "*", "*")]
    public class UserController : ApiController
    {
     
        // GET: api/User/5
        [HttpGet]
        public List<User> GetAllUser()
        {
            return DB.listUser;
        }
        [HttpGet]
        public User GetUserByCo(int id)
        {

            foreach (User use in DB.listUser)
            {
                if (use.password == id)
                    return use;
            }
            return null;
        }
        [HttpPost]
        public void PostAddUser([FromBody] User use)
        {
            use.code = DB.listUser.Count + 1;
            DB.listUser.Add(use);
            Console.WriteLine("the recipe add is: " + use.name);
        }
        [HttpDelete]
        public User DeleteUser(int id)
        {
            User r = DB.listUser.FirstOrDefault(re => re.code == id);
            DB.listUser.Remove(r);
            return r;
        }
    }
}
