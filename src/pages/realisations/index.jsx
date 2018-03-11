import React from 'react';

export default ({ data }) => {
  console.log(data);
  return (
    <main id="main" className="site-main" role="main">

      <h1>Réalisations</h1>

    </main>
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
