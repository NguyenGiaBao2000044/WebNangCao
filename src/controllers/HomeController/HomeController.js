import express from "express"
const getHomePage = (req, res) => {
    return res.render("home")
}
export default getHomePage