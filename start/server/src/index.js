require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
//console.log(typeDefs);
const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });
  