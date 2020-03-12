import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ICT from './ICT';
import About from './about';
import Services from './Services';
import Partners from './Partners';
import '../styles/main.css';
import ButtonMenu from './buttonMenu';

const Layout = () => {
  const [Showmenu, setShowmenu] = useState(false);
  function onClickHandler() {
    setShowmenu(!Showmenu);
  }
  function divclick() {
    setShowmenu(false);
  }
  const clicked = Showmenu;
  return (
    <div>
      <div className="w-full p-5 lg:hidden flex flex-row items-center justify-end">
        <ButtonMenu clicky={onClickHandler} clicked={clicked} />
      </div>
      <div onClick={divclick}>
        <Header clicked={clicked} close={divclick} />
        <ICT />
        <About />
        <Services />
        <Partners />
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
