import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe ('Our first test', () => {
  it('shoul pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('Deberia decir Hola mundo desde Colombia', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hola mundo desde Colombia");
      done();
      window.close();
    });
  })
})
