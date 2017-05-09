import { LearningHeroPage } from './app.po';

describe('learning-hero App', function() {
  let page: LearningHeroPage;

  beforeEach(() => {
    page = new LearningHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
