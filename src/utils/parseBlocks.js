function getLength(object, num) {
  return object ? object.length * num : 0;
}

function parseBlocks(blocks, flag) {
  if (flag) {
    // count how many pattern match with condition
    const { html } = blocks;
    // const a = getLength(html.match(/<div>/gi), 5);
    // const b = getLength(html.match(/<\/div>/gi), 6);
    // const c = getLength(html.match(/&nbsp;/gi), 6);
    // const d = getLength(html.match(/<br>/gi), 4);
    // const e = getLength(html.match(/&lt;/gi), 4);
    // const f = getLength(html.match(/&gt;/gi), 4);

    // const res = a + b + c + d + e + f;
    // return res;

    const newString = html
      .replace(/<div>/gi, '')
      .replace(/&nbsp;/gi, '')
      .replace(/<\/div>/gi, '')
      .replace(/<br>/gi, '')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>');
    return newString;
  } else {
    console.log(flag);
    let newArr = blocks.map(({ html }) => {
      const temp = html
        .replace(/<div>/gi, '\n')
        .replace(/<\/div>/gi, '')
        .replace(/<br>/gi, '\n');
      return temp;
    });
    const parsedString = newArr.join('\n\n');
    return parsedString;
  }
}
export default parseBlocks;
