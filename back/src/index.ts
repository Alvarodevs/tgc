import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import productsRouter from './routes/products'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT ?? 3001

app.use('/api/products', productsRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
