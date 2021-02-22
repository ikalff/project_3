/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

describe('Testing REGISTER', () => {

  beforeEach(done => {
    setup(done)
  })

  afterEach(done => {
    tearDown(done)
  })


  it('Should be able to register a new user', done => {

    api.post('/api/register')
      .send({
        first_name: 'Admin',
        last_name: 'Adminson',
        email: 'admin@admin.com',
        password: 'passwords2',
        passwordConfirmation: 'passwords2',
        isHost: false,
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.eq(201)
        expect(res.body.first_name).to.eq('Admin')
        done()
      })
  })

  it('Should be able to register user, then login a new user', done => {

    api.post('/api/register')
      .send({
        first_name: 'Admin',
        last_name: 'Adminson',
        email: 'admin@admin.com',
        password: 'passwords2',
        passwordConfirmation: 'passwords2',
        isHost: false,
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.eq(201)
        expect(res.body.first_name).to.eq('Admin')

        api.post('/api/login')
          .send({
            email: 'admin@admin.com',
            password: 'passwords2'
          })
          .end((err, res) => {
            expect(res.status).to.eq(202)
            expect(res.body.token).to.be.a('string')

            done()
          })
      })
  })

})

