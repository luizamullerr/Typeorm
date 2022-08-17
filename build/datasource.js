"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var categoria_1 = require("./entity/categoria");
var produto_1 = require("./entity/produto");
var Profile_1 = require("./entity/Profile");
var User_1 = require("./entity/User");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    // entities: ["dist/**/*src/entity/*.ts"],
    entities: [User_1.User, produto_1.produto, Profile_1.Profile, categoria_1.categoria],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;
