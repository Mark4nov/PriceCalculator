class Recipe{
    constructor(_name, _volume){
        this.Name = _name;
        this.Ingredients = [];
        this.Volume = _volume;
    }

    AddIngredient(_ingredient, _portionUsed){
        this.Ingredients.push([_ingredient, _portionUsed]);
    }

    CalculatePortionCost(_portion){
        let percentageExpressedInDecimal = _portion / this.Volume;
        return this.GetTotalCost() * percentageExpressedInDecimal;
    }

    
    GetTotalCost(){
        let totalCost = 0;
        this.Ingredients.forEach(ingredient => {
            let [ _ingredient, portionUsed ] = ingredient;
            totalCost += _ingredient.CalculatePortionCost(portionUsed);
       });
       return totalCost;
    }
}
export default Recipe;