function parseBlocks(blocks) {
  let newArr = blocks.map(({ html }) => {
    const temp = html.replace(/<div>/gi, '\n');
    const temp1 = temp.replace(/&nbsp;/gi, '');
    const newString = temp1.replace(/<\/div>/gi, '');
    return newString;
  });
  const parsedString = newArr.join('\n\n');
  return parsedString;
}
export default parseBlocks;
