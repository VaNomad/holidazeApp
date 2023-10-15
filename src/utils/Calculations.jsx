export const calculateTotalPrice = (startDate, endDate, pricePerNight) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = end - start;
  const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const totalPrice = numberOfNights * pricePerNight;
  return totalPrice;
};

export const calculateTotalDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = end - start;
  const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return totalDays;
};