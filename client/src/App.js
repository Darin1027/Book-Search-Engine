import React from "react";
import {
  ApolloClient, // connection
  InMemoryCache, // cache authentication
  ApolloProvider, // provide wraps around app component and allows access to graphql
  createHttpLink, // format the authentication link --> used for creating client
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context"; // function :D
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // allow react to use routes for dom manipulation
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";

const httpLink = createHttpLink({
  url: "/graphql",
});

console.log(httpLink);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchBooks />} />
          <Route path="/saved" element={<SavedBooks />} />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
