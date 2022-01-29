function parseBlocks(blocks, flag) {
  if (flag) {
    // make block
    const { html } = blocks;

    console.log(html);
    const newString = html
      // .replace(/<[div][^>]*>/g, '<div>')
      .replace(/&nbsp;/g, ' ')
      .replace(/<[^>]*>/g, '')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>');

    console.log(newString);
    return newString;
  } else {
    // copy
    let newArr = blocks.map(({ html }) => {
      const temp = html.replace(/<\/div>/gi, '\n').replace(/<[^>]*>/g, '');
      return temp;
    });
    const parsedString = newArr.join('\n\n');
    return parsedString;
  }
}
export default parseBlocks;
