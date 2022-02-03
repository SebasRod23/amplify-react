import React from 'react';
import {
  Button,
  Divider,
  Flex,
  Heading,
  IconAccountCircle as Icon,
  View,
} from '@aws-amplify/ui-react';

const AppBar = () => {
  return (
    <>
      <View>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          padding='10px 25px'
        >
          <Heading level={4}>MLH Network</Heading>
          <Flex gap='20px' alignItems='center'>
            <Button variation='link'>Dashboard</Button>
            <Button variation='link'>
              <Flex alignItems='center' justifyContent='space-between'>
                Profile
                <Icon fontSize='1.5rem' />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </View>
      <Divider />
    </>
  );
};

export default AppBar;
