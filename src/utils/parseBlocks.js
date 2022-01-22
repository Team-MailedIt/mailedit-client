function parseBlocks(blocks) {
  let newArr = blocks.map(({ html }) => {
    const temp = html
      .replace(/<div>/gi, '\n')
      .replace(/&nbsp;/gi, '')
      .replace(/<\/div>/gi, '')
      .replace(/<br>/gi, '');
    return temp;
  });
  const parsedString = newArr.join('\n\n');
  return parsedString;
}
export default parseBlocks;
