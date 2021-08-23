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
        let PercentageNeeded = (this.Container.Capacity / this.Recipe.Volume);
        return ((this.Recipe.GetTotalCost() * PercentageNeeded) + this.Container.TotalCost).toFixed(2);
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
            - Costo total: ${this.GetCostPerUnit() * this.GetMaxUnitsPerRecipe()}
            - Precio ${ this.Price }$
            - Ganancia bruta por producto: ${ this.GetProfitValue() }$ (${ this.GetProfitPercentage() } del costo)
            - Ganancia TOTAL: ${ this.GetProfitValue() * this.GetMaxUnitsPerRecipe() }`);
    }
}
export default Product;