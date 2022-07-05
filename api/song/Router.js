class SongRouter {
  constructor (router, controller, response, httpcode) {
    this._router = router() // Instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpcode = httpcode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/', this.handlePostSong.bind(this))
    this._router.get('/', this.handleGetSong.bind(this))
    this._router.put('/', this.handleUpdateSong.bind(this))
    this._router.delete('/', this.handleDeleteSong.bind(this))
  }

  handleGetSong (req, res) {
    const result = this._ctrl.getAllSong()
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handlePostSong (req, res) {
    const song = req.body
    console.log(song)
    const result = this._ctrl.createNewSong(song)
    this._response.succes(req, res, result, this._httpcode.CREATED)
  }

  handleUpdateSong (req, res) {
    const song = req.body
    console.log('Router LOG')
    console.log(song)
    const result = this._ctrl.updateSong(song)
    this._response.succes(req, res, result, this._httpcode.OK)
  }

  handleDeleteSong (req, res) {
    console.log('ROUTER DELETE LOG')
    const id = req.body
    console.log(id)
    const result = this._ctrl.deleteSong(id)
    this._response.succes(req, res, result, this._httpcode.OK)
  }
}

export default SongRouter
