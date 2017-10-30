/* eslint max-len: [0] */

const { shellCommand, memoize } = require('cerebro-tools');

const REGEXP = /(.*)/;
const LIST_CMD = 'C:\\_dev\\other\\cerebro\\zz-cerebro-winlist\\autoit\\list-windows.exe';
const ACTIVATE_CMD = 'C:\\_dev\\other\\cerebro\\zz-cerebro-winlist\\autoit\\activate.exe';

const DEFAULT_ICON = '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/ExecutableBinaryIcon.icns';

const MEMOIZE_OPTIONS = {
  promise: 'then',
  maxAge: 5 * 1000,
  preFetch: true
}

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

const findWindows = memoize((term) => {
  return shellCommand(LIST_CMD +" " + term).then(result => {
    return JSON.parse(result);
  })
  
}, MEMOIZE_OPTIONS);

/**
 * Plugin to look and display local and external IPs
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 */
const fn = ({term, display}) => {
  // const match = term.match(REGEXP);
  // if (match) {
    const searchTerm = term;
    if (!searchTerm || searchTerm.len < 3) {
      return;
    }
    findWindows(searchTerm).then(list => {
      const results = list.map(({pid, hwnd, processPath, title, match}) => ({
        id: pid,
        title,
        icon: processPath,
        subtitle: match,
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
  fn
};
