import dotenv from 'dotenv'

const result  = dotenv.config()
if(result.error){
    throw result.error
}
console.log(result.parsed)
console.log(process.env.DB_HOST);
console.group(process.env.WEB_HOST);
