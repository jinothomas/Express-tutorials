import  buildSchema  from 'graphql';

export const cars_schema = buildSchema(`
    type Car {
        brand : String
        modelName : String 
        modelNumber : String
        price : String
        colors : [Color]
        engine : Engine
    }

    type Color {
        colorName : String
        colorCode : String
        brand : String
        price : String
    }

    type Engine {
        brand : String
        power : String
        torque : String
        noOfCyl : Int
        weight : String
        displacement : String
    }

    type Query {
        brand : String
        modelName : String 
        modelNumber : String
        price : String
        colors : [Color]
        engine : Engine
    }
`);