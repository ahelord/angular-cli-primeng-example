import { CentrosPage } from './app.po';

describe('centros App', function() {
  let page: CentrosPage;

  beforeEach(() => {
    page = new CentrosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
