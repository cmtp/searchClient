import { SearchClientPage } from './app.po';

describe('search-client App', () => {
  let page: SearchClientPage;

  beforeEach(() => {
    page = new SearchClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('search works!');
  });
});
