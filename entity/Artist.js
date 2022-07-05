class Artist {
  constructor (artist) {
    this._id = null
    this._name = artist.name
    this._genre = artist.genre
    this._photoProfile = artist.photoProfile
  }

  setId (id) {
    this._id = id
  }
}

export default Artist
