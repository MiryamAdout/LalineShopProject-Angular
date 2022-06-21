using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectDB.Models
{
    public class Category
    {
        private int v1;
        private string v2;
        private string v3;

        public Category(int v1, string v2, string v3)
        {
            this.v1 = v1;
            this.v2 = v2;
            this.v3 = v3;
        }

        public int code { set; get; }
        public string name { set; get; }
        public string nituvIcon { set; get; }


    }
}