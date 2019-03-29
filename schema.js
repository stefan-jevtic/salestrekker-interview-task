import { gql } from 'apollo-server-koa';
export default gql`
    type Person {
        id: ID!,
        lastName: String!,
        gender: String!,
        leadId: Int!
    }
    type Company {
        id: ID!,
        contactPerson: String!,
        website: String,
        leadId: Int!
    }
    type Lead {
        id: ID!
        name: String!,
        address: String,
        phone: String!,
        email: String!,
        company: Company,
        person: Person,
        category: String!
    }
    type Query {
        leads: [Lead!]!
    }
`;