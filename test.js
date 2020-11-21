const { clickOnAdoptionLink } = require('./home');
var homePage = require('./home');

homePage.navigateToTestRoom();
var adoptionpage = homePage.clickOnAdoptionLink();
adoptionpage.getLionAvailability();
homePage.tearDown();
