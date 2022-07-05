class ArtistController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  createNewArtist (artist) {
    const newArtist = new this._entity(artist)
    const response = this._service.save('artist', newArtist)
    return response
  }

  getAllArtist () {
    const response = this._service.getAllTable('artist')
    return response
  }

  getOneArtist (song) {
    const response = this._service.findByAtribute('artist', '_id', song.id)
    return response
  }

  updateArtist (artist) {
    const updateArtist = new this._entity(artist)
    updateArtist.setId(artist.id)
    const response = this._service.updateTable('artist', updateArtist)
    return response
  }

  deleteArtist (artist) {
    const response = this._service.deleteItemTable('artist', '_id', artist.id)
    return response
  }
}

export default ArtistController
