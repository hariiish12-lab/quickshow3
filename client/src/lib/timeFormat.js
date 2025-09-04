const timeFormat = (minutes) => {
  if (!minutes || isNaN(minutes)) return "N/A";

  const hours = Math.floor(minutes / 60);
  const minutesRemainder = minutes % 60;

  if (hours > 0) {
    return `${hours}h ${minutesRemainder}m`;
  }
  return `${minutesRemainder}m`;
};

export default timeFormat;
