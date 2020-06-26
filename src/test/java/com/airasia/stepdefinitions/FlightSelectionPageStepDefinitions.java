package com.airasia.stepdefinitions;

import com.airasia.pages.FlightSelectionPage;
import io.cucumber.java.en.Then;

public class FlightSelectionPageStepDefinitions {
	private FlightSelectionPage flightSelectionPage;

	public FlightSelectionPageStepDefinitions(FlightSelectionPage dashboardPage) {
		this.flightSelectionPage=dashboardPage;
	}
	@Then("Search results with user selected {string}, {string} are displayed")
	public void searchResultsWithUserSelectedAreDisplayed(String DepartLocation, String DestinationLocation) {
		flightSelectionPage.verifyDepNDestination("Depart", DepartLocation, DestinationLocation);
		flightSelectionPage.verifyDepNDestination("Return", DestinationLocation, DepartLocation);
	}
}

