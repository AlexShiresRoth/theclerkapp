import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Videos from "./components/pages/Videos";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import "./stylesheets/style.css";

const client = new ApolloClient({
  link: new PrismicLink({
    uri: "https://clerkofoxford.prismic.io/graphql",
    repositoryName: "clerkofoxford"
  }),
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
