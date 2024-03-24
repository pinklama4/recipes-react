import React from "react";
import './Header.scss'

export function Header() {
    return(
      <header>
          <div className="header-content">
              <div className="logo">
                  <a href="/"><p>КУКИНГ</p></a>
              </div>
              <nav>
                  <ul>
                      <li>
                          <a href="/Рецепты">Мои рецепты</a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
    );
}