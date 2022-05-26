// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    
    let dataStr = false;
    let localDataStr = false;

    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
      if (data !== undefined && data.length > 0 && data[0].content !== null) {
        if (data[0].content.includes(header)) {
          dataStr = data[0].content;
        } else {
          dataStr = header.concat(' ' + data[0].content);
        }
      }
      if (localData !== undefined && localData !== null) {
        if (localData.includes(header)) {
          localDataStr = localData;
        } else {
          localDataStr = header.concat(' ' + localData);
        }
      }
      this.editor.setValue(dataStr || localDataStr || header);
    });

    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor when the editor itself is loses focus
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      putDb(1, localStorage.getItem('content'));
    });
  }
}
