import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import GettingGraphQLData from "./components/GettingGraphQLData";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "http://localhost:8080/person"
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <GettingGraphQLData />
  </ApolloProvider>,
  
);

reportWebVitals();