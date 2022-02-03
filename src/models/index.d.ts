import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Alerts {
  readonly op_yr?: boolean;
  readonly or_yr?: boolean;
  readonly or_yo?: boolean;
  constructor(init: ModelInit<Alerts>);
}

type UserInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserInfo {
  readonly id: string;
  readonly email?: string;
  readonly organization?: string;
  readonly region?: string;
  readonly alert?: Alerts;
  readonly Posts?: (Post | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserInfo, UserInfoMetaData>);
  static copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo, UserInfoMetaData>) => MutableModel<UserInfo, UserInfoMetaData> | void): UserInfo;
}

export declare class Post {
  readonly id: string;
  readonly position?: string;
  readonly region?: string;
  readonly organization?: string;
  readonly hasVisaSponsor?: boolean;
  readonly userinfoID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}