
class Ingredient{
    constructor(_nombre, _costo, _cantidad){
        this.Name = _nombre;
        this.Cost = _costo;
        this.PackageContent = _cantidad;
    }

    CalculatePortionCost(_portion){
        let percentageExpressedInDecimal = _portion / this.PackageContent;
        return this.Cost * percentageExpressedInDecimal;
    }
}

class Recipe{
    constructor(_name, _volume){
        this.Name = _name;
        this.Ingredients = [];
        this.Volume = _volume;
    }

    AddIngredient(_ingredient, _portionUsed){
        this.Ingredients.push([_ingredient, _portionUsed]);
    }
    
    GetCost(){
        let totalCost = 0;
        this.Ingredients.forEach(ingredient => {
            let [ _ingredient, portionUsed ] = ingredient;
            totalCost += _ingredient.CalculatePortionCost(portionUsed);
       });
       return totalCost;
    }
}

class Container{
    constructor(_name, _capacity, _cost, _labelCost,){
        this.Name = _name;
        this.Capacity = _capacity;
        this.Cost = _cost;
        this.LabelCost = _labelCost;
        this.TotalCost = this.Cost + this.LabelCost;
    }
}

class Product{
    constructor(_name, _recipe, _container, _price){
        this.Name = _name;
        this.Recipe = _recipe;
        this.Container = _container;
        this.Price = _price;
    }
    
    GetMaxUnitsPerRecipe(){
        return Math.floor(this.Recipe.Volume / this.Container.Capacity);
    }

    GetCostPerUnit(){
        return ((this.Recipe.GetCost() * (this.Container.Capacity / this.Recipe.Volume)) + this.Container.TotalCost).toFixed(2);
    }

    GetProfitValue(){
        return (this.Price - this.GetCostPerUnit()).toFixed(2);
    }
    
    GetProfitPercentage(){
        return `${ ((( this.Price * 100) / this.GetCostPerUnit()) - 100).toFixed(2) }%`;
    }

    PrintInfo(){
        console.log(
            `${ this.Name }:
            - Cantidad de productos: ${ this.GetMaxUnitsPerRecipe() }
            - Costo por producto: ${ this.GetCostPerUnit() }$
            - Precio ${ this.Price }$
            - Ganancia bruta por producto: ${ this.GetProfitValue() }$ (${ this.GetProfitPercentage() } del costo)`);
    }
}

//CREA LOS INGREDIENTES
                            //             Nombre,               Precio,    Contenido del empaque//
const Leche =               new Ingredient('Leche',                  2.3,        400);
const Mantequilla =         new Ingredient('Mantequilla',            5,          1000);
const Azucar =              new Ingredient('Azucar',                 0.7,        1000);
const LecheCondensada =     new Ingredient('Leche condensada',       1.5,        360);
const EsenciaDeMantecado =  new Ingredient('Esencia de mantecado',   0.5,          50);
const Galletas =            new Ingredient('Galletas',               1,          24);
const CacaoNucita =         new Ingredient('Cacao Nucita',           4,          250);
const Harina =              new Ingredient('Harina De Trigo',        1,          1000);
const Aceite =              new Ingredient('Aceite',                 1.8,          900);
const Huevos =              new Ingredient('Huevos',                   0.37,        2);
const LecheLiquida =        new Ingredient('Leche Liquida',           0.6,          1000);
const Altunsa =        new Ingredient('Altunsa',           1.67,          350)
const Mani = new Ingredient("Mani", 1, 100);
//CREA LA RECETA
                                //Nombre,   Cantidad Resultante (unidad de medida debe coincidir con la capacidad del envase)
const HeladoMantecado = new Recipe('Helado',      1440);
const HeladoChocolate = new Recipe('Heladito de chocolate', 1100)
const Donas = new Recipe('Donitas Bonitas', 5040);

//AÑADE LOS INGREDIENTES A LA RECETA
                        //Ingrediente,        Cantidad a usar
HeladoMantecado.AddIngredient(Leche,                   60);
HeladoMantecado.AddIngredient(Mantequilla,            200);
HeladoMantecado.AddIngredient(LecheCondensada,        200);
HeladoMantecado.AddIngredient(EsenciaDeMantecado,     2.5);
HeladoMantecado.AddIngredient(Galletas,               16);

HeladoChocolate.AddIngredient(Leche, 50);
HeladoChocolate.AddIngredient(Mantequilla, 200);
HeladoChocolate.AddIngredient(Altunsa, 350);
//HeladoChocolate.AddIngredient(Mani, 80);


Donas.AddIngredient(LecheLiquida, 200);
Donas.AddIngredient(Azucar, 100);
Donas.AddIngredient(Aceite, 300);
Donas.AddIngredient(Harina, 710);
Donas.AddIngredient(Huevos, 2);




//CREA LOS ENVASES
                                    //Nombre,   Capacidad, Costo, Costo de la etiqueta
const EnvaseChikito = new Container('Envase 7oz', 180,      0.0,           0.0); //en este caso la unidad de meddia son ml.
const EnvaseGrande = new Container('Envase 24oz', 900,      0.20,           0.0);
const EnvaseMedianom = new Container('Envase 16oz', 540,      0.20,           0.0);

//CREA LOS PRODUCTOS
                                //Nombre,          Receta base,     Contenedor,     Precio final.
const HeladoMantecado_C = new Product('Helado tortasuiza Chikito',HeladoMantecado,   EnvaseChikito,      1);
const HeladoChocolate_C = new Product('Helado chocolate Chikito',HeladoChocolate,   EnvaseChikito,      1);
const HeladoWrande = new Product('Helado wrande',HeladoChocolate,     EnvaseGrande,       5);
const HeladoMedianom = new Product('Helado medianom',HeladoChocolate,     EnvaseMedianom,       3);

const Donitas = new Product('Donitas Bonitas', Donas, EnvaseChikito, 0.25);


HeladoMantecado_C.PrintInfo();
HeladoChocolate_C.PrintInfo();