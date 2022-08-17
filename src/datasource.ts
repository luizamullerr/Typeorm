import { DataSource } from "typeorm"
import { categoria } from "./entity/categoria"
import { produto } from "./entity/produto"
import { Profile } from "./entity/Profile"
import {User} from "./entity/User"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
   // entities: ["dist/**/*src/entity/*.ts"],
    entities: [User, produto, Profile, categoria],
    logging: false,
    synchronize: true,
})

export default dataSource