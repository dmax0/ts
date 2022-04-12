/*
 * @Author: DragonMax
 * @Date: 2022-04-12 
 * @LastEditTime: 2022-04-12 
 * @LastEditors: DragonMax
 * @Description: types
 * @FilePath: \fetchjson\types\functions.ts
 */

function isPrime(x: number): boolean{
    if (x < 2) return false;
    for (let i=2; i<x/i; ++i)
    {
        if (x % i == 0) return false;
    }
    return true; 
}
