package com.airasia.pages;

import com.airasia.framework.utilities.DriverWait;
import com.airasia.framework.utilities.DriverWait.WaitTime;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static com.airasia.framework.utilities.UIWrappers.clickOnElement;
import static com.airasia.framework.utilities.UIWrappers.inputText;

public class LoginPage extends BasePage {
	public LoginPage() {
		logger = Logger.getLogger(LoginPage.class);
	}

	@FindBy(id="sso-login-email-input")
	private WebElement emailTxtField;

	@FindBy(id="sso-login-password-input")
	private WebElement passwordTxtField;

	@FindBy(xpath="//*[@id='sso-login-signup-widget']//button[text()=' Log in ']")
	private WebElement loginButton;

	@Override
	public boolean isPageDisplayed() {
		return DriverWait.isElementDisplayed(loginButton, WaitTime.ONEMINUTE);
	}
	/**
	 * method to login into application
	 * @param userName
	 * @param password
	 */
	
	public void loginApplication(String userName,String password) {
		inputText(emailTxtField, userName, "Email");
		logger.info("Entered Email ID");
		inputText(passwordTxtField, password, "Password");
		logger.info("Entered Password");
		clickOnElement(loginButton, "Login Button");


	}
}
