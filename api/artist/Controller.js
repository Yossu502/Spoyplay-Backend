class ArtistController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  createNewArtist (artist) {
    console.log(artist)
    const newArtist = new this._entity(artist)
    // console.log(newArtist)
    const response = this._service.save('artist', newArtist)
    return response
  }

  getAllArtist () {
    const response = this._service.getAllTable('artist')
    return response
  }

  updateArtist (artist) {
    const updateArtist = new this._entity(artist)
    updateArtist.setId(artist.id)
    const response = this._service.updateTable('artist', updateArtist)
    return response
  }
}

export default ArtistController
