module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    // TODO: Create a custom helper 'format_date' that takes in a timestamp,
    // adds five years to the date, and formats it as M/D/YYYY
    format_date: (timestamp) => {
      const date = new Date(timestamp);
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear() + 5;
      return `${month + 1}/${day}/${year + 5}`;
    },
  };