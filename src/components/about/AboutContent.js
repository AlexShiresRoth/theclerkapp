import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default () => {
	const data = graphql(gql`
		query {
			_allDocuments {
				edges {
					node {
						_meta {
							id
						}
					}
				}
			}
		}
	`);
	console.log(data);
	return data;
};
