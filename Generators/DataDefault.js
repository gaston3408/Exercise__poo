const Car = require("../Models/Car");
const Motocicle = require("../Models/Motocicle");

class DataDefault 
{
    handle(){
        const vehicles = [];

        vehicles.push( new Car('Peugeot', '206', 200000, 0, 4) )
        vehicles.push( new Motocicle('Honda', 'Titan', 60000 ,1 , '125cc') )
        vehicles.push( new Car('Peugeot', '208', 250000, 0, 5) )
        vehicles.push( new Motocicle('Yamaha', 'YBR', 80500.50, 1, '160cc') )

        return vehicles;
    }
}

module.exports = DataDefault ;