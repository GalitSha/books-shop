
function toTitleCase(str) {
  return str.replace(/\W/g, '').replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


function onlyCharacters(str) {
  let charactersArr = str.split(" ");
  let newCharArr = charactersArr.map(elm => elm.split(''));
  let filteredArr = newCharArr.map(elm => elm.filter(char => char.length === 1 && char.match(/[A-Z|a-z]/i)));
  let firstUpperCase = filteredArr.map(arr => [arr[0].toUpperCase(), ...arr.slice(1)]);
  let lowerCase = firstUpperCase.map(arr => [arr[0], ...arr.slice(1).map(char => char.toLowerCase())]);
  return lowerCase.map(arr => arr.join(''));
}
