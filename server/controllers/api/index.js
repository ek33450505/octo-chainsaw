const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const categoryRoutes = require("./category-routes.js");
const productRoutes = require("./product-routes.js");
const rentRoutes = require("./rent-routes.js");
const transactionRoutes = require("./transaction-routes.js");
const MessageRoutes = require("./message-routes.js");

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/rent", rentRoutes);
router.use("/transaction", transactionRoutes);
router.use("/Message", MessageRoutes);

module.exports = router;
