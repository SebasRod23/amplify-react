// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserInfo, Post, Alerts } = initSchema(schema);

export {
  UserInfo,
  Post,
  Alerts
};