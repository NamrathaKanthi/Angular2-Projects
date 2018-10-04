import { DruAppointmentPage } from './app.po';

describe('dru-appointment App', () => {
  let page: DruAppointmentPage;

  beforeEach(() => {
    page = new DruAppointmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
