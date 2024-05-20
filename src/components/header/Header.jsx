import './Header.scss'

function Header() {
  return (
    <div className="header-wrapper">
      <div className='header-company'>
        <img className='header-logo' src='logo.png' alt='logo'></img>
        InSystem Technologies
      </div>
      <div className='header-tagline'>
        <h1>Новый взгляд на переработку отходов</h1>
      </div>
      <div className='header-title'>
      <h2>Откройте для себя прорывные технологии в области баллистической сепарации, которые повышают эффективность и экологичность переработки отходов.</h2>
      </div>
    </div>
  );
}

export default Header;
