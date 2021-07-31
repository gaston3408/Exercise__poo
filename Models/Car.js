const  Vehicles  = require('./Vehicles');
class Car extends Vehicles
{
    constructor( marca, modelo, precio, type, puertas)
    {
        super(marca, modelo, precio, type)
        this.puertas = puertas;
    }

    getPuertas()
    {
        return this.puertas;
    }
}

module.exports =  Car ;