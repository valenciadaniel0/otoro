package com.back.application.handler.users.command;

public class EmailCommand {
    private String email;

    public EmailCommand(){
    }

    public EmailCommand(String email){
        this.email = email;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }

}