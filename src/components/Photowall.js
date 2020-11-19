import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photowall(props) {
  return (
    <div>
      <Link to="/addPhoto" className="addIcon"></Link>
      {/* <button className="addIcon" onClick={() => props.onNavigate()}> </button> */}
      <div className="photoGrid">
        {props.posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
