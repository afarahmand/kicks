import React from 'react';

const StatBar = props => {
  // let today = new Date();
  return (
    <section className="stat-bar content-wide">
      <ul className="content-narrow">
        <li>
          <div>
            <span className="stat-bar-title">
              Today's Date
            </span>
            <span className="stat-bar-body">
              Bringing creative projects to life.
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="stat-bar-title">
              Total Backers
            </span>
            <span className="stat-bar-body">
              14,168,977
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="stat-bar-title">
              Funded Projects
            </span>
            <span className="stat-bar-body">
              138,577
            </span>
          </div>
        </li>
        <li>
          <div>
            <span className="stat-bar-title">
              Live Projects
            </span>
            <span className="stat-bar-body">
              3,843
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default StatBar;
