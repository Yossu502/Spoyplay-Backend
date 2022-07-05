import { expect } from 'chai'
import { describe, it } from 'mocha'
import Artist from '../../entity/Artist.js'

// Escribiendo un test

describe('testing class Artist', () => {
  // Setup classs and instace
  const artist = new Artist({
    name: 'title',
    genre: 'url',
    photoProfile: 'duration'
  })

  it('Should is not null', () => {
    expect(artist).to.not.equal(null)
  })
})
