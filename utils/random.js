// min <= num < max
const random = (min, max) => {
  return Math.random() * (max - min) + min;
};
export default random;
