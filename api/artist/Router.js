class ArtistRouter {
  constructor (router, controller, response, httpcode) {
    this._router = router() // Instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpcode = httpcode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/', this.handlePostArtist.bind(this))
    this._router.get('/', this.handleGetAllArtist.bind(this))
    this._router.get('/', this.handleGetOneArtist.bind(this))
    this._router.put('/', this.handleUpdateArtist.bind(this))
    this._router.delete('/', this.handleDeleteSong.bind(this))
  }

  handlePostArtist (req, res) {
    const artist = req.body
    console.log(artist)
    const result = this._ctrl.createNewArtist(artist)
    this._response.succes(req, res, result, this._httpcode.CREATED)
  }

  handleGetAllArtist (req, res) {
    const result = this._ctrl.getAllArtist()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleGetOneArtist (req, res) {

  }

  handleUpdateArtist (req, res) {
    const artist = req.body
    const result = this._ctrl.updateArtist(artist)
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleDeleteSong (req, res) {

  }
}

export default ArtistRouter
