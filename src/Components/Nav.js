const Nav = ({ setApi, changeApi }) => {
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

  const horizontalLine = {
    backgroundColor: '#E5E5E5',
    height: 2,
    padding: 0,
    marginBottom: 20,
    width: '100%'
  }

  const setActiveButton = () => {
    const previous = document.querySelector('activeMuseumButton');
    if (previous) previous.classList.remove('.activeMuseumButton')

    const activeLink = document.querySelector('.activeMuseumButton')
    activeLink.className = 'activeMuseumButton'
  } 

  return (
    <div style={navStyle__container} className="navStyle__container">
      <div style={navStyle__linksContainer} className="navStyle__linksContainer">
        <button className="navStyle__linksContainer__link" onClick={() => changeApi('Met')}>Met Museum</button>
        <button className="navStyle__linksContainer__link" onClick={() => changeApi('AIC')}>Art Institute Chicago</button>
      </div>
      <div style={horizontalLine}></div>
    </div>
  )
}

export default Nav
