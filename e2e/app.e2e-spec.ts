import { Ng2ComponentCarouselPage } from './app.po';

describe('ng2-component-carousel App', () => {
  let page: Ng2ComponentCarouselPage;

  beforeEach(() => {
    page = new Ng2ComponentCarouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
