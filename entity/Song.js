class Song {
  constructor (song) {
    this._id = null
    this._title = song.title
    this._uri = song.uri
    this._duration = song.duration
    this._image = song.image
    this._idArtista = song.idArtista
    this._idGenre = song.idGenre
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id = id
  }

  setId (id) {
    this._id = id
  }

  returnNumber () {
    return 5
  }
}

export default Song
