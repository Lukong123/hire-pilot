import React from "react";
// import './Footer.css';
// import { getFooterCopy, getFullYear } from './utils/utils';
import {getFooterCopy, getFullYear } from '../utils/utils';

function Footer() {
    return(
        <footer className="footer">
        <div class='rights'>
          {getFooterCopy(true)} - {getFullYear()}
        </div>
        <div class='social'> 
          <a href='#ig'>Instagram</a>
          <a href='#ig'>Faceboook</a>
          <a href='#ig'>Twitter</a>

        </div>
        <div class='foot-nav'>
        <a href='#ig'>Help</a>
        <a href='#ig'>Contact</a>
        <a href='#ig'>Privacy Policy</a>
        <a href='#ig'>Term of Use</a>
          
        </div>
      </footer>
    );
}

export default Footer;