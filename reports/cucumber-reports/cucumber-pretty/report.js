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
  "error_message": "java.lang.NullPointerException\r\n\tat com.airasia.framework.base.DriverManager.getDriverFor(DriverManager.java:57)\r\n\tat com.airasia.framework.base.DriverManager.launchApplication(DriverManager.java:43)\r\n\tat com.airasia.stepdefinitions.Hooks.beforeScenario(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat com.airasia.framework.base.CucumberFeatureManager.runScenario(CucumberFeatureManager.java:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:110)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "User selects Flights menu item on search widget",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageStepDefinitions.user_selects_Flights_menu_item_on_search_widget()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter from location \"Kuala Lumpur (KUL)\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.enterFromLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter to location \"Chennai (MAA)\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.enterToLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select depart date \"19/07/2020\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.selectDepartDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select return date \"22/07/2020\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.selectReturnDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click confrim on date picker",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.clickConfrimOnDatePicker()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click search",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.clickSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Search results with user selected \"Kuala Lumpur (KUL)\", \"Chennai (MAA)\" are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightSelectionPageStepDefinitions.searchResultsWithUserSelectedAreDisplayed(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.NullPointerException\r\n\tat com.airasia.framework.base.DriverManager.getDriverFor(DriverManager.java:57)\r\n\tat com.airasia.framework.base.DriverManager.launchApplication(DriverManager.java:43)\r\n\tat com.airasia.stepdefinitions.Hooks.beforeScenario(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat com.airasia.framework.base.CucumberFeatureManager.runScenario(CucumberFeatureManager.java:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:110)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on BIG Login",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageStepDefinitions.userClicksOnBIGLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Login with \"signinairasia@gmail.com\" and password \"Bonpi71021\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.loginWithAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify account name \"Signin\"is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.verifyAccountNameIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on account profile name \"Signin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.clickOnAccountProfileName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click logout",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDefinitions.clickLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify logout is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageStepDefinitions.verifyLogoutIsSuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});