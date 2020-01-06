const express = require("express");
const expressGraphQL = require("express-graphql");
const {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} = require("graphql");

const _db = {
    plans: [
        {
            id: 1,
            name: "Plan F",
            cost: 520
        },
        {
            id: 2,
            name: "Plan G",
            cost: 420
        }
    ],
    coverages: [
        {
            plan_id: 1,
            a: true,
            b: true,
            c: true
        },
        {
            plan_id: 2,
            a: true,
            b: false,
            c: true
        }
    ]
};

const planHandler = {
    getPlan(id) {
        return _db.plans.find(plan => plan.id === id);
    },
    getCoverage(planId) {
        return _db.coverages.find(coverage => coverage.plan_id === planId);
    }
};

const CoverageType = new GraphQLObjectType({
    name: "Coverage",
    fields: {
        plan_id: {
            type: GraphQLInt
        },
        a: {
            type: GraphQLBoolean
        },
        b: {
            type: GraphQLBoolean
        },
        c: {
            type: GraphQLBoolean
        }
    }
});

const PlanType = new GraphQLObjectType({
    name: "Plan",
    fields: {
        name: {
            type: GraphQLString
        },
        cost: {
            type: GraphQLInt
        },
        coverage: {
            type: CoverageType,
            resolve: (source, params) => {
                return planHandler.getCoverage(source.id);
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            plan: {
                type: PlanType,
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: (source, { id }) => {
                    return planHandler.getPlan(id);
                }
            }
        }
    })
});

const app = express();

app.use(
    "/graphql",
    expressGraphQL({
        schema: schema,
        graphiql: true
    })
);

app.listen(3000);

console.log("GraphQL server listening at localhost:3000/graphql");