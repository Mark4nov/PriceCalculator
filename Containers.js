class Container{
    constructor(_name, _capacity, _cost, _labelCost,){
        this.Name = _name;
        this.Capacity = _capacity;
        this.Cost = _cost;
        this.LabelCost = _labelCost;
        this.TotalCost = this.Cost + this.LabelCost;
    }
}

export default Container;