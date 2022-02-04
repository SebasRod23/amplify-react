import React from 'react';
import { Button, Flex, Heading, IconAdd, View } from '@aws-amplify/ui-react';
import Post from '../ui-components/Post';

const Dashboard = () => {
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
    </View>
  );
};

export default Dashboard;
