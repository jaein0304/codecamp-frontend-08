import { DataSource } from "typeorm"
import { Product } from "./Product.postgres"
import { ApolloServer, gql } from "apollo-server"

// DOCS
const typeDefs = gql`
  type Product {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
    createdAt: String
    deletedAt: String
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProducts(page: Int): [Product]
    fetchProduct(productId: ID): [Product]
  }

  type Mutation {
    createProduct(seller: String, createProductInput: CreateProductInput!): String
    updateProduct(productId: ID, updateProductInput: UpdateProductInput!): String
    deleteProduct(productId: ID): String
  }
`

// API
const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await Product.find()
      console.log(result)
      return result
    },
  },

  Mutation: {
    createProduct: async (_: any, args: any) => {
      // args 는 매개변수로, 아무런 이름이나 지어도된다
      await Product.insert({
        seller: args.seller, // 이거해야댐!
        ...args.createProductInput,
        deletedAt: "",
      })
      return "상품 등록 성공"
    },

    updateProduct: async (_: any, args: any) => {
      await Product.update({ _id: args.productId }, { ...args.updateProductInput, deletedAt: "" })
    },

    deleteProduct: async (_: any, args: any) => {
      await Product.update({ _id: args.productId }, { deletedAt: new Date() })
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
  entities: [Product],
})

AppDataSource.initialize().then(() => {
  console.log("DB연결성공")

  server.listen(4000).then(({ url }) => {
    console.log(`🚀 서버 연결 성공 ${url}`)
  })
})
