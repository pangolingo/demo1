const style = { fontWeight: 'bold', color: 'red' }

const FancyLink = (props) => (
  <a style={style} onClick={props.onClick} href={props.href}>{props.children}</a>
)

export default FancyLink;