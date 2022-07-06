const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const categoryRoutes = require("./category-routes.js");
const productRoutes = require("./product-routes.js");
const rentRoutes = require("./rent-routes.js");
const transactionRoutes = require("./transaction-routes.js");

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/rent", rentRoutes);
router.use("/transaction", transactionRoutes);

module.exports = router;
