import express from 'express'
import SongRouter from './Router.js'
import SongController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DBMongo } from '../../store/DBMongo.js'
import { modelsMongo } from '../../store/SchemaAndModel.js'
import Song from '../../entity/Song.js'

export const SongModule = () => {
  const servicesSong = new DBMongo(modelsMongo)
  const songController = new SongController(servicesSong, Song)
  const songRouter = new SongRouter(express.Router, songController, response, HttpCode)
  return songRouter._router
}
