"use strict";

const [projectsData, skillsData] = getData();
console.log(projectsData, skillsData);

/**
 * Components
 */
{
  function App() {
    const [theme, setTheme] = React.useState("light-mode");
    const toggleTheme = () => {
      if (theme === "light-mode") {
        setTheme("dark-mode");
      } else {
        setTheme("light-mode");
      }
    };

    return (
      <div className={`app-wrapper ${theme}`}>
        <TopNav
          isLightMode={theme === "light-mode"}
          toggleTheme={toggleTheme}
        />
        <section id="base"></section>
        <section className="placeholder" id="home">
          Home Section
        </section>
        <section className="placeholder" id="about">
          About Section
        </section>
        <section className="placeholder" id="projects">
          Projects Section
        </section>
        <section className="placeholder" id="resume">
          Resume information
        </section>
      </div>
    );
  }

  function ToggleButton({ isLightMode, onToggle }) {
    const moonIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    );

    const sunIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>
    );

    return (
      <button
        type="button"
        className="theme-toggle-button button-1"
        onClick={onToggle}
      >
        {isLightMode ? sunIcon : moonIcon}
      </button>
    );
  }

  function TopNav({ isLightMode, toggleTheme }) {
    const [selected, setSelected] = React.useState("");
    const [showModal, setShowModal] = React.useState(false);

    const menuIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    );

    return (
      <header className="topnav">
        <nav className="flex">
          <a
            href="#base"
            className={`nav-item ${selected === "" && "active-nav"}`}
            onClick={() => setSelected("")}
          >
            Clemence Goh
          </a>
          <div className="mobile-none flex">
            <a
              className={`nav-item ${selected === "" && "home"}`}
              href="#home"
              onClick={() => setSelected("home")}
            >
              Home
            </a>
            <a
              className={`nav-item ${selected === "" && "about"}`}
              href="#about"
              onClick={() => setSelected("about")}
            >
              About
            </a>
            <a
              className={`nav-item ${selected === "" && "projects"}`}
              href="#projects"
              onClick={() => setSelected("projects")}
            >
              Projects
            </a>
            <a
              className={`nav-item ${selected === "" && "resume"}`}
              href="#resume"
              onClick={() => setSelected("resume")}
            >
              Resume
            </a>
          </div>
        </nav>

        <div className="mobile-none">
          <ToggleButton onToggle={toggleTheme} isLightMode={isLightMode} />
        </div>

        <div className="mobile-only flex">
          <ToggleButton onToggle={toggleTheme} isLightMode={isLightMode} />
          <button
            className="button-1"
            type="button"
            onClick={() => setShowModal(!showModal)}
          >
            {menuIcon}
          </button>
        </div>
      </header>
    );
  }

  function ProjectCard({ description, tags, link, src, name }) {
    return (
      <div className="project-card">
        <h3>{name}</h3>
        <div></div>
      </div>
    );
  }

  const appContainer = document.querySelector("#app");
  ReactDOM.render(React.createElement(App), appContainer);
}
