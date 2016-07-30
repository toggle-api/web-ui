import { MyNgProjectPage } from './app.po';

describe('my-ng-project App', function() {
  let page: MyNgProjectPage;

  beforeEach(() => {
    page = new MyNgProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
