/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

describe('Testing GET properties', () => {

  beforeEach(done => {
    setup(done)
  })

  afterEach(done => {
    tearDown(done)
  })

  it('should return a 200 response', done => {
    api.get('/api/properties')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array of 4 properties', done => {
    api.get('/api/properties')
      .end((err, res) => {
        console.log('first',res.body)
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.eq(4)
        done()
      })
  })

  it('array[0] should contain a Boolean property isRoomOnly', done => {
    api.get('/api/properties')
      .end((err, res) => {
        expect(res.body[0].isRoomOnly).to.be.a('boolean')
        done()
      })
  })

  it('array[2] should contain a an amenities property array of length 5', done => {
    api.get('/api/properties')
      .end((err, res) => {
        expect(res.body[2]).to.have.property('amenities').with.lengthOf(5)
        done()
      })
  })


})