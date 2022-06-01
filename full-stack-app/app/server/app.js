//https://betterprogramming.pub/full-stack-react-graphql-mongodb-apollo-building-an-app-cb1eb647c73a
const Express = require("express");
const ExpressGraphQL = require('express-graphql').graphqlHTTP;
const mongoose = require("mongoose");
const {
	GraphQLID,
	GraphQLString,
	GraphQLList,
	GraphQLType,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLObjectType
} = require("graphql");
var app = Express();
var cors = require("cors");

app.use(cors());

mongoose
	.connect("mongodb://root:example@mongo:27017/person", {
		auth: {
			username: "root",
			password: "example"
		}
	})
	.then(() => console.log("Connected to database..."))
	.catch(err => console.error(err));

const PersonModel = mongoose.model("person", {
	firstName: String,
	lastName: String
});

const PersonType = new GraphQLObjectType({
	name: "Person",
	fields: {
		id: { type: GraphQLID },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString }
	}
});

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			// Query 1

			// name of the query, people
			people: {
				// the type of response this query will return, here PersonType
				type: GraphQLList(PersonType),
				// resolver is required
				resolve: (root, args, context, info) => {
					// we are returning all persons available in the table in mongodb
					return PersonModel.find().exec();
				}
			},
			// Query 2
			peopleByID: {
				// name of the query is people by id
				type: PersonType,
				args: {
					// strong validation for graphqlid, which is mendatory for running this query
					id: { type: GraphQLNonNull(GraphQLID) }
				},
				resolve: (root, args, context, info) => {
					return PersonModel.findById(args.id).exec();
				}
			},
			// Query 3
			peopleByName: {
				type: GraphQLList(PersonType),
				args: {
					firstName: { type: GraphQLString }
				},
				resolve: (root, args, context, info) => {
					return PersonModel.find({ 'firstName': args.firstName }).exec();
				}
			}
		}
	}),

	// Mutation 1
	mutation: new GraphQLObjectType({
		name: "Mutation",
		fields: () => ({
			create: {
				type: PersonType,
				args: {
					firstName: { type: GraphQLString },
					lastName: { type: GraphQLString }
				},
				resolve: (root, args, context, info) => {
					var people = new PersonModel(args);
					return people.save();
				}
			},
			update: {
				type: PersonType,
				args: {
					id: { type: GraphQLNonNull(GraphQLID) },
					firstName: { type: GraphQLString },
					lastName: { type: GraphQLString }
				},
				resolve: async (root, args, context, info) => {
					return PersonModel.findByIdAndUpdate(args.id, { firstName: args.firstName, lastName: args.lastName }, function (err, result) {
						if (err) {
							return err;
						} else {
							return result;
						}
					});
				}
			}
		})
	})
});

app.use("/person", ExpressGraphQL({ schema, graphiql: true }));

app.listen(80, () => {
	console.log("server running at 80");
});