// 여기가 API 메인 소스코드
import { DataSource } from "typeorm"
import { Board } from "./Board.postgres"
import { ApolloServer, gql } from "apollo-server"

// DOCS
const typeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
    fetchBoard: [Board]
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput!): String
    updateBoard(updateBoardInput: updateBoardInput!): String
    deleteBoard(boardId: ID): String
  }
`

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find()
      console.log(result)
      return result
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,
      })

      return "게시물 등록에 성공했습니다"
    },
    updateBoard: async (_: any, args: any) => {
      await Board.update({ _id: args.boardId }, { ...args.updateBoardInput, deletedAt: "" })
    },
  },
}

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cors: true,
})

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.240.160",
  port: 5005,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
})

AppDataSource.initialize().then(() => {
  console.log("DB연결성공")

  server.listen(4000).then(({ url }) => {
    console.log(`🚀 서버 연결 성공 ${url}`)
  })
})
