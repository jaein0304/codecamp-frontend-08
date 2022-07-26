import { DataSource } from "typeorm"
import { Quiz } from "./Quiz.postgres"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.240.160",
  port: 5005,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Quiz],
})

AppDataSource.initialize().then(() => {
  console.log("연결성공")
})
