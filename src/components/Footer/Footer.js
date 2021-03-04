import React from 'react';
import SocialMediaLinks from '../Links/SocialMediaLinks';

function Footer() {
  return (
    <div >
      <SocialMediaLinks />
      <div className="footer-copyright">
        <span>© 2021 Delish Theme 01</span>
        <span> Powered by <a
            href="https://www.google.com/"
            rel="noreferrer"
            target="_blank"
          >KateChantha</a>
        </span>
      </div>
    </div>
  )
}

export default Footer
