const { getName } = require('./getName.js');

describe('getName function', () => {
  it('gets a name', () => {
    const name = getName({ name: 'Becky' });

    expect(name).toEqual('Becky');
  });
});
