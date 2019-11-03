import React, { useState } from "react";
import map from "lodash/map";
import deburr from "lodash/deburr";
import kebabCase from "lodash/kebabCase";
import ReactImageFallback from "react-image-fallback";
import { IMAGE_URL, FALLBACK_IMAGE } from "../../constants";
import { Link } from "react-router-dom";

const CastWithCrew = ({ cast }) => {
  console.log("TCL: CastWithCrew -> cast", cast);

  // Used Hooks for cast togle button and number of cast members to show
  const [showAllCastBtn, toggleFullCastBtn] = useState(false);
  // Initially Showing 6 members only
  const [castToShow, toggleFullCastShow] = useState(cast.slice(0, 6));

  const viewFullCastHandler = () => {
    toggleFullCastBtn(true); // Hide View all cast button
    toggleFullCastShow([...cast]);
  };

  return (
    <div className="col-md-8 pr-4">
      <h6>Cast</h6>
      <ul className="row">
        {map(castToShow, ({ name, id, profile_path, character }) => (
          <li key={id} className="col-sm-12 col-md-6 mb-3">
            <Link
              to={`/people/${id}/${kebabCase(name)}`}
              className="d-flex rounded-card"
            >
              <ReactImageFallback
                src={`${IMAGE_URL + "/w92" + profile_path}`}
                fallbackImage={FALLBACK_IMAGE}
                alt={name}
                className="cover-fit"
              />
              <span className="flex-1-1-a py-2 px-3">
                <span>
                  {deburr(name)} as <i>{character}</i>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {!showAllCastBtn && (
        <button
          className="btn btn-block btn-light active"
          onClick={() => viewFullCastHandler()}
        >
          View all cast
        </button>
      )}
    </div>
  );
};

export default CastWithCrew;
