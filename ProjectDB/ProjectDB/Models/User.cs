using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectDB.Models
{
    public class User
    {
        public int code { set; get; }
        public string name { set; get; }
        public string address { set; get; }
        public string mail { set; get; }
        public int password { set; get; }
   
    public User(int code, string name, string address, string mail, int password)
    {
        this.code = code;
        this.name = name;
        this.address = address;
        this.mail = mail;
        this.password = password;
    }
        public User()
        {

        }
 }
}