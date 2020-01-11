import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default () => {
	const FETCH_ABOUT_CONTENT = gql`
		query {
			allPages {
				edges {
					node {
						aboutcontent
					}
				}
			}
		}
	`;
	const { data, loading } = useQuery(FETCH_ABOUT_CONTENT);

	if (data) {
		console.log(data.allPages.edges[0].node.aboutcontent);
		return data.allPages.edges[0].node.aboutcontent;
	}
};
