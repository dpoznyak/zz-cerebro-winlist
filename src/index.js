/* eslint max-len: [0] */

const { shellCommand, memoize } = require('cerebro-tools');

const REGEXP = /(.*)/;
const LIST_CMD = 'C:\\_dev\\other\\cerebro\\zz-cerebro-winlist\\autoit\\list-windows.exe';
const ACTIVATE_CMD = 'C:\\_dev\\other\\cerebro\\zz-cerebro-winlist\\autoit\\activate.exe';

const DEFAULT_ICON = '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/ExecutableBinaryIcon.icns';


/**
 * Parse line of ps command
 * @param {String} line of ps result
 * @return {Array} array of processId, processName and processPath
 */
function parsePsResult(str) {
  return str.match(/(\d+)\s+(\d+[\.|,]\d+)\s+(.*)/).slice(1);
}

function getIcon(processPath) {
  return processPath
}

const findWindows = (term) => {
  console.log("searching for: " + term)
  return shellCommand(LIST_CMD +" " + term).then(result => {


    return JSON.parse(result);
  })
  
};

/**
 * Plugin to look and display local and external IPs
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 */
const fn = ({term, display}) => {
  // const match = term.match(REGEXP);
  // if (match) {
    const searchTerm = term.trim();
    // if (!searchTerm || searchTerm.len < 3) {
    //   return;
    // }
    findWindows(searchTerm).then(list => {
      //console.debug(`******************Raw: ${JSON.stringify(list)}`);
      //console.debug(`****************-cerebro: ${JSON.stringify(filtered)}`)
      const filtered = list.filter(({processPath})=>(!processPath.includes("Cerebro")));
      const actualList = 
        (searchTerm.trim() == "") ?
        filtered.slice(1) :
        filtered;
      //console.debug(`************-1: ${JSON.stringify(filtered)}`)
      const results = actualList.map(({pid,i, hwnd, processPath, title, match}) => ({
        id: i,
        title,
        icon: processPath,
        subtitle: processPath,
        onSelect: () => shellCommand(ACTIVATE_CMD + " " + hwnd).then(r => console.log(r))
      }));
      display(results);
    });
  // }
};

module.exports = {
  name: 'Open window by name',
  //keyword: 'win',
  //icon: pluginIcon,
  order: 1,
  fn
};
