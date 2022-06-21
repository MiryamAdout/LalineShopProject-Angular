using ProjectDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjectDB.Controllers
{
  [EnableCors("*","*","*")]
    public class RecipeController : ApiController
    {
        [HttpGet]
        public List<Recipe> GetallRecipe()
        {

            return DB.listRecipes;
        }

        [HttpGet]
        public Recipe GetRecByCo(int id)
        {
            
            foreach (Recipe rec in DB.listRecipes)
            {
                if (rec.codeRec == id)
                    return rec;
            }
            return null;
        }
        [HttpPost]
        public void PostRec([FromBody] Recipe rec)
        {
            rec.codeRec = DB.listRecipes.Count + 1;
            DB.listRecipes.Add(rec);
            Console.WriteLine("the recipe add is: " + rec.nameOfRe);
        }
        [HttpDelete]
        public  Recipe DeleteRec(int id)
        {
            Recipe r = DB.listRecipes.FirstOrDefault(re => re.codeRec == id);
            DB.listRecipes.Remove(r);
            return r;
        }
  
        [HttpPut]
        public void PutRec(int c, [FromBody] Recipe rec)
        {

            Recipe r = DB.listRecipes.FirstOrDefault(rr => rr.codeRec == c);
            if (r != null)
            {
                r.codeRec = rec.codeRec;
                r.nameOfRe = rec.nameOfRe;
                r.codeCateg = rec.codeCateg;
                r.timePreMinu = rec.timePreMinu;
                r.levelDif = rec.levelDif;
                r.dateAdd = rec.dateAdd;
                r.arrListComp = rec.arrListComp;
                r.arrPreparation = rec.arrPreparation;
                r.codeSomeEnPr = rec.codeSomeEnPr;
                r.picture = rec.picture;
            }
        }
    }
}
