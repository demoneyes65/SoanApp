import { SoanAppPage } from './app.po';

describe('soan-app App', () => {
  let page: SoanAppPage;

  beforeEach(() => {
    page = new SoanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
