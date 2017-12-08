import { ScaffoldPage } from './app.po';

describe('scaffold App', () => {
  let page: ScaffoldPage;

  beforeEach(() => {
    page = new ScaffoldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
