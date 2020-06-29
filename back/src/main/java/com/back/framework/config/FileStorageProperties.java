package com.back.framework.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "file")
public class FileStorageProperties {
    private String uploadDir;
    private String uploadDirPosts;

    public String getUploadDir() {
        return uploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }

    public String getUploadDirPosts() {
        return uploadDirPosts;
    }

    public void setUploadDirPosts(String uploadDirPosts) {
        this.uploadDirPosts = uploadDirPosts;
    }
}