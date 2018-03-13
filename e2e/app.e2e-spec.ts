import { AppPage } from './app.po';

describe('CCFS App', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
