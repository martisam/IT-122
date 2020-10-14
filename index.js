exports.getBlue = () => {
  return allColors[2];
}
const chosenColor = colors.getRandomColor();
console.log(`You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`);
const colors = require('colors');
