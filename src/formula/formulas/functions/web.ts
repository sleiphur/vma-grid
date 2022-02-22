import FormulaError from '../error'
import { FormulaHelpers, Types } from '../helpers'

const H = FormulaHelpers

const WebFunctions = {
  ENCODEURL: (text: any) => encodeURIComponent(H.accept(text, Types.STRING)),

  FILTERXML: () => {
    // Not implemented due to extra dependency
  },

  WEBSERVICE: (context: any, url: any) => {
    throw FormulaError.ERROR('WEBSERVICE is not supported in sync mode.')
    if (typeof fetch === 'function') {
      url = H.accept(url, Types.STRING)
      return fetch(url).then((res) => res.text())
    }
    // Not implemented for Node.js due to extra dependency
    // Sample code for Node.js
    // const fetch = require('node-fetch');
    // url = H.accept(url, Types.STRING);
    // return fetch(url).then(res => res.text());
    throw FormulaError.ERROR(
      'WEBSERVICE only available to browser with fetch.' +
        'If you want to use WEBSERVICE in Node.js, please override this function: \n' +
        'new FormulaParser({\n' +
        '    functionsNeedContext: {\n' +
        '        WEBSERVICE: (context, url) => {...}}\n' +
        '})',
    )
  },
}

export default WebFunctions
