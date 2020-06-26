package com.airasia.stepdefinitions;

import com.airasia.framework.base.DriverManager;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.core.api.Scenario;

import java.net.MalformedURLException;

public class Hooks {
	private DriverManager manager;
	
	@Before
	public void beforeScenario(Scenario scenario) throws MalformedURLException {
		manager=new DriverManager();
		manager.launchApplication();
	}
	
	@After
	public void afterScenario() {
		manager.closeDriver();
	}
}
