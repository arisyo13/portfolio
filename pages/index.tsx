import React from 'react';
import Hero from '../src/panels/Hero';
import SanityClient from '../client';
import { queryProjects, queryPosts, queryAuthor } from '../src/utils/queries';
import { ISimpleProject } from '../src/models/SimpleProject';
import { ISimpleArticle } from '../src/models/SimplePost';
import { ISimpleAuthor } from '../src/models/SimpleAuthor'

type Props = {
  Projects: ISimpleProject[],
  Posts: ISimpleArticle[],
  Author: ISimpleAuthor[]
}

const Home = ({ Projects, Posts, Author }: Props) => {
  return <Hero projects={Projects} author={Author[0]} />
}

export default Home;

export async function getStaticProps() {
  const Projects = await SanityClient.fetch(queryProjects).catch(error => console.error(error));
  const Posts = await SanityClient.fetch(queryPosts).catch(error => console.error(error));
  const Author = await SanityClient.fetch(queryAuthor).catch(error => console.error(error));
  

  return { props: { Projects, Posts, Author }}
  
}