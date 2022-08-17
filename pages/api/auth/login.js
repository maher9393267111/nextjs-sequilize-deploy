import nc from 'next-connect'
import {loginUser} from '../../../db/controllers/authController'

const handler = nc();

handler.post(loginUser )
//handler.get(getProducts)


export default handler;