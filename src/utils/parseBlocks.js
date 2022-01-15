function parseBlocks(blocks) {
  let newArr = blocks.map(({ html }) => {
    const temp = html.replace(/<div>/gi, '\n');
    const newString = temp.replace(/<\/div>/gi, '');
    return newString;
  });
  const parsedString = newArr.join('\n\n');
  return parsedString;
}
export default parseBlocks;
