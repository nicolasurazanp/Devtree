import express from 'express' // ESM ECMASCRIPT
import router from './router'

const app =  express()

// leer datos de formularios
app.use(express.json())

app.use('/', router)



export default app