const Header = (props) => {
  return (
    <header>
        <h1>Task Tracker {props.title}</h1>
    </header>
  )
}

Header.defaultPropts = {
    title: 'Default Title'
}

export default Header
