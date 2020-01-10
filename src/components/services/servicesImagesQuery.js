import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default () => {
	const data = graphql(gql`
		query imageQuery {
			allCloudinaryMedia(filter: { public_id: { regex: "/(tutoring-site/services)/" } }) {
				edges {
					node {
						public_id
						id
						format
						type
						secure_url
					}
				}
			}
		}
	`);
	console.log(data);
	return data;
};
