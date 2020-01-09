const express = require("express");
const expressGraphQL = require("express-graphql");
const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} = require("graphql");

const _db = require('./db')

const PlanType = new GraphQLObjectType({
    name: "Plan",
    fields: {
        id: {
            type: GraphQLString
        },
        primaryDoctor: {
            type: GraphQLString
        },
        specialist: {
            type: GraphQLString
        },
        emergencyRoom: {
            type: GraphQLString
        },
        labXRay: {
            type: GraphQLString
        },
        outpatientSurgery: {
            type: GraphQLString
        },
        hospitalization: {
            type: GraphQLString
        },
        outpatient: {
            type: GraphQLString
        },
        periodicExamCoverage: {
            type: GraphQLString
        },
        outOfPocketLimit: {
            type: GraphQLString
        },
        prescriptionDrugCoverage: {
            type: GraphQLString
        },
        ambulanceServices: {
            type: GraphQLString
        },
        urgentCare: {
            type: GraphQLString
        },
        skilledNursingFacility: {
            type: GraphQLString
        },
        homeHealthCare: {
            type: GraphQLString
        },
        hospice: {
            type: GraphQLString
        },
        dentalServices: {
            type: GraphQLString
        },
        hearingServices: {
            type: GraphQLString
        },
        visionServices: {
            type: GraphQLString
        },
        primaryOfficeVisit: {
            type: GraphQLString
        },
        specialistOfficeVisit: {
            type: GraphQLString
        }
    }
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            getPlans: {
                type: new GraphQLList(PlanType),
                args: {
                    ids: {
                        type: new GraphQLList(GraphQLString)
                    }
                },
                resolve: (source, { ids }) => {
                    const res = ids.map(id =>
                        _db.plans.find(plan => plan.id === id.toUpperCase())
                    );
                    return res;
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
