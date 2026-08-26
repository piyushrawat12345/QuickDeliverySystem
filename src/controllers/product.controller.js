import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({
        message: "Name, description, price, and category are required",
      });
    }

    if (price < 0) {
      return res.status(400).json({
        message: "Price cannot be negative",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image: image || null,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, sortBy } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    let query = Product.find(filter);

    if (sortBy === "price-asc") {
      query = query.sort({ price: 1 });
    } else if (sortBy === "price-desc") {
      query = query.sort({ price: -1 });
    } else if (sortBy === "newest") {
      query = query.sort({ createdAt: -1 });
    }

    const products = await query;

    res.status(200).json({
      message: "Products retrieved successfully",
      count: products.length,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product retrieved successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.price && updates.price < 0) {
      return res.status(400).json({
        message: "Price cannot be negative",
      });
    }

    const product = await Product.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};