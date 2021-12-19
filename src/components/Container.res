let containerStyle = ReactDOM.Style.make(
  ~height="100%",
  ~width="100%",
  ~display="flex",
  ~justifyContent="center",
  ~alignItems="center",
  ~padding="16px",
  (),
)

@react.component
let make = (~children) => {
  <div style=containerStyle> children </div>
}
