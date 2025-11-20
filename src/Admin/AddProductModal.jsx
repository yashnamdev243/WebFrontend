import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddProductModal = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    // Load products from localStorage (replace with API call if needed)
    const stored = localStorage.getItem("products");
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...form, id: uuidv4() };
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    setForm({ title: "", category: "", description: "", price: "", image: "" });
    alert("Product added!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Product Panel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Product Title"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Existing Products</h3>
        {products.map((p) => (
          <div key={p.id} className="border p-2 rounded mb-2">
            <p className="font-bold">{p.title}</p>
            <p>Category: {p.category}</p>
            <p>Price: ₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProductModal;
