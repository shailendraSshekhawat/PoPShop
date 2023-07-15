import express from 'express';
import {
  getProducts,
  getProductById,
} from '../controllers/productControllers.js';
const router = express.Router();

// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

router.route('/').get(getProducts);

// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       return res.json(product);
//     }
//     res.status(404);
//     throw new Error('Resource not found');
//   })
// );
router.route('/:id').get(getProductById);

export default router;
