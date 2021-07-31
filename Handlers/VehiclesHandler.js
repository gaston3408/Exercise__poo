const DataDefault = require('../Generators/DataDefault');
const VehiclesService = require('../Services/VehiclesService');

class VehiclesHandler 
{
    constructor(data)
    {    
        this.dataDefault = new DataDefault();
        this.vehiclesService = new VehiclesService( data );
        this.dataSorted = this.vehiclesService.getSortVehiclesByPrice();
    }

    showData()
    {
        const data = this.dataDefault.handle();

        for (const item of data)
        { 
            const description = item.getType() === 1 ? 'Cilindradas' : 'Puertas'
            const descriptionValue = item.getType() === 1 ? item.getCilindradas() : item.getPuertas()
            console.log(`Marca: ${item.getMarca()} // Modelo: ${item.getModelo()} // ${description} : ${descriptionValue} // Precio: $${item.getPrecio()}`)
        }
    }

    showSeparator()
    {
        console.log("=====================================================================")
    }

    showNamesByOrder()
    {       
        for (const item of this.dataSorted)
        {
            console.log(`${item.getMarca()} ${item.getModelo()}`)
        }
    }

    showDataAndTextByIndex(index, text)
    {
        const marca = this.dataSorted[index].getMarca()
        const modelo = this.dataSorted[index].getModelo()

        console.log(`${text}: ${marca} ${modelo}`)
    }

    showDataByLetter(letter)
    {
        const items = this.vehiclesService.getVehiclesByLetra(letter);
        console.log(`Vehículo que contiene la letra '${letter}': ${items[0].getMarca()} ${items[0].getModelo()} $${items[0].getPrecio()}`)
    }

}

module.exports = VehiclesHandler;