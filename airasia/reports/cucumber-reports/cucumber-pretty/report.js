$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchaddupdateproduct.feature");
formatter.feature({
  "name": "verify AirAsia Login and flight search functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search for flight as a guest user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchFlight"
    }
  ]
});
formatter.step({
  "name": "User is on Landing Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects Flights menu item on search widget",
  "keyword": "When "
});
formatter.step({
  "name": "Enter from location \"\u003cfrom location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter to location \"\u003cto location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Select depart date \"\u003cdepart date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Select return date \"\u003creturn date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click confrim on date picker",
  "keyword": "And "
});
formatter.step({
  "name": "Click search",
  "keyword": "And "
});
formatter.step({
  "name": "Search results with user selected \"\u003cfrom location\u003e\", \"\u003cto location\u003e\" are displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "from location",
        "to location",
        "depart date",
        "return date"
      ]
    },
    {
      "cells": [
        "Kuala Lumpur (KUL)",
        "Chennai (MAA)",
        "19/07/2020",
        "22/07/2020"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for flight as a guest user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchFlight"
    }
  ]
});
formatter.step({
  "name": "User is on Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingPageStepDefinitions.is_on_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Flights menu item on search widget",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageStepDefinitions.user_selects_Flights_menu_item_on_search_widget()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter from location \"Kuala Lumpur (KUL)\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.enterFromLocation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter to location \"Chennai (MAA)\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.enterToLocation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select depart date \"19/07/2020\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.selectDepartDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select return date \"22/07/2020\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.selectReturnDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confrim on date picker",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.clickConfrimOnDatePicker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click search",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.clickSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search results with user selected \"Kuala Lumpur (KUL)\", \"Chennai (MAA)\" are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightSelectionPageStepDefinitions.searchResultsWithUserSelectedAreDisplayed(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login to AirAsia and verify Account Settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginAndLogout"
    }
  ]
});
formatter.step({
  "name": "User is on Landing Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on BIG Login",
  "keyword": "When "
});
formatter.step({
  "name": "Login with \"\u003cemail address\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Verify account name \"\u003caccount name\u003e\"is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Click on account profile name \"\u003caccount name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click logout",
  "keyword": "And "
});
formatter.step({
  "name": "Verify logout is successful",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email address",
        "password",
        "account name"
      ]
    },
    {
      "cells": [
        "signinairasia@gmail.com",
        "Bonpi71021",
        "Signin"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to AirAsia and verify Account Settings",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginAndLogout"
    }
  ]
});
formatter.step({
  "name": "User is on Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingPageStepDefinitions.is_on_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on BIG Login",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageStepDefinitions.userClicksOnBIGLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"signinairasia@gmail.com\" and password \"Bonpi71021\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.loginWithAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify account name \"Signin\"is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.verifyAccountNameIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on account profile name \"Signin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.clickOnAccountProfileName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click logout",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.clickLogout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify logout is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageStepDefinitions.verifyLogoutIsSuccessful()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});