/* allow the code to access our .env file to get our environment variables. */ 
require('dotenv').config() 
 
/* imports our pg library into the code */ 
const pg = require('pg'); 
 
/* This is standard and required by the production database. We will set it up later. */ 
if (process.env.DATABASE_URL) { 
  pg.defaults.ssl = { rejectUnauthorized: false } 
} 
 
/* Set the client as pg. Set migrations and seeds directories. The sharedConfig variable is 
shared between our development and production environments. */ 
 
const sharedConfig = { 
  client: 'pg', 
  migrations: {directory: './data/migrations'}, 
  seeds: {directory: './data/seeds'}, 
} 
 
/* sets the connection configuration settings for the development and production 
environment. */ 
module.exports = { 
  development: { 
    ...sharedConfig, 
    connection: { 
      host: process.env.DB_HOST, 
      user: process.env.DB_USER, 
      password: process.env.DB_PASS, 
      database: process.env.DB_NAME 
    } 
  }, 
  production: { 
    ...sharedConfig, 
    connection: process.env.DATABASE_URL, 
    pool: { min: 2, max: 10 }, 
  }, 
}; 