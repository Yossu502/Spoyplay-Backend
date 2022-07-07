import pg from 'pg'

export class DataPostgresql {
  constructor () {
    this._pool = this.getConnection()
  }

  async getConnection () {
    const pool = await new pg.Pool({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'dbspotplay'
    })
    return pool
  }
}

const data = new DataPostgresql()
const datanew = await data.getConnection()
console.log(datanew)
