# graphql_demo

run `node server.js`

navigate to `localhost:3000/graphql`

---

Graphiql incorrectly warns of invalid arguments ("Unknown argument 'id' on field 'plan' of type 'Query'."), but they are parsed correctly by the server and queries are successful

---

defining the schema with `new GraphQLSchema` is the most verbose method of building a schema, however I've preferred it here for the following reasons:

- there is a built-in graphql method called `buildSchema` which takes a single argument defining the shape of the schema. unfortunately it takes this argument as a string, which means autocomplete and syntax highlighting are unavailalbe. at any real level of complexity this becomes intolerable quickly.

- it's also possible to construct the schema as a type object in a `*.graphql` file, but I had difficulty importing that file and had no success running actual queries. most likely we will be able to find a solution to this by the time we need it and would be able to use this method.

- for an example of a complex schema, see: https://github.com/char-cole/bloodborne-ally/blob/master/modules/bloodborne/schema.graphql - this would be very difficult to maintain as either a string or in the long form I've used in this demo. a separate .graphql file is ideal for defining this schema
