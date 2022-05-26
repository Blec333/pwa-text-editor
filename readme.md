# JATE

* JUST ANOTHER TEXT EDITOR

## Description

This is a text editor built as a PWA avaiable for offline access.

## Links

[Click to view the deployed application](https://blec-jate.herokuapp.com/)

[Click to view the portfolio repository](https://github.com/Blec333/pwa-text-editor)


## Table of contents


- [Technologies Employed](#technologies-employed)
- [Key Functions](#key-functions)
- [Final Product](#final-product)
- [License](#license)
- [Contact/Questions](#questions)


## Technologies Employed


| Technology           | Implementation/Use       |
| -------------------- | ------------------------ |
| Node.js              | JavaScript runtime       |
| Node Package Manager | Manage node packages     |
| Express.js           | Web framework            |
| Workbox-Webpack      | Bundling                 |
| Heroku               | Deployment               |


## Key Functionality

* Header Persistence:
```javascript
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
```


## Final Product

<img title="image" alt="Style Showcase Page Screenshot" src="./assets/jate.gif">



## License

This software is licensed under the MIT [LICENSE](./LICENSE)

MIT License

Copyright (c) 2022 Brennan LeClair

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



## Questions?

Please visit

[Brennan (blec333)](https://github.com/Blec333)



### Acknowledgements

©Brennan LeClair
