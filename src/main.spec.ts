import main from './main';

describe('Start Server', () => {
  it('It should be possible Start Server', async done => {
    await main().then(done);
  });
});
