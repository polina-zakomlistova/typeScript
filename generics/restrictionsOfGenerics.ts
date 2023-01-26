{
    class Vihicle {
        run: number;
    }

    class LCV extends Vihicle {
        capacity: number;
    }

    //generic обязательно наследует Vihicle, как интерфейс
    function kmToMiles<T extends Vihicle>(vehicle: T): T {
        vehicle.run = vehicle.run / 0.64;
        return vehicle;
    }

    const vehicle = kmToMiles(new Vihicle());
    const lcv = kmToMiles(new LCV());
    kmToMiles({ run: 1 });

    function logId<T extends string | number, Y>(
        id: T,
        additionalData: Y
    ): { id: T; data: Y } {
        console.log(id);
        return { id, data: additionalData };
    }
}
