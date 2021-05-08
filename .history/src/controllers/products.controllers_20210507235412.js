import Product from '../models/Product'

export const createProduct = async (req, res) => {

    const { name, category, price, imgURL } = req.body

    const newProduct = new Product({ name, category, price, imgURL })

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}
export const getProducts = (req, res) => {
    const products = await Product.find()
    res.json(products)
}
export const getPoductById = (req, res) => {

}
export const updatePoductById = (req, res) => {

}
export const deletePoductById = (req, res) => {

}
