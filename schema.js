import { gql } from 'apollo-server-koa';
export default gql`
    type Person {
        id: ID!,
        last_name: String!,
        gender: String!,
        lead_id: Int!
    }
    type Company {
        id: ID!,
        contact_person: String!,
        website: String!,
        lead_id: Int!
    }
    type Lead {
        id: ID!
        name: String!,
        address: String,
        phone: String!,
        email: String!,
        Company: Company,
        Person: Person,
        category: String!
    }
    type Query {
        leads: [Lead!]!
    }
`;