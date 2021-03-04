import React from 'react';
import { FaFacebookSquare, FaInstagram  } from 'react-icons/fa'

function SocialMediaLinks() {
  return (
    <div>
      <a
        href="https://www.instagram.com/"
        rel="noreferrer"
        target="_blank"
      >
        <FaInstagram size={26} style={{ color: "red" }} />
      </a>{" "}
      &nbsp;
      <a
        href="https://www.facebook.com/"
        rel="noreferrer"
        target="_blank"
      >
        <FaFacebookSquare size={24} style={{ color: "red" }} />
      </a>
    </div>
  )
}

export default SocialMediaLinks
