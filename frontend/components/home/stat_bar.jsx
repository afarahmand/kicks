import React from 'react';

// let today = new Date();
// let end = new Date(endDate.slice(0, 10));
// let diff = (end - today)/(1000*60*60*24);  // end - today [in ms]
// // /1000 in s /60 min /60 hr /24 days
// return diff;

const convertMonthFormat = (shortMonth) => {
  switch(shortMonth) {
    case "Jan":
      return "January";
    case "Feb":
      return "February";
    case "Mar":
      return "March";
    case "Apr":
      return "April";
    case "May":
      return "May";
    case "Jun":
      return "June";
    case "Jul":
      return "July";
    case "Aug":
      return "August";
    case "Sep":
      return "September";
    case "Oct":
      return "October";
    case "Nov":
      return "November";
    case "Dec":
      return "December";
  }
};

const displayTodaysDate = () => {
  let today = Date();
  let formattedOutput = "";
  let day = parseInt(today.slice(8,10), 10).toString();

  formattedOutput = convertMonthFormat(today.slice(4,7)).concat(" ");
  formattedOutput = formattedOutput.concat(day).concat(", ");
  formattedOutput = formattedOutput.concat(today.slice(10, 15));

  return formattedOutput;
};

const StatBar = props => {
  return (
    <section className="stat-bar content-wide">
      <ul className="content-narrow">
        <li>
          <div>
            <span className="stat-bar-title">
              {displayTodaysDate()}
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
