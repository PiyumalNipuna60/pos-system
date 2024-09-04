import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <button>
        <Link to="/about">click</Link>
      </button>
    </div>
  );
}
