import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const StoreApolloClient = new ApolloClient({
  uri: window.GraphQlFetchServer,
  cache: new InMemoryCache(),
});

export const ALL_CLOTHES = gql`
  query AllClothes {
    category(input: { title: "clothes" }) {
      name
      products {
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const ALL_TECH = gql`
  query AllTech {
    category(input: { title: "tech" }) {
      name
      products {
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const ALL_PRODUCTS = gql`
  query AllProducts {
    category {
      name
      products {
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const ALL_CURRENCIES = gql`
  query AllCurrencies {
    currencies
  }
`;

export default StoreApolloClient;
