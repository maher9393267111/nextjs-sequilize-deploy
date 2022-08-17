import nc from 'next-connect'
import {addProduct ,  getProducts} from '../../db/controllers/all'

const handler = nc();

handler.post(addProduct)
handler.get(getProducts)


export default handler;