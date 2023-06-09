package com.Reports;

import com.relevantcodes.extentreports.ExtentReports;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class reports {
    public static ExtentReports getIntance() {
        Date fecha = new Date(Calendar.getInstance().getTimeInMillis());
        SimpleDateFormat formatter = new SimpleDateFormat("ddMMyyyyHHmm");
        String fechaTexto = formatter.format(fecha);
        String Path = ("src/test/resources/reportes/reports"+fechaTexto+".html");
        ExtentReports extent = new ExtentReports(Path,false);
        return extent;

    }
}
