import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="mb-footer">
      <div className="mb-footer__inner">
        <div className="mb-footer__col">
          <h4>MegaBlog</h4>
          <p>Sharing tech articles and tutorials.</p>
        </div>

        <div className="mb-footer__col">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div className="mb-footer__col">
          <h4>Contact</h4>
          <p>hello@megablog.example</p>
        </div>
      </div>
      <div className="mb-footer__bottom">© {new Date().getFullYear()} MegaBlog. All rights reserved.</div>
    </footer>
  )
}

export default Footer