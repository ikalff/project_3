import express from 'express'

const router = express.Router()
import secureRoute from '../middleware/secureRoute.js'

/*
routes:
homepage
register
login
search/filter
single property 
single user page - secure route - if logged in show all info, or only public bio for other users
booking and confirmation page - POST, PUT and delete
comment - secure route - make, update and delete
post - secure route - post, update and delete
*/

export default router