export const calculateTotalPrice = (startDate, endDate, pricePerNight) => {
  const numberOfNights = Math.ceil(
    (endDate - startDate) / (1000 * 60 * 60 * 24)
  );
  const totalPrice = numberOfNights * pricePerNight;
  return totalPrice;
}
