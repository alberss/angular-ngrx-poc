import { AngularNgrxPocPage } from './app.po';

describe('angular-ngrx-poc App', () => {
  let page: AngularNgrxPocPage;

  beforeEach(() => {
    page = new AngularNgrxPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
