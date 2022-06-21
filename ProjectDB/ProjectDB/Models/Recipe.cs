using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectDB.Models
{
    public class Recipe
    {
        public int codeRec { set; get; }
        public string nameOfRe { set; get; }
        public int codeCateg { set; get; }
        public int timePreMinu { set; get; }
        public int levelDif { set; get; }
        public DateTime dateAdd { set; get; }
        public string []arrListComp { set; get; }
        public string []arrPreparation { set; get; }
        public int codeSomeEnPr { set; get; }
        public string picture { set; get; }

        public Recipe(int codeRec, string nameOfRe, int codeCateg, int timePreMinu, int levelDif, DateTime dateAdd, string []arrListComp, string []arrPreparation, int codeSomeEnPr, string picture)
        {
            this.codeRec = codeRec;
            this.nameOfRe = nameOfRe;
            this.codeCateg = codeCateg;
            this.timePreMinu = timePreMinu;
            this.levelDif = levelDif;
            this.dateAdd = dateAdd;
            this.arrListComp = arrListComp;
            this.arrPreparation = arrPreparation;
            this.codeSomeEnPr = codeSomeEnPr;
            this.picture = picture;
        }
        public Recipe()
        {

        }
    }
}