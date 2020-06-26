package com.airasia.stepdefinitions;

import com.airasia.pages.LoginPage;
import io.cucumber.java.en.And;

public class LoginStepDefinitions {
	private LoginPage loginPage;
	
	public LoginStepDefinitions(LoginPage loginPage) {
		this.loginPage=loginPage;
	}
	@And("Login with {string} and password {string}")
	public void loginWithAndPassword(String emailId, String Password) {
		loginPage.loginApplication(emailId,Password);
	}
}
