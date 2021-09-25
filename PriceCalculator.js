import Ingredient from "./Ingredients.js";
import Recipe from "./Recipes.js";
import Container from "./Containers.js";
import Product from "./Products.js";

//CREA LOS INGREDIENTES
                            //             Nombre,               Precio,    Contenido del empaque//
const LecheEnPolvo =               new Ingredient('Leche',                  2.5,        400); //gr
const LecheDeVaca =        new Ingredient('Leche de vaca',           1,        2000); //ml
const Mantequilla =         new Ingredient('Mantequilla',            5,          1000); //gr
const Azucar =              new Ingredient('Azucar',                 0.7,        1000); //gr
const LecheCondensada =     new Ingredient('Leche condensada',       1.5,        360); //gr
const EsenciaDeMantecado = new Ingredient('Esencia de mantecado',   0.5,          50); //ml
const Galletas = new Ingredient('Galletas', 0.84, 24); //unidades
const Oreos = new Ingredient('Galletas OREOS', 0.7, 12); //unidades
const Cacao = new Ingredient('Cacao', 1, 100); //gr
const Altunsa = new Ingredient('Altunsa', 1.67, 350); //gr
const Mani = new Ingredient("Mani", 1, 100); //gr
const Arequipe = new Ingredient("Arequipe", 5.56, 500); //gr
const Cocosete = new Ingredient("Cocosete", 3, 200); //gr
const Brownies = new Ingredient('Brownies', 10, 10); //unidades

const LecheEnPolvoLiquida = new Recipe('Leche en polvo liquida', 1050);
LecheEnPolvoLiquida.AddIngredient(LecheEnPolvo, 130);

const Nata = new Recipe('Nata', 480);
Nata.AddIngredient(LecheDeVaca, 350);
Nata.AddIngredient(Mantequilla, 200);

const LecheCondensadaCasera = new Recipe('Leche condensada casera', 400);
LecheCondensadaCasera.AddIngredient(LecheDeVaca, 130);
LecheCondensadaCasera.AddIngredient(Azucar, 200);

const SiropeDeChocolate = new Recipe('Siropede de chocolate', 800)
SiropeDeChocolate.AddIngredient(Azucar, 300);
SiropeDeChocolate.AddIngredient(LecheLiquida, 2000);
SiropeDeChocolate.AddIngredient(BesitoDeChocolate, 200);

const MezclaDeMantecado = new Recipe('Mantecado', 1080); 
MezclaDeMantecado.AddIngredient(Nata, 480);
MezclaDeMantecado.AddIngredient(LecheCondensadaCasera, 400);
MezclaDeMantecado.AddIngredient(EsenciaDeMantecado, 2.5);

//CREA LA RECETA
                                //Nombre,   Cantidad Resultante (unidad de medida debe coincidir con la capacidad del envase)
const MezclaTortaSuiza = new Recipe('Mezcla torta suiza', 1400);
const MezclaMani = new Recipe('Mezcla mantecado con mani', 1400);
const MezclaChocolate = new Recipe('Mezcla de chocolate', 1400);


//AÑADE LOS INGREDIENTES A LA RECETA
                        //Ingrediente,        Cantidad a usar
MezclaTortaSuiza.AddIngredient(MezclaDeMantecado, 1080);
MezclaTortaSuiza.AddIngredient(Galletas,              12);

MezclaChocolate.AddIngredient(MezclaDeMantecado, 1080);
MezclaChocolate.AddIngredient(Cacao, 60);
MezclaChocolate.AddIngredient(SiropeDeChocolate, 30);

MezclaMani.AddIngredient(MezclaDeMantecado, 1080);
MezclaMani.AddIngredient(Mani,  100);



//CREA LOS ENVASES
                                    //Nombre,   Capacidad, Costo, Costo de la etiqueta
const EnvaseMedianom = new Container('Envase 16oz', 460,      0.17,           0.0);//en este caso la unidad de meddia son ml.
const EnvaseChikito = new Container('Envase 7oz', 180,      0.08,           0.0); 

//CREA LOS PRODUCTOS
                                //Nombre,          Receta base,     Contenedor,     Precio final.
const HeladoTortaSuiza = new Product('Helado tortasuiza',MezclaTortaSuiza,   EnvaseMedianom,      2);
const HeladoMani = new Product('Helado mani',MezclaMani,   EnvaseMedianom,      2);
const HeladoChocolate = new Product('Helado Chocolate',MezclaChocolate,   EnvaseMedianom,      2);


HeladoTortaSuiza.PrintInfo();
HeladoChocolate.PrintInfo();
HeladoMani.PrintInfo();