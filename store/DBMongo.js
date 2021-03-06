import mongoose from 'mongoose'
import { config } from '../config/default.js'

const mongodb = async () => {
  try {
    const db = await mongoose.connect(config.dbmongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB Connected: ${db.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

export class DBMongo {
  constructor (models) {
    this._mongodb = mongodb()
    this._modelsDB = models
  }

  async insertData (model, data) {
    const newUser = this._modelsDB[model](data)
    const rest = await newUser.save()
    console.log(rest)
    return 'Item added successfully'
  }
}

/* const mongo = new DBMongo(modelsMongo)
const resultado = await mongo.insertData('songs', {
  _title: 'Cancion1',
  _uri: 'www.google.com',
  _duration: '3.15',
  _image: 'www.google/ajd.png',
  _idArtista: 2,
  _idGenre: 'Rap'
})

console.log(resultado) */
