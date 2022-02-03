import React from 'react';
import {
  Button,
  Divider,
  Flex,
  Heading,
  IconAssignment,
  IconAccountCircle,
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
            <Button variation='link'>
              <Flex alignItems='center' justifyContent='space-between'>
                Dashboard
                <IconAssignment fontSize='1.5rem' />
              </Flex>
            </Button>
            <Button variation='link'>
              <Flex alignItems='center' justifyContent='space-between'>
                Profile
                <IconAccountCircle fontSize='1.5rem' />
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
