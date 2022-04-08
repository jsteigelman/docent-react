const Nav = () => {
  const navStyle__container = {
    alignItems: 'center',
    color: 'light-gray',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  }

  const navStyle__linksContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '18px 0',
    width: '100%',
  }

  const navStyle__linksContainer__links = {
    fontSize: 30,
    padding: 0,
    margin: 0,
  }

  const horizontalLine = {
    backgroundColor: 'lightgray',
    height: 2,
    padding: 0,
    marginBottom: 20,
    width: '100%'
  }

  return (
    <div style={navStyle__container}>
      <div style={navStyle__linksContainer}>
        <p style={navStyle__linksContainer__links}>Met Museum</p>
        <p style={navStyle__linksContainer__links}>Art Institute Chicago</p>
      </div>
      <div style={horizontalLine}></div>
    </div>
  )
}

export default Nav
