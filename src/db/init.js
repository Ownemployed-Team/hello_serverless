const { Client, types } = require('pg') //  Needs the nodePostgres Lambda Layer.

const init = async () => {
  if (types) {
    types.setTypeParser(20, 'text', parseInt)
  }
  const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  })
  await client.connect()
  return client
}

const dbQuery = async (sqlQuery, queryParams) => {
  const client = await init()
  const res = await client.query({
    text: sqlQuery,
    values: queryParams,
  })
  await client.end()
  return res
}

module.exports = { dbQuery }
