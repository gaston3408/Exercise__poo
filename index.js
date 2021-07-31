const DataDefault = require('./Generators/DataDefault');
const VehiclesHandler = require('./Handlers/VehiclesHandler');

// default vehicles list 
const dataDefault = new DataDefault();
const vehicles = dataDefault.handle();

// show by console.
const vehiclesHandler = new VehiclesHandler( vehicles );
vehiclesHandler.showData()
vehiclesHandler.showSeparator()
vehiclesHandler.showDataAndTextByIndex(0, 'Vehículo más caro')
vehiclesHandler.showDataAndTextByIndex(vehicles.length -1, 'Vehículo más barato')
vehiclesHandler.showDataByLetter('y')
vehiclesHandler.showSeparator()
vehiclesHandler.showNamesByOrder()