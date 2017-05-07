import { AngularForPage } from './app.po';

describe('angular-for App', () => {
  let page: AngularForPage;

  beforeEach(() => {
    page = new AngularForPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
