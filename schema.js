import { gql } from 'apollo-server-koa';
export default gql`
    type Person {
        id: ID!,
        lastName: String!,
        gender: String!
    }
    type Company {
        id: ID!,
        contactPerson: String!,
        website: String
    }
    type Lead {
        id: ID!
        name: String!,
        address: String,
        phone: String!,
        email: String!,
        companyId: ID,
        company: Company,
        personId: ID,
        person: Person,
        catefory: String!
    }
    type Query {
        leads: [Lead!]!
    }
`;