import Product from '../models/Product'

export const createProduct = async (req, res) => {

    const { name, category, price, imgURL } = req.body

    const newProduct = new Product({ name, category, price, imgURL })

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}
export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
export const getPoductById = async (req, res) => {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
}
export const updatePoductById = async (req, res) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true })
    res.status(200).json(updateProduct)
}
export const deletePoductById = async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.param.productId)
    res.status(200).json(deleteProduct)

    // const { productId } = req.param
    // await Product.findByIdAndDelete(productId)
    // res.status(204).json()
}