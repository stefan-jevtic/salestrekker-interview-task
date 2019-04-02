import { gql } from 'apollo-server-koa'
export default gql`
    type Person {
        id: ID!
        last_name: String!
        gender: String!
        lead_id: Int!
    }
    type Company {
        id: ID!
        contact_person: String!
        website: String!
        lead_id: Int!
    }
    type Lead {
        id: ID!
        name: String!
        address: String!
        phone: String!
        email: String!
        Company: Company
        Person: Person
        category: String!
    }
    type Query {
        leads: [Lead!]!
        persons: [Lead!]!
        companies: [Lead!]!
    }
    input PersonInput {
        last_name: String!
        gender: String!
    }
    input CompanyInput {
        contact_person: String!
        website: String!
    }
    input LeadInput {
        name: String!
        address: String!
        phone: String!
        email: String!
        Person: PersonInput
        Company: CompanyInput
        category: String!
    }
    input LeadUpdate {
        name: String
        address: String
        phone: String
        email: String
        last_name: String
        gender: String
        website: String
        contact_person: String
        category: String
    }
    type Mutation {
        addLead(input: LeadInput): Lead
        editLead(id: ID!, data: LeadUpdate): [Int!]!
        deleteLead(id: [ID!]!): Int
    }
`
