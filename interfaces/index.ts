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
interface Reportable {
    summary(): string;
}
const logVehicleInfo = (vehicle: Vehicle): void  => {
    const info = `Name is ${vehicle.name},created at ${vehicle.year}.Broken ? ${vehicle.Broken}`
    console.log(info)
} 
const printSummary = (reportable: Reportable) => {
    console.log(reportable.summary())
}
const myDrink  = {
    name: 'orange',
    carbonated: false,
    suger: 40, 
    summary: (): string => {return `Name is ${myDrink.name}`}
}
const myCar: Vehicle = {
    name: 'Agera RS',
    year: 2017,
    Broken: false,
    summary:  (): string => { return `Name is ${myCar.name}`}
}
printSummary(myCar)
printSummary(myDrink)
