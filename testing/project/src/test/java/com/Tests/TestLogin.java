package com.Tests;


import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import com.Pages.PageLogin;


public class TestLogin {
	
	private WebDriver driver;
	PageLogin pageLogin;

	@BeforeEach
	public void setUp (){
		pageLogin = new PageLogin(driver);
		driver = pageLogin.chromeDriverConnection();
		pageLogin.link("https://career-watch.web.app/");
	}
	@AfterEach
	public void tearDown (){
		driver.quit();
	}

	@Test
	public void test01() throws InterruptedException {
		pageLogin.LoginExitoso();

	}
	@Test
	public void test02() throws InterruptedException {
		pageLogin.LoginSinMail();

	}
	@Test
	public void test03() throws InterruptedException {
		pageLogin.LoginSinPass();

	}
	@Test
	public void test04() throws InterruptedException {
		pageLogin.credencialesIvalidas();

	}

}