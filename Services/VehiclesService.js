class VehiclesService 
{
    constructor( vehicles )
    {
        this.vehicles = vehicles
    }

    getSortVehiclesByPrice()
    {
        return this.vehicles.sort(( a, b )=> a.precio < b.precio );
    }

    getVehiclesByLetra( letra )
    {
        return this.vehicles.filter(vehicles => vehicles.marca.toLowerCase().indexOf(letra) >= 0);
    }

}

module.exports = VehiclesService;