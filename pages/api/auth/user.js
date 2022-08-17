import nc from 'next-connect'
import {createUser } from '../../../db/controllers/authController'

const handler = nc();

handler.post(createUser )
//handler.get(getProducts)


export default handler;