const express = require('express');
const router = express.Router();
const {
    createBlog,
    availableBlog,
    updateBlog,
    deleteBlog
} = require("./controller/controller");

console.log("--------inside the index/blogs routes ---->")

router.post("/createplan", createBlog)
router.get("/availableplan", availableBlog)
router.put("/updateplan", updateBlog)
router.delete("/plan", deleteBlog)


module.exports = router;