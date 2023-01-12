import React from "react";

function SocialLinks({ id, href, icon }) {
  return (
    <ul className="footer-icons">
      return (
      <li key={id}>
        <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
          <i className={icon}></i>
        </a>
      </li>
      );
    </ul>
  );
}

export default SocialLinks;
