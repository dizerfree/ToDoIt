//require('dotenv').config();
import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes);

app.get('/', (req, res) => {res.send('bubu')})

const uri: string = 'mongodb+srv://dizerfree:46664959tisiko@cluster0.uvnsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () => {
        console.log(process.env.MONGO_USER);
        console.log(`Server running on http://localhost:${PORT}`);
    })
  )
  .catch(error => {
    throw error
  })