import React, { memo } from "react";

function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Bioz Test</h5>
      <nav className="my-2 my-md-0 mr-md-3"></nav>
    </div>
  );
}

export default memo(Navbar);