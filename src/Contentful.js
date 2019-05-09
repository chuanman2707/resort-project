import {createClient} from 'contentful';

 export default createClient({
    space:process.env.ACCESS_SPACE,
    accessToken:process.env.ACCESS_TOKEN
})

console.log(process.env.ACCESS_SPACE)