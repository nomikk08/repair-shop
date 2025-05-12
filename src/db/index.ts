import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"

config({path: ".env"})

const sql = neon(process.env.DATABASE_URL!)

//logger
// const db = dirzzle(sql, {logger:true})

const db = drizzle(sql)
export {db}