import * as express from "express"
import usuarios from './usuarios'
import produtos from './produtos'



const app = express()
    app.use(express.json())

    app.use("/user", usuarios)
    app.use("/produto", produtos)



const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`Executando em http://localhost:${PORT}`)})