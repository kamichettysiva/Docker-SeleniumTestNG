package com.airasia.pages;

import com.airasia.framework.utilities.DriverWait;
import com.airasia.framework.utilities.DriverWait.WaitTime;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class FlightSelectionPage extends BasePage{

	public FlightSelectionPage() {
		logger = Logger.getLogger(FlightSelectionPage.class);
	}


	@FindBy(id="wcaMainContent")
	private WebElement flightSelectionPage;

	@Override
	public boolean isPageDisplayed() {
		return DriverWait.isElementDisplayed(flightSelectionPage, WaitTime.ONEMINUTE);
	}

	public void verifyDepNDestination(String flightType, String city1, String city2){
		String fromCity = city1.split("\\(")[0].trim();
		String toCity = city2.split("\\(")[0].trim();
		Assert.assertTrue(DriverWait.isElementDisplayed(By.xpath("//*[@id='wcaMainContent']/h1[text()='"+flightType+"']/../h2[text()=' "+fromCity+" to "+toCity+" ']"),WaitTime.ONEMINUTE),"Flight Selection page is not loaded");
	}

}
