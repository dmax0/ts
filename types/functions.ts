/*
 * @Author: DragonMax
 * @Date: 2022-04-12
 * @LastEditTime: 2022-04-14 
 * @LastEditors: DragonMax
 * @Description: types
 * @FilePath: \typescript\fetchjson\types\functions.ts
 */

// number boolean
const isPrime = (x: number): boolean => {
  if (x < 2) return false;
  for (let i = 2; i < x / i; ++i) {
    if (x % i == 0) return false;
  }
  return true;
};

// void never string
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const user = {
  name: "Tom",
  year: 15,
};

function logUser(user: { name: string; year: number }) {
  console.log(user.name);
  console.log(user.year);
}
const _logUser = ({ name, year }: { name: string; year: number }): void => {
  console.log(name);
  console.log(year);
};
_logUser(user);
