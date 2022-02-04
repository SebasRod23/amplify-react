import React, { useEffect, useState } from 'react';
import { Predicates, SortDirection } from 'aws-amplify';
import { Button, Flex, Heading, IconAdd, View } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';

import Post from '../ui-components/Post';
import { Post as iPost } from '../models';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    DataStore.query(iPost, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    }).then((models) => {
      setPosts([...models]);
    });
  }, []);

  return (
    <View padding='3%'>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        margin='0 auto 10px'
      >
        <Heading level={5}>Recently posted:</Heading>
        <Flex alignItems='center' gap='5%'>
          <Button size='small'>Request</Button>
          <Button variation='primary' size='small'>
            <Flex alignItems='center' justifyContent='center'>
              <IconAdd fontSize='1.25rem' />
              New
            </Flex>
          </Button>
        </Flex>
      </Flex>

      {posts.map((post) => {
        return (
          <Post
            org={post.organization}
            pos={post.position}
            reg={post.region}
            hasVisaSponsor={post.hasVisaSponsor}
            key={post.id}
          />
        );
      })}
    </View>
  );
};

export default Dashboard;
