"use strict";
{
    class Vihicle {
    }
    class LCV extends Vihicle {
    }
    //generic обязательно наследует Vihicle, как интерфейс
    function kmToMiles(vehicle) {
        vehicle.run = vehicle.run / 0.64;
        return vehicle;
    }
    const vehicle = kmToMiles(new Vihicle());
    const lcv = kmToMiles(new LCV());
    kmToMiles({ run: 1 });
    function logId(id, additionalData) {
        console.log(id);
        return { id, data: additionalData };
    }
}
