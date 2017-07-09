import { HopSchedulePage } from './app.po';

describe('hop-schedule App', () => {
  let page: HopSchedulePage;

  beforeEach(() => {
    page = new HopSchedulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
