import express from 'express' // ESM ECMASCRIPT
import router from './router'

const app =  express()

app.use('/', router)



export default app