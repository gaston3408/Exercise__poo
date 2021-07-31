const Vehicles = require("./Vehicles");

class Motocicle extends Vehicles
{
    constructor(marca, modelo, precio, type, cilindradas)
    {
        super(marca, modelo, precio, type)
        this.cilindradas = cilindradas;
    }

    getCilindradas()
    {
        return this.cilindradas;
    }
}

module.exports = Motocicle;