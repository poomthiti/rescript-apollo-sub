let thStyle = ReactDOM.Style.make(
  ~padding="14px",
  ~backgroundColor="#89CFF0",
  ~borderRadius="4px",
  ~minWidth="40px",
  (),
)

let rowStyle = ReactDOM.Style.make(~textAlign="center", ())
let tdStyle = ReactDOM.Style.make(~padding="8px", ())

module ValidatorsSub = %graphql(`
    subscription GetValidators {
      validators {
        id
        moniker
        status
        tokens
        validator_report_count {
          count
        }
      }
    }
  `)

@react.component
let make = () => {
  let validatorsData = ValidatorsSub.use()

  <div
    style={ReactDOM.Style.make(
      ~height="100%",
      ~display="flex",
      ~alignItems="center",
      ~justifyContent="center",
      (),
    )}>
    <table>
      <thead>
        <tr>
          <th style=thStyle> {React.string("Id")} </th>
          <th style=thStyle> {React.string("Moniker")} </th>
          <th style=thStyle> {React.string("Status")} </th>
          <th style=thStyle> {React.string("Tokens")} </th>
        </tr>
      </thead>
      <tbody>
        {switch validatorsData {
        | {data: Some(data)} =>
          data.validators
          ->Belt.Array.map(item =>
            <tr key={string_of_int(item.id)} style=rowStyle>
              <td style=tdStyle> {string_of_int(item.id)->React.string} </td>
              <td style=tdStyle> {item.moniker->React.string} </td>
              <td style=tdStyle> {string_of_bool(item.status)->React.string} </td>
              <td style=tdStyle> {Js.Json.stringify(item.tokens)->React.string} </td>
            </tr>
          )
          ->React.array
        | _ => React.null
        }}
      </tbody>
    </table>
  </div>
}
