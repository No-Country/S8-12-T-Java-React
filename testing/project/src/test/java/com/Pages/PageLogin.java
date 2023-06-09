package com.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.Base.BasePage;


public class PageLogin extends BasePage{
    By buttonMenu = By.xpath("//*[@id=\'root\']/header/button");
    By buttonLogin = By.xpath("//*[@id=\'root\']/div[1]/div[2]/div/a[1]");
    By header = By.xpath("//*[@id=\'root\']/header/h1");
    By correo = By.id("user");
    By contrasena = By.id("password");
    By buttonLogin1 = By.xpath("//*[@id=\'root\']/div[3]/div/div/form/button");
    By resultado = By.xpath("//*[@id=\'root\']/main/div[1]/h2");
    By resultadoFail = By.xpath("//*[@id=\'root\']/div[3]/div/div/form/div/div[1]/span");
    By resultadoFail2 = By.xpath("//*[@id=\'root\']/div[3]/div/div/form/div/div[2]/span");

    public PageLogin(WebDriver driver) {
    }
    public void LoginExitoso() throws InterruptedException {
        esperaExplictabutton(10,buttonMenu);
        oprimir(buttonMenu);
        esperaExplictabutton(10,buttonLogin);
        oprimir(buttonLogin);
        oprimir(header);
        teclear("josefernandez@gmail.com",correo);
        teclear("12341234",contrasena);
        oprimir(buttonLogin1);
        esperaExplictaText(50,resultado,"Tableros");
        obtenerTexto(resultado);
        esperaExplictaText(20,resultado,"Tableros");
        comparar(resultado,"Tableros");
    }
   public void LoginSinMail() throws InterruptedException {
       esperaExplictabutton(10,buttonMenu);
       oprimir(buttonMenu);
       esperaExplictabutton(10,buttonLogin);
       oprimir(buttonLogin);
       oprimir(header);
       teclear("",correo);
       teclear("12341234",contrasena);
       oprimir(buttonLogin1);
       esperaExplictaText(50,resultadoFail,"El correo no esta registrado");
       obtenerTexto(resultadoFail);
       esperaExplictaText(20,resultadoFail,"El correo no esta registrado");
       comparar(resultadoFail,"debe ingresar un correo");

   }

    public void LoginSinPass() throws InterruptedException {
        esperaExplictabutton(10,buttonMenu);
        oprimir(buttonMenu);
        esperaExplictabutton(10,buttonLogin);
        oprimir(buttonLogin);
        oprimir(header);
        teclear("josefernandez@gmail.com",correo);
        teclear("",contrasena);
        oprimir(buttonLogin1);
        esperaExplictaText(50,resultadoFail2,"La contraseña es incorrecta.");
        obtenerTexto(resultadoFail2);
        esperaExplictaText(20,resultadoFail2,"La contraseña es incorrecta.");
        comparar(resultadoFail2,"Debe ungresar una contraseña.");
    }
    public void credencialesIvalidas() throws InterruptedException {
        esperaExplictabutton(10,buttonMenu);
        oprimir(buttonMenu);
        esperaExplictabutton(10,buttonLogin);
        oprimir(buttonLogin);
        oprimir(header);
        teclear("josefernandez@gmail.com",correo);
        teclear("12345678",contrasena);
        oprimir(buttonLogin1);
        esperaExplictaText(50,resultadoFail2,"La contraseña es incorrecta.");
        obtenerTexto(resultadoFail2);
        esperaExplictaText(20,resultadoFail2,"La contraseña es incorrecta.");
        comparar(resultadoFail2,"La contraseña es incorrecta.");
    }
}