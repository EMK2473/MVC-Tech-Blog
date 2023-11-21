module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (timestamp) => {
      const date = new Date(timestamp);
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month + 1}/${day}/${year}`;
    },
  };