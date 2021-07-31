class Vehicles 
{
    constructor( marca, modelo, precio, type)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.type = type;
    }

    getMarca()
    {
        return this.marca;
    }

    getModelo()
    {
        return this.modelo;
    }

    getPrecio()
    {
        return this.precio;
    }

    getType()
    {
        return this.type;
    }

}

module.exports =  Vehicles ;