const express = require('express');
const Blog=require('../models/Blog');

const router=express.Router();


// 1. Home Page - Show All Blogs (Index)
router.get("/", async (req, res) => {
    const blogs = await Blog.find();
    res.render("index", { blogs });
  });

// 2. New Blog Form   (new)
  router.get("/blogs/new", (req, res) => {
    res.render("new");
});
  
  // 3. Create Blog (POST)
  router.post("/blogs", async (req, res) => {
    const { title, body } = req.body;
    await Blog.create({ title, body });
    res.redirect("/");
  });
  
  // 4. Show Single Blog
  router.get("/blogs/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.render("show", { blog });
  });
  
  // 5. Edit Blog Form
  router.get("/blogs/:id/edit", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.render("edit", { blog });
  });
  
  // 6. Update Blog (PUT)
  router.put("/blogs/:id", async (req, res) => {
    const { title, body } = req.body;
    await Blog.findByIdAndUpdate(req.params.id, { title, body });
    res.redirect(`/blogs/${req.params.id}`);
  });
  
  // 7. Delete Blog
  router.delete("/blogs/:id", async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/");
  });

  module.exports = router;