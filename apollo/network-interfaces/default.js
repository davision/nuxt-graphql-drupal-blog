import { createNetworkInterface } from 'apollo-client'
export default (ctx) => createNetworkInterface({
  uri: 'http://www.davidlicen.dev/graphql'
})
