package com.Tests;

import com.Pages.PageRegister;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;

public class TestRegister {
    WebDriver driver;
    PageRegister pageRegister;

    @BeforeEach
    public void setUp (){
        pageRegister = new PageRegister(driver);
        driver = pageRegister.chromeDriverConnection();
        pageRegister.link("https://career-watch.web.app/");
    }
    @AfterEach
    public void tearDown (){
        driver.quit();
    }

    @Test
    public void test (){
        pageRegister.register();
    }

}
