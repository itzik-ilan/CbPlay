import { CbPlayPage } from './app.po';

describe('cb-play App', () => {
  let page: CbPlayPage;

  beforeEach(() => {
    page = new CbPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
