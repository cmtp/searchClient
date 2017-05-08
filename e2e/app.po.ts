import { browser, element, by } from 'protractor';

export class SearchClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('search-root h1')).getText();
  }
}
