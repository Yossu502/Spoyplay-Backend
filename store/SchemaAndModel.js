import mongoose from 'mongoose'

// Creando un esquema
const userSchema = new mongoose.Schema({
  _username: {
    type: String,
    required: true
  },
  _email: {
    type: String,
    required: true
  },
  _password: {
    type: String,
    required: true
  }
})

const songSchema = new mongoose.Schema({
  _title: {
    type: String,
    required: true
  },
  _uri: {
    type: String,
    required: true
  },
  _duration: {
    type: String,
    required: true
  },
  _image: {
    type: String,
    required: true
  },
  _idArtista: {
    type: String,
    required: true
  },
  _idGenre: {
    type: String,
    required: true
  }
})

const songModel = mongoose.model('songs', songSchema)
const userModel = mongoose.model('users', userSchema)
export const modelsMongo = {
  songs: songModel,
  users: userModel
}
