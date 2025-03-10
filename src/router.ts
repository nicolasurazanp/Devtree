import { Router} from 'express'

const router = Router()

/*** Autenticacion Y Registro */
router.post('/auth/register', (req, res) => {
    console.log(req.body)
})

 export default router

