@react.component
let make = () => {
  <ApolloClient.React.ApolloProvider client=Apollo.client>
    <Container> <ValidatorsTable /> </Container>
  </ApolloClient.React.ApolloProvider>
}
