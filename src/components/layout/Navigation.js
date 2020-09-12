import React from "react";
import NavLink from "react-router-dom/NavLink";
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import { movieCategories, tvCategories } from "../../constants";
import Github from "react-bytesize-icons/GitHub";
import watchMoLogo from "../../assets/images/wmo-light.png";
import { repoClickHandler } from "../../utils";
import Attribution from "./Attribution";
import { Spring } from "react-spring/renderprops";
import { logoSpring } from "../../constants/spring-configs";

const Navigation = () => (
  <nav className="navigation ml-auto position-relative">
    <ul className="d-flex flex-column">
      <Spring from={logoSpring.from} to={logoSpring.to}>
        {(animatedSpring) => (
          <li className="logo" style={animatedSpring}>
            <NavLink to="/" title="Browse">
              WatchMo
            </NavLink>
          </li>
        )}
      </Spring>
      <li>
        <NavLink to="/search" title="Find Here">
          Finder
        </NavLink>
      </li>
      <li>
        <span>Movies</span>
        <ul className="droplist my-2 d-flex flex-wrap align-items-center">
          {map(movieCategories, (c, i) => (
            <li key={i} className="mr-1">
              <NavLink className="p-1" to={`/movie/${kebabCase(c)}`}>
                {c}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <span>TV Shows</span>
        <ul className="droplist my-2 d-flex flex-wrap align-items-center">
          {map(tvCategories, (c, i) => (
            <li key={i} className="mr-1">
              <NavLink className="p-1" to={`/tv/${kebabCase(c)}`}>
                {c}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* <NavLink to="/tv-shows" title="See TV Shows">
          TV Shows
        </NavLink> */}
      </li>
      <li>
        <small className="d-block mt-4 text-monospace">
          <span className="text-muted">2020.</span>
          <span
            onClick={repoClickHandler}
            className="c-hand ml-2 align-baseline"
          >
            <Github width="18" className="align-middle" />
            <img
              className="ml-2"
              width="48"
              src={watchMoLogo}
              alt="Code Repository"
            />
          </span>
        </small>
        <Attribution />
      </li>
    </ul>
  </nav>
);

export default Navigation;
