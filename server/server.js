const path = require('path');
const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

//import mongoose.connection object
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  //This will create a special /graphql endpoint for the Express.js server that will serve as the main endpoint for accessing the entire API.
  server.applyMiddleware({ app });

  // Serve up static assets - update the back-end server's code to serve up the React front-end code in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
  
  //upon successful connection to mongoDB, we start the server
  db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
  };
  
  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);