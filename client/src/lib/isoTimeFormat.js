const isoTimeFormat = (dateTime) => {
  if (!dateTime) return "N/A";

  const data = new Date(dateTime);

  return data.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

export default isoTimeFormat;
