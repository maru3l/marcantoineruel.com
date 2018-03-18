import React from 'react';

export default ({ data }) => {
  console.log(data);
  return (
    <h1>Réalisations</h1>
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
