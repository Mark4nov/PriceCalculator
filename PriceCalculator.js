import Ingredient from "./Ingredients.js";
import Recipe from "./Recipes.js";
import Container from "./Containers.js";
import Product from "./Products.js";

//CREA LOS INGREDIENTES
                            //             Nombre,               Precio,    Contenido del empaque//
const LecheEnPolvo =               new Ingredient('Leche',                  3.5,        400); //gr
const LecheDeVaca =        new Ingredient('Leche de vaca',           1,        2000); //ml
const Mantequilla =         new Ingredient('Mantequilla',            5,          1000); //gr
const Azucar =              new Ingredient('Azucar',                 1.2,        1000); //gr
const LecheCondensada =     new Ingredient('Leche condensada',       1.5,        360); //gr
const EsenciaDeMantecado = new Ingredient('Esencia de mantecado',   0.5,          50); //ml
const Galletas_TapaAmarilla = new Ingredient('Galletas', 0.8, 12); //unidades
const Oreos = new Ingredient('Galletas OREOS', 1, 12); //unidades
const Cacao = new Ingredient('Cacao', 3.5, 250); //gr
const Mani = new Ingredient("Mani", 1.5, 100); //gr
const Huevos = new Ingredient('cartón de huevos', 5, 30) // unidades
const Chocolate_oscuro = new Ingredient('Chocolate oscuro', 4, 200) // gramos

const LecheEnPolvoLiquida = new Recipe('Leche en polvo liquida', 1050);
LecheEnPolvoLiquida.AddIngredient(LecheEnPolvo, 130);

const LecheCondensadaCasera = new Recipe('Leche condensada casera', 400);
LecheCondensadaCasera.AddIngredient(LecheDeVaca, 130);
LecheCondensadaCasera.AddIngredient(Azucar, 200);

const Nata = new Recipe('Nata', 480);
Nata.AddIngredient(LecheEnPolvoLiquida, 300);
Nata.AddIngredient(Mantequilla, 200);


                                //Ingrediente,        Cantidad a usar
const MantecadoSimple = new Recipe('Mantecado simple', 1080); 
MantecadoSimple.AddIngredient(Nata, Nata.Volume);
MantecadoSimple.AddIngredient(LecheCondensadaCasera, 400);
MantecadoSimple.AddIngredient(EsenciaDeMantecado, 2.5);

const MantecadoFrances = new Recipe('Mantecado a la francesa (con huevo)', 1080);
MantecadoFrances.AddIngredient(Nata, Nata.Volume);
MantecadoFrances.AddIngredient(Azucar, 150);
MantecadoFrances.AddIngredient(Huevos, 3);
MantecadoFrances.AddIngredient(LecheEnPolvoLiquida, 240);

const MantecadoEXTRATHICK = new Recipe('Mantecado a la francesa (con huevo) EXTRA', 1000);
MantecadoEXTRATHICK.AddIngredient(Nata, Nata.Volume);
MantecadoEXTRATHICK.AddIngredient(Azucar, 150);
MantecadoEXTRATHICK.AddIngredient(Huevos, 5);

const BaseDeChocolate = new Recipe('Base de chocolate', 1080);
BaseDeChocolate.AddIngredient(MantecadoFrances, MantecadoFrances.Volume);
BaseDeChocolate.AddIngredient(Cacao, 30);

const Caramelo = new Recipe('Carmelo', 450)
Caramelo.AddIngredient(Nata, 240);
Caramelo.AddIngredient(Azucar, 300);
Caramelo.AddIngredient(Mantequilla, 70)

console.log('-------------Costo de la base del mantecado-------------')
console.log(`Frances: ${MantecadoFrances.GetTotalCost()}`)
console.log(`Simple: ${MantecadoSimple.GetTotalCost()}`)
console.log(`THICK: ${MantecadoEXTRATHICK.GetTotalCost()}`)
console.log(`Carmelo: ${Caramelo.GetTotalCost()}`)
console.log('--------------------------------------------------------')


// BASE MANTECADO:
const Mezcla_TortaSuiza = new Recipe('Mezcla torta suiza', 1620); //Con aire: 2160, sin aire: 1620
Mezcla_TortaSuiza.AddIngredient(MantecadoFrances, MantecadoFrances.Volume)
Mezcla_TortaSuiza.AddIngredient(Galletas_TapaAmarilla, 12)
Mezcla_TortaSuiza.AddIngredient(Galletas_TapaAmarilla, 12)

const Mezcla_Oreo = new Recipe('Mezcla oreo', 1620);
Mezcla_Oreo.AddIngredient(MantecadoFrances, 1620)
Mezcla_Oreo.AddIngredient(Oreos, 12)
Mezcla_Oreo.AddIngredient(Oreos, 12)


// BASE CHOCOLATE:
const Mezcla_Chocogalleta = new Recipe('Mezcla de chocogalleta', 1620);
Mezcla_Chocogalleta.AddIngredient(BaseDeChocolate, BaseDeChocolate.Volume);
Mezcla_Chocogalleta.AddIngredient(Galletas_TapaAmarilla, 12)
Mezcla_Chocogalleta.AddIngredient(Galletas_TapaAmarilla, 12)

const Mezcla_ChocolateOscuro = new Recipe('Mezcla de chocolate oscuro', 1620);
Mezcla_ChocolateOscuro.AddIngredient(BaseDeChocolate, 1260);
Mezcla_ChocolateOscuro.AddIngredient(Chocolate_oscuro, 150);


//CREA LOS ENVASES
                                    //Nombre,   Capacidad, Costo, Costo de la etiqueta
const EnvaseMedianom = new Container('Envase 16oz', 460,      0.17,           0.0);//en este caso la unidad de meddia son ml.
const EnvaseChikito = new Container('Envase 7oz', 180,      0.08,           0.05); 
const EnvaseGrande = new Container('Envase 32oz', 920,      0.32,           0.0); 

//CREA LOS PRODUCTOS
                                //Nombre,          Receta base,     Contenedor,     Precio final.
const Helado_S_TortaSuiza = new Product('Helado tortasuiza PEQUEÑO', Mezcla_TortaSuiza,   EnvaseChikito,      0.85);
const Helado_S_chocogalleta = new Product('Helado choco-galleta PEQUEÑO',Mezcla_Chocogalleta,   EnvaseChikito,      0.85);
const Helado_S_ChocolateOscuro = new Product('Helado de chocolate oscuro PEQUEÑO', Mezcla_ChocolateOscuro, EnvaseChikito, 1);

Helado_S_TortaSuiza.PrintInfo();
Helado_S_chocogalleta.PrintInfo();
Helado_S_ChocolateOscuro.PrintInfo();