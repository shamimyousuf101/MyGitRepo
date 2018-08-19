package com.pet.exclusive;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExclusionController {

    @RequestMapping("exclusive")
    public String exclusive(){

        return "hello world";
    }
}
