
const Header = ({logoUrl}) => {

  return (
    <header className="transparent">
        <div className="info">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="column">Working Hours Monday - Friday <span className="id-color"><strong>08:00-16:00</strong></span></div>
                    <div className="column">Toll Free <span className="id-color"><strong>1800.899.900</strong></span></div>
                    {/* social icons */}
                    <div className="column social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-rss" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                    <a href="#"><i className="fa fa-envelope-o" /></a>
                    </div>
                    {/* social icons close */}
                </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                {/* logo begin */}
                <div id="logo">
                    <a href="index.html">
                        <img className="logo w-75" src={logoUrl} alt="" />
                    </a>
                </div>
                {/* logo close */}
                {/* small button begin */}
                <span id="menu-btn" />
                {/* small button close */}
                {/* mainmenu begin */}
                <nav>
                    <ul id="mainmenu" className="ms-2">
                    <li><a href="#section-hero">Início<span /></a></li>
                    <li><a href="#section-about">Sobre<span /></a></li>
                    <li><a href="#section-speakers">Palestrantes<span /></a></li>
                    <li><a href="#section-schedule">Agenda<span /></a></li>
                    <li><a href="#section-register">Inscrição<span /></a></li>
                    <li><a href="#section-register">Videos Anteriores<span /></a></li>
                    </ul>
                </nav>
                {/* mainmenu close */}
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;