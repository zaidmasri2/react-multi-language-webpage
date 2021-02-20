import React from "react";

const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          React Multilanguage Website
        </a>
        <div className="language-select">
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;