export const ProductSchema = `
    type location {
        type: String!
        coordinates: [Float!]!
    }

    type Product {
        _id: ID!
        name: String!
        user: User!
        image: String!
        brand: Brand!
        category: Category!
        subcategory: SubCategory!
        questions: [Question!]!
        description: String!
        location: location!
    }

    input locationInput {
        type: String!
        coordinates: [Float!]!
    }

    input ProductInput {
        name: String!
        user: ID!
        image: String!
        brand: String!
        category: ID!
        subcategory: ID!
        questions: [QuestionInput!]!
        description: String!
        location: locationInput!
    }

    input updateProduct {
        name: String!
        user: ID!
        image: String!
        brand: String!
        category: ID!
        subcategory: ID!
        questions: [QuestionInput!]!
        description: String!
        location: locationInput!
    }
`;
