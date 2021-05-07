import { Router } from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controllers'

router.get('/', productsCtrl.getProducts)

export default router
