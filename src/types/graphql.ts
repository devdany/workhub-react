export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
};


export type QueryGetUserArgs = {
  userId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  username: Scalars['String'];
  profileImg?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  headLine?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  lastLogin: Scalars['String'];
  isInitalize: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp: LoginUser;
  confirmToken: LoginUser;
  signIn: LoginUser;
  editProfile: User;
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationConfirmTokenArgs = {
  token: Scalars['String'];
};


export type MutationSignInArgs = {
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
};


export type MutationEditProfileArgs = {
  userId: Scalars['Float'];
  profileImg?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  headLine?: Maybe<Scalars['String']>;
};

export type LoginUser = {
  __typename?: 'LoginUser';
  user: User;
  token: Scalars['String'];
};
