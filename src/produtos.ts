import * as express from "express"
import { Request, Response } from "express"
import dataSource from "./dataSource"
import { produto } from "./entity/produto"


const router = express.Router()

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

//Consultar produto
router.get("/", async (req: Request, res: Response) => {
    const product = await dataSource.getRepository(produto).find()
    res.json(product)
})
//Cadastrar produto
router.post("/", async (req: Request, res: Response) => {
    const product = req.body
    const result = await dataSource.getRepository(produto).save(product)
    res.send(result)
})
//Procurar produto pelo ID
router.get("/:id", async (req: Request, res: Response) => {
    const result = await dataSource.getRepository(produto).findOneBy({
        id: Number(req.params.id)
    })
    return res.send(result)
})
//Excluir produto
router.delete("/:id", async (req: Request, res: Response) => {
    const result = await dataSource.getRepository(produto).delete(req.params.id)
    return res.send(result)
})
//Alterar produto
router.put("/:id", async (req: Request, res: Response)=>{
    const product = await dataSource.getRepository(produto).findOneBy({
        id: Number (req.params.id)
    })
    dataSource.getRepository(produto).merge(product, req.body)
    const results = await dataSource.getRepository(produto).save(product)
    return res.send(results)
})

export default router