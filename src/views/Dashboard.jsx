import React, { useEffect, useState } from 'react';
import { Predicates, SortDirection } from 'aws-amplify';
import { Button, Flex, Heading, IconAdd, View } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';

import Post from '../ui-components/Post';
import { Post as iPost } from '../models';
import FormModal from '../ui-components/FormModal';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('req' | 'post');
  const [posts, setPosts] = useState([]);

  const handleOpen = (type) => {
    setOpen(true);
    setType(type);
  };
  const handleClose = (type) => {
    setOpen(false);
    setType(type);
  };

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
          <Button size='small' onClick={() => handleOpen('req')}>
            Request
          </Button>
          <Button
            variation='primary'
            size='small'
            onClick={() => handleOpen('post')}
          >
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

      <FormModal open={open} handleClose={handleClose} type={type} />
    </View>
  );
};

export default Dashboard;
