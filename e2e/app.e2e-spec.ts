import { KlatchPage } from './app.po';

describe('klatch App', function() {
  let page: KlatchPage;

  beforeEach(() => {
    page = new KlatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
