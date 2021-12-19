let graphqlEndpoint = "graphql-lt4.bandchain.org/v1/graphql"

let headers = {"Authorization": "There are a bunch of ways to get a token in here"}

// This is the basic http link
let httpLink = ApolloClient.Link.HttpLink.make(
  ~uri=_ => "https://" ++ graphqlEndpoint,
  ~headers=Obj.magic(headers),
  (),
)

// This is a link to handle websockets (used by subscriptions)
let wsLink = {
  open ApolloClient.Link.WebSocketLink
  make(
    ~uri="ws://" ++ graphqlEndpoint,
    ~options=ClientOptions.make(
      // Auth headers
      ~connectionParams=ConnectionParams(Obj.magic({"headers": headers})),
      ~reconnect=true,
      (),
    ),
    (),
  )
}

// This is a splitter that intelligently routes requests through http or websocket depending on type
let terminatingLink = ApolloClient.Link.split(~test=({query}) => {
  let definition = ApolloClient.Utilities.getOperationDefinition(query)
  switch definition {
  | Some({kind, operation}) => kind === "OperationDefinition" && operation === "subscription"
  | None => false
  }
}, ~whenTrue=wsLink, ~whenFalse=httpLink)

let client = {
  open ApolloClient
  make(
    ~cache=Cache.InMemoryCache.make(),
    ~connectToDevTools=true,
    ~defaultOptions=DefaultOptions.make(
      ~mutate=DefaultMutateOptions.make(~awaitRefetchQueries=true, ~errorPolicy=All, ()),
      ~query=DefaultQueryOptions.make(~fetchPolicy=NetworkOnly, ~errorPolicy=All, ()),
      ~watchQuery=DefaultWatchQueryOptions.make(~fetchPolicy=NetworkOnly, ~errorPolicy=All, ()),
      (),
    ),
    ~link=terminatingLink,
    (),
  )
}
