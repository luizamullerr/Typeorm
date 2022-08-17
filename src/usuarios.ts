import * as express from "express"
import { Request, Response } from "express"
import dataSource from "./dataSource"
import { User } from "./entity/User"

const router = express.Router()

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

//consultar usuários
router.get("/", async (req: Request, res: Response)=>{
    const users = await dataSource.getRepository(User).find()
    res.json(users)
})

//cadastrar usuário
router.post("/", async (req: Request, res: Response)=>{
const user = req.body
const result = await dataSource.getRepository(User).save(user)
res.send(result)
})

//Procurar usuário pelo ID
router.get("/:id", async function (req: Request, res: Response) {
    const result = await dataSource.getRepository(User).findOneBy({
        id: Number (req.params.id)
    })
    return res.send(result)
})

//Excluir usuário
router.delete("/:id", async function (req: Request, res: Response) {
    const result = await dataSource.getRepository(User).delete(req.params.id)
    return res.send(result)
})

//Alterar usuário
router.put("/:id", async function (req: Request, res: Response) {
    const user = await dataSource.getRepository(User).findOneBy({
    id: Number (req.params.id)
    })
    dataSource.getRepository(User).merge(user, req.body)
    const results = await dataSource.getRepository(User).save(user)
    return res.send(results)
})
export default router