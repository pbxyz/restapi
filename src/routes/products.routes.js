import { Router } from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controllers'

router.post('/', productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getPoductById)

router.put('/:productId', productsCtrl.updatePoductById)

router.delete('/:productId', productsCtrl.deletePoductById)

export default router
