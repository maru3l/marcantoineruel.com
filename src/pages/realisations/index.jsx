import React from 'react';

import Container from '../../components/Container';

export default ({ data }) => {
  // console.log(data);
  return (
    <Container title="Les vraies affaires">
      <h2>Ce que j'ai réalisé</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus unde omnis quisquam! Labore nesciunt harum, illum. Aperiam minus porro quaerat eligendi optio nulla corporis quae, inventore. Tenetur est cum, quia.
      </p>
      <p>Non accusantium animi, provident pariatur deserunt reprehenderit perferendis corporis debitis sint adipisci libero corrupti, aliquid, ad odit velit accusamus dolor facere recusandae cumque quibusdam excepturi. Atque, magni ipsam! Odio, alias.
      </p>
      <p>Beatae ex impedit quidem suscipit, pariatur est magnam vero. Nobis quasi mollitia voluptates veniam doloremque expedita, sunt reprehenderit rem perspiciatis enim. Voluptas porro, fuga quae veritatis veniam aspernatur harum consectetur!
      </p>
      <p>Nam nisi quisquam necessitatibus repellendus vel amet debitis quasi architecto voluptate possimus error maxime, eaque sit placeat expedita labore minima quos sapiente at sed. Aut unde laborum accusamus, reprehenderit laudantium?
      </p>
      <h3>Sur quoi je m’amuse</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta suscipit dolore voluptates veritatis vero ut voluptate aperiam inventore expedita eos iste, tempora dignissimos, saepe eligendi non quidem sunt quasi, explicabo.
      </p>
      <p>Expedita, minus. Ratione recusandae, nam ipsa atque perferendis iusto accusantium at optio odit commodi. Eaque voluptatum nihil doloribus deserunt, voluptatibus ad, quis, sed molestiae illo iusto suscipit reprehenderit laboriosam in!
      </p>
      <p>Labore natus illum voluptatum excepturi sapiente quidem magni quod omnis commodi accusantium ipsum incidunt odit consectetur non totam harum vitae consequatur quibusdam architecto, error tenetur nisi suscipit dolorem nemo. Quam.
      </p>
      <p>Illum velit repellat, sunt repellendus enim, expedita architecto praesentium qui repudiandae illo molestias corporis modi ex est laborum optio placeat! Quam molestiae, architecto, aliquid suscipit hic modi ab veniam labore.
      </p>
      <p>Porro, animi! Ratione totam sequi quae reiciendis natus odio possimus minima pariatur dolorum id, facere, voluptas saepe porro eos cupiditate similique obcaecati, at repellendus ut. Optio officiis eveniet, officia nihil?
      </p>
      <h4>Sur quoi je m’amuse</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio amet iusto ex, similique sapiente neque laboriosam, quidem illo tenetur nulla omnis delectus exercitationem perspiciatis, suscipit est doloremque iure ducimus. Aliquid.
      </p>
      <p>Ullam dolore placeat rem praesentium facere culpa quo, maiores, similique consequatur odit voluptatem, quos, accusamus repellendus impedit enim voluptates explicabo perspiciatis recusandae ipsam? Vitae, eveniet quasi quae odio, sit odit.
      </p>
      <p>Ipsa mollitia, quisquam quam consequuntur et suscipit cumque ex ratione provident reiciendis aspernatur. Sed ipsam, qui libero architecto et, minima voluptatem doloribus, voluptatibus temporibus, non pariatur sunt vel consequuntur quis.
      </p>
      <p>Odio voluptate fuga similique voluptatem commodi animi esse neque, dolor enim repudiandae doloribus, aliquid, ipsum quod. Sunt minima aut inventore dicta molestiae nostrum molestias facilis doloribus libero, temporibus ullam vero!
      </p>
      <p>Facilis dolor ipsa dolorum vel, expedita omnis atque, rerum velit incidunt ipsum aperiam nisi voluptates nobis quod ab ducimus ratione harum. Culpa vel minima ratione explicabo, reprehenderit sed pariatur asperiores.
      </p>
      <p>Rerum, voluptate at sit dolor eaque dolorum ratione doloremque aspernatur reprehenderit aliquid labore eius ullam voluptates, animi blanditiis ea iure dolorem voluptatum pariatur corporis laborum neque. Natus, nesciunt perspiciatis quasi.
      </p>
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
