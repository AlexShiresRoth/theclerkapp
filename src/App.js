import React from 'react';
import { Router } from '@reach/router';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Quiz from './components/pages/Quiz';
import Services from './components/pages/Services';
import './stylesheets/style.css';

const client = new ApolloClient({
	link: new PrismicLink({ uri: 'https://clerkofoxford.prismic.io/graphql', repositoryName: 'clerkofoxford' }),
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Quiz path="/quiz" />
				<Services path="/services" />
			</Router>
		</ApolloProvider>
	);
};

export default App;
