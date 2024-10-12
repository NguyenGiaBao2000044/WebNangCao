import express from "express"
const aboutPage = (req, res) => {
    return res.render("about", {data: { title: 'About website', content: 'Nguyen Gia Bao 2000044'} })
}
export default aboutPage