class Ingredient{
    constructor(_nombre, _costo, _packageContent){
        this.Name = _nombre;
        this.Cost = _costo;
        this.PackageContent = _packageContent;
    }

    CalculatePortionCost(_portion){
        let percentageExpressedInDecimal = _portion / this.PackageContent;
        return this.Cost * percentageExpressedInDecimal;
    }
}

export default Ingredient;