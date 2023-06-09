package com.Base;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class BasePage {

	protected static WebDriver driver;

	public WebDriver chromeDriverConnection() {
		System.setProperty("webdriver.chrome.driver", ".\\src\\test\\resources\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		return driver;
	}
	public void teclear(String imputText,By locator) {
		driver.findElement(locator).clear();
		driver.findElement(locator).sendKeys(imputText);
	}
	public static void oprimir (By locator) {
		driver.findElement(locator).click();
	}
	public void link (String url) {
		driver.get(url);
	}
	public void obtenerTexto (By locator) {
		String res = driver.findElement(locator).getText();
		System.out.println("Texto : " + res );
	}
	public void comparar (By locator, String texto) {
		String res = driver.findElement(locator).getText();
		assertTrue(res.contains(texto));
	}
	public void esperaExplictaText (int time, By locator, String texto){
		new WebDriverWait(driver, Duration.ofSeconds(time)).
				until(ExpectedConditions.textToBePresentInElementLocated(locator,texto));
	}
	public void esperaExplictabutton(int time, By locator) {
		new WebDriverWait(driver, Duration.ofSeconds(time))
				.until(ExpectedConditions.elementToBeClickable(locator));
	}

}


