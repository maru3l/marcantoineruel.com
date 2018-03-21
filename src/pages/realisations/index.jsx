import React from 'react';

import Container from '../../components/Container';

export default ({ data }) => {
  // console.log(data);
  return (
    <Container title="Les vraies affaires">
      <h2>Ce que j'ai réalisé</h2>
      <h2>Sur quoi je m’amuse</h2>
    </Container>
  );
};

export const query = graphql`
  query ProjetsQuery {
  	projets: allMarkdownRemark {
  	  edges {
  	    node {
          frontmatter {
            title
            client
            publicationDate
            tasks
            mandate
            link
          }
  	    }
  	  }
  	}
  }
`
