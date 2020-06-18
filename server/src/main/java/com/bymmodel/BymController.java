package com.bymmodel;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

public class BymController {

    @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
    public void GetForm(@RequestParam Map<String, Float> params) {
        System.out.println("d: " + params.get("data") + " " + "dv: " + params.get("dataValues") + " " +
                "m: " + params.get("mean") + " " + "sd: " + params.get("sd"));
    }


}
