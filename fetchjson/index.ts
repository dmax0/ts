
/*
 * @Author: DragonMax
 * @Date: 2022-04-10 
 * @LastEditTime: 2022-04-11 
 * @LastEditors: DragonMax
 * @Description: 
 * @FilePath: \fetchjson\index.ts
 */

import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/users/1"


interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: Company
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}
axios.get(url)
    .then(res => {
        const user = res.data as User;

        logUserInfo(user);
       
    })
    
const  logUserInfo = (user: User): void =>
{
    const {id, name, username, email, phone, website, company}: User = user
    console.log(`
        His id is ${id},
        His name is ${name},
        His username is ${username}
        His username is ${email}
        His phone is ${phone},
        His website is ${website},
        His company's name is ${company.name},
        His company's catchPhrase is ${company.catchPhrase},
        His company's bs is ${company.bs}`
    )
}