import { Button, Card, Flex, Heading, Text } from '@aws-amplify/ui-react';
import React from 'react';

const Post = (props) => {
  return (
    <Card width='95vw' margin='10px auto' border='1px solid grey'>
      <Flex
        alignContent='center'
        alignItems='center'
        justifyContent='space-between'
        gap='25%'
        padding='5px 15px'
      >
        <Flex
          alignItems='center'
          alignContent='center'
          justifyContent='left'
          flex='max-content'
          width='fit-content'
          gap='5%'
        >
          <Heading level={5} fontStyle='bold' minWidth='20%' textAlign='left'>
            {props.org.toUpperCase()}
          </Heading>
          <Text minWidth='20%' textAlign='left'>
            {props.pos}
          </Text>
          <Text minWidth='20%'>{props.reg.toUpperCase()}</Text>
          {props.hasVisaSponsor && (
            <Text minWidth='20%' textAlign='left' color='#04956e'>
              Visa Sponsored
            </Text>
          )}
        </Flex>
        <Button variation='primary' size='small'>
          Connect
        </Button>
      </Flex>
    </Card>
  );
};

export default Post;
