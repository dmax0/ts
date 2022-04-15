/*
 * @Author: DragonMax
 * @Date: 2022-04-14
 * @LastEditTime: 2022-04-15 
 * @LastEditors: DragonMax
 * @Description: interfaces
 * @FilePath: \typescript\interfaces\interfaces.ts
 */

interface Vehicle {
    name: string;
    year: number | Date | string;
    Broken: boolean;
    summary: () => string;
}

const logVehicleInfo = (vehicle: Vehicle): void  => {
    const info = `Name is ${vehicle.name},created at ${vehicle.year}.Broken ? ${vehicle.Broken}`
    console.log(info)
} 
const myCar: Vehicle = {
    name: 'Agera RS',
    year: 2017,
    Broken: false,
    summary:  (): string => { return `Name is ${myCar.name}`}
}
logVehicleInfo(myCar)
console.log(myCar.summary())
