import express from 'express'
const router = express.Router()
const initWebRouter = (app) => {
    router.get('/',(req, res) =>{
        res.send("Trang chu")
    })

    router.get('/about', (req, res) =>{
        res.send('About')
    })
}
export default initWebRouter