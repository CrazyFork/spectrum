// @flow
// $FlowFixMe
import { graphql, gql } from 'react-apollo';
import { frequencyInfoFragment } from './fragments/frequency/frequencyInfo';

/*
  Create a new frequency
*/
const CREATE_FREQUENCY_MUTATION = gql`
  mutation createFrequency($input: CreateFrequencyInput!) {
    createFrequency (input: $input) {
      ...frequencyInfo
    }
  }
  ${frequencyInfoFragment}
`;

const CREATE_FREQUENCY_OPTIONS = {
  props: ({ input, mutate }) => ({
    createFrequency: input =>
      mutate({
        variables: {
          input,
        },
      }),
  }),
};

export const createFrequencyMutation = graphql(
  CREATE_FREQUENCY_MUTATION,
  CREATE_FREQUENCY_OPTIONS
);

/*
  Delete a frequency
*/
const DELETE_FREQUENCY_MUTATION = gql`
  mutation deleteFrequency($id: ID!) {
    deleteFrequency (id: $id)
  }
`;

const DELETE_FREQUENCY_OPTIONS = {
  props: ({ id, mutate }) => ({
    deleteFrequency: id =>
      mutate({
        variables: {
          id,
        },
      }),
  }),
};

export const deleteFrequencyMutation = graphql(
  DELETE_FREQUENCY_MUTATION,
  DELETE_FREQUENCY_OPTIONS
);

/*
  Edit a new community
*/
const EDIT_FREQUENCY_MUTATION = gql`
  mutation editFrequency($input: EditFrequencyInput!) {
    editFrequency (input: $input) {
      ...frequencyInfo
    }
  }
  ${frequencyInfoFragment}
`;

const EDIT_FREQUENCY_OPTIONS = {
  props: ({ input, mutate }) => ({
    editFrequency: input =>
      mutate({
        variables: {
          input,
        },
      }),
  }),
};

export const editFrequencyMutation = graphql(
  EDIT_FREQUENCY_MUTATION,
  EDIT_FREQUENCY_OPTIONS
);

/*
  Join or leave a frequency
*/
const TOGGLE_FREQUENCY_SUBSCRIPTION_MUTATION = gql`
  mutation toggleFrequencySubscription($id: ID!) {
    toggleFrequencySubscription (id: $id) {
      ...frequencyInfo
    }
  }
  ${frequencyInfoFragment}
`;

const TOGGLE_FREQUENCY_SUBSCRIPTION_OPTIONS = {
  props: ({ id, mutate }) => ({
    toggleFrequencySubscription: ({ id }) =>
      mutate({
        variables: {
          id,
        },
      }),
  }),
};

export const toggleFrequencySubscriptionMutation = graphql(
  TOGGLE_FREQUENCY_SUBSCRIPTION_MUTATION,
  TOGGLE_FREQUENCY_SUBSCRIPTION_OPTIONS
);

/*
  Approve or block a user in a private frequency
*/
const TOGGLE_PENDING_USER_MUTATION = gql`
  mutation togglePendingUser($input: TogglePendingUserInput!) {
    togglePendingUser(input: $input) {
      ...frequencyInfo
    }
  }
  ${frequencyInfoFragment}
`;

const TOGGLE_PENDING_USER_OPTIONS = {
  props: ({ input, mutate }) => ({
    togglePendingUser: input =>
      mutate({
        variables: {
          input,
        },
      }),
  }),
};

export const togglePendingUserInFrequencyMutation = graphql(
  TOGGLE_PENDING_USER_MUTATION,
  TOGGLE_PENDING_USER_OPTIONS
);

/*
  Join or leave a frequency
*/
const UNBLOCK_USER_MUTATION = gql`
  mutation unblockUser($input: UnblockUserInput!) {
    unblockUser(input: $input) {
      ...frequencyInfo
    }
  }
  ${frequencyInfoFragment}
`;

const UNBLOCK_USER_OPTIONS = {
  props: ({ input, mutate }) => ({
    unblockUser: input =>
      mutate({
        variables: {
          input,
        },
      }),
  }),
};

export const unblockUserInFrequencyMutation = graphql(
  UNBLOCK_USER_MUTATION,
  UNBLOCK_USER_OPTIONS
);

export const CHECK_UNIQUE_FREQUENCY_SLUG_QUERY = gql`
  query getFrequency($slug: String, $community: String) {
    frequency(slug: $slug, community: $community) {
      ...frequencyInfo
    }
  }
  ${frequencyInfoFragment}
`;