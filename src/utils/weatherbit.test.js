import { fetchDaily } from './weatherbit';

describe('#fetchDaily', () => {
  const city = 'Wolverhamption';
  const country = 'GB';

  it('should fetch data', (done) => {
    fetchDaily({ city, country }).then(res => {
      expect(res.status).toEqual(200);
      done();
    });
  });
});