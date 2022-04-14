/*
 * @Author: DragonMax
 * @Date: 2022-04-14 
 * @LastEditTime: 2022-04-14 
 * @LastEditors: DragonMax
 * @Description: tuple 
 * @FilePath: \typescript\fetchjson\types\tuple.ts
 */

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 20
}
type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 20]
const tea: Drink = ['brown', false, 0]