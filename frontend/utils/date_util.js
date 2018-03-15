export const convertMonthShortToLong = shortMonth => {
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

export const convertMonthShortToNumStr = (shortMonth) => {
  switch(shortMonth) {
    case "Jan":
      return "01";
    case "Feb":
      return "02";
    case "Mar":
      return "03";
    case "Apr":
      return "04";
    case "May":
      return "05";
    case "Jun":
      return "06";
    case "Jul":
      return "07";
    case "Aug":
      return "08";
    case "Sep":
      return "09";
    case "Oct":
      return "10";
    case "Nov":
      return "11";
    case "Dec":
      return "12";
  }
};

export const daysRemainingUntilEnd = endDate => {
  let today = new Date();
  let end = new Date(endDate.slice(0, 10));
  let diff = (end - today)/(1000*60*60*24);  // end - today [in ms]
  // /1000 in s /60 min /60 hr /24 days
  return Math.floor(diff);
};

export const formatAsMonthDDYYYY = inputDate => {
  // input format: Date()
  // target output format: "February 20, 2018"
  let today = inputDate;
  let formattedOutput = "";
  let day = parseInt(today.slice(8,10), 10).toString();

  formattedOutput = convertMonthShortToLong(today.slice(4,7)).concat(" ");
  formattedOutput = formattedOutput.concat(day).concat(", ");
  formattedOutput = formattedOutput.concat(today.slice(10, 15));

  return formattedOutput;
};

export const formatAsYYYYMMDD = inputDate => {
  // input format: Date()
  // target output format: "2018-02-20"
  let formattedOutput = "";
  let month = convertMonthShortToNumStr(inputDate.slice(4,7));
  let day = parseInt(inputDate.slice(8,10), 10).toString();

  if (day.length < 2) {
    day = "0".concat(day);
  }

  formattedOutput = formattedOutput.concat(inputDate.slice(11, 15));
  formattedOutput = formattedOutput.concat("-");
  formattedOutput = formattedOutput.concat(month);
  formattedOutput = formattedOutput.concat("-");
  formattedOutput = formattedOutput.concat(day);

  return formattedOutput;
};

// let today = new Date();
// let end = new Date(endDate.slice(0, 10));
// let diff = (end - today)/(1000*60*60*24);  // end - today [in ms]
// // /1000 in s /60 min /60 hr /24 days
// return diff;
