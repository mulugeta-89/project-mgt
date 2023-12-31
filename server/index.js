const express = require("express")
require("dotenv").config()
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000


//connect to database
connectDB()
const app = express()
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

app.listen(PORT, console.log(`server listening on ${PORT}`))