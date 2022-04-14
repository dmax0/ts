/*
 * @Author: DragonMax
 * @Date: 2022-04-14
 * @LastEditTime: 2022-04-14 
 * @LastEditors: DragonMax
 * @Description: array
 * @FilePath: \typescript\fetchjson\types\arrays.ts
 */

const carsByMake: string[][] = [["benz"], ["corolla"], ["coole"]];
carsByMake.map((element: string[]): void => {
     element.map((e: string): void => console.log(e))
})

const lettersArray: string[] = ['afKdl', 'sdaIEf', 'dsaf']
const upperLettersArray: string[] = lettersArray.map((letters: string): string => {
    return letters.toUpperCase()
})
console.log(upperLettersArray)

//Flexible types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2022-02-22')