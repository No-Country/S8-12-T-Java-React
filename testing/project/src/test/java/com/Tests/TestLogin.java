package com.Tests;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import com.Pages.PageLogin;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestLogin {
	
	private WebDriver driver;
	PageLogin pageLogin;

	@BeforeEach
	public void setUp() throws Exception {
		pageLogin = new PageLogin(driver);
		driver =pageLogin.chromeDriverConnection();
		pageLogin.link("https://www.facebook.com/");
		Thread.sleep(2000);
		String titulo = driver.getTitle();
		System.out.println(titulo);
		//assertTrue(titulo.contains("facebook"));
	}
	@AfterEach
	public void tearDown() throws Exception {
		driver.quit();
	}

	@Test
	public void test01() throws InterruptedException {
		pageLogin.LoginExitoso();

	}
	@Test
	public void test02() throws InterruptedException {
		pageLogin.LoginSinNombre();

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