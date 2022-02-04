import React, { useState } from 'react';
import { Modal } from '@mui/material';
import {
  Button,
  Divider,
  Flex,
  Heading,
  Radio,
  RadioGroupField,
  Text,
  TextField,
  View,
} from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';

import { Post } from '../models';

const FormModal = (props) => {
  const [org, setOrg] = useState('');
  const [pos, setPos] = useState('');
  const [reg, setReg] = useState('');
  const [hasVisaSponsor, setVisaSponsor] = useState(false);

  const makeReq = () => {
    if (org === '' || pos === '' || reg === '') {
      //TODO: Add error message
      console.log('Fill the fields correctly!');
      return;
    }
    //TODO: Make email request
    props.handleClose();
    console.log('Request made');
  };

  const createPost = () => {
    if (org === '' || pos === '' || reg === '') {
      //TODO: Add error message
      console.log('Fill the fields correctly!');
      return;
    }

    DataStore.save(
      new Post({
        position: pos,
        region: reg,
        organization: org,
        hasVisaSponsor: Boolean(hasVisaSponsor),
        userinfoID: 'a3f4095e-39de-43d2-baf4-f8c16f0f6f4d', //TODO: Check how to get the id of the current user
      }),
    ).then(() => {
      props.handleClose();
      window.location.reload();
    });
  };

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <View backgroundColor='white' margin='10% auto' padding='1%' width='40vw'>
        <Heading level={4} margin='0 0 5px'>
          {props.type === 'req' ? 'New request' : 'New Job Post'}
        </Heading>
        <Divider size='large' />

        <Flex direction='column' alignItems='center' gap='20px' padding='10px'>
          <Flex justifyContent='space-between' alignItems='center' width='90%'>
            <Text>Organization:</Text>
            <TextField
              height='30px'
              maxLength={20}
              onChange={(e) => {
                setOrg(e.currentTarget.value);
              }}
            />
          </Flex>
          <Flex justifyContent='space-between' alignItems='center' width='90%'>
            <Text>Position:</Text>
            <TextField
              height='30px'
              maxLength={20}
              onChange={(e) => {
                setPos(e.currentTarget.value);
              }}
            />
          </Flex>
          <Flex justifyContent='space-between' alignItems='center' width='90%'>
            <Text>Region:</Text>
            <TextField
              height='30px'
              maxLength={4}
              onChange={(e) => {
                setReg(e.currentTarget.value);
              }}
            />
          </Flex>
          <Flex justifyContent='space-between' alignItems='center' width='90%'>
            <Text>
              {props.type === 'req'
                ? 'Visa Sponsorship Required?'
                : 'Would you need a Visa Sponsorship?'}
            </Text>
            <RadioGroupField
              name='visa'
              direction='row'
              onChange={(e) => setVisaSponsor(e.target.value)}
              defaultValue={false}
              justifyContent='center'
              flex='max-content'
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </RadioGroupField>
          </Flex>
          <Button
            variation='primary'
            onClick={props.type === 'req' ? makeReq : createPost}
          >
            {props.type === 'req' ? 'Make Request' : 'Create Post'}
          </Button>
        </Flex>
      </View>
    </Modal>
  );
};

export default FormModal;
