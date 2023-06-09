package com.Pages;

import com.Base.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class PageRegister extends BasePage {

    By buttonMenu = By.xpath("//*[@id=\'root\']/header/button");
    By buttonRegister = By.xpath("//*[@id=\'root\']/div[1]/div[2]/div/a[2]");
    By header = By.xpath("//*[@id=\'root\']/div[1]/div[1]");
    By nombre = By.name("firstName");
    By apellido = By.name("lastName");
    By correo = By.name("email");
    By contrasena = By.name("password");
    By ccontrasena = By.name("confirmPassword");
    By buttonResgistrarse = By.xpath("//*[@id=\'root\']/div[3]/div/div/form/button");
    By resultado = By.xpath("//*[@id=\'root\']/div[3]/div/p[2]");


    public PageRegister(WebDriver driver) {
        super();
    }

    public void register (){
        esperaExplictabutton(10,buttonMenu);
        oprimir(buttonMenu);
        esperaExplictabutton(10,buttonRegister);
        oprimir(buttonRegister);
        oprimir(header);
        teclear("jose",nombre);
        teclear("fernandez",apellido);
        teclear("josefernandez@hotmail.com",correo);
        teclear("12341234",contrasena);
        teclear("12341234",ccontrasena);
        oprimir(buttonResgistrarse);
        //esperaExplictaText(20,resultado,"Ya puedes ingresar a tu tablero y comenzar a organizarte para encontrar tu trabajo ideal.");
        //obtenerTexto(resultado);
       // esperaExplictaText(20,resultado,"Ya puedes ingresar a tu tablero y comenzar a organizarte para encontrar tu trabajo ideal.");
       // comparar(resultado,"Ya puedes ingresar a tu tablero y comenzar a organizarte para encontrar tu trabajo ideal.");
    }


}
