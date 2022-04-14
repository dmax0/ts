/*
 * @Author: DragonMax
 * @Date: 2022-04-14
 * @LastEditTime: 2022-04-14 
 * @LastEditors: DragonMax
 * @Description: object
 * @FilePath: \typescript\fetchjson\types\object.ts
 */

const profile = {
  name: "mikey",
  age: 23,
  coords: {
    lat: 23,
    lng: 32,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age}: { age: number} = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
