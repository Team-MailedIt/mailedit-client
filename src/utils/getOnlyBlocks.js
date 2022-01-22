const getOnlyBlocks = (contents) => {
  const result = contents.filter((elements) => elements.flag === 1);
  return result;
};
export default getOnlyBlocks;
