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

	return loading ? loading : data.allPages.edges[0].node.aboutcontent;
};
