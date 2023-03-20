import express from 'express'
import * as dotenv from 'dotenv'
import productsRouter from './routes/products'

dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT ?? 3001

app.get('/ping', (_req, res) => {
  console.log('pinged')
  res.send('pong')
})

app.use('/api/products', productsRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})