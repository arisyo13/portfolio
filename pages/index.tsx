import React from 'react';
import SanityClient from '../client';
import Hero from '../src/panels/Hero';
import Contact from '../src/panels/Contact';
import { queryProjects, queryPosts, queryAuthor } from '../src/utils/queries';
import { ISimpleProject, ISimpleArticle, ISimpleAuthor } from '../src/models';

type Props = {
  Projects: ISimpleProject[],
  Posts: ISimpleArticle[],
  Author: ISimpleAuthor[]
}

const Home = ({ Projects, Posts, Author }: Props) => {
  return (
    <React.Fragment>
      <Hero projects={Projects} author={Author[0]} />
      <Contact />
    </React.Fragment>
  )
}

export default Home;

export async function getStaticProps() {
  
  const Projects = await SanityClient.fetch(queryProjects).catch(error => console.error(error));
  const Posts = await SanityClient.fetch(queryPosts).catch(error => console.error(error));
  const Author = await SanityClient.fetch(queryAuthor).catch(error => console.error(error));

  return { props: { Projects, Posts, Author }}
}