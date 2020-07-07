package com.back.framework.config;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageService {
    private final String CHARACTERS_FOR_NAMING = "AaBbCcDdEeFfGgHhIiJjKkLlMmNn0oPpQqRrSsTtUuVvWwXxYyZz";
    private final String NUMBERS_FOR_NAMING = "1234567890";
    private final Path fileStorageLocation;
    private final Path fileStorageLocationPosts;

    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir()).toAbsolutePath().normalize();
        this.fileStorageLocationPosts = Paths.get(fileStorageProperties.getUploadDirPosts()).toAbsolutePath()
                .normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
            Files.createDirectories(this.fileStorageLocationPosts);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public String storeFile(MultipartFile file, int type) {
        Random random = new Random();
        String pictureName = "";
        for (int i = 0; i < 10; i++) {
            int randomNumberForCharacters = random.nextInt(52);
            pictureName += this.CHARACTERS_FOR_NAMING.charAt(randomNumberForCharacters);
        }
        pictureName += "_";
        for (int i = 0; i < 10; i++) {
            int randomNumberForNumbers = random.nextInt(10);
            pictureName += this.NUMBERS_FOR_NAMING.charAt(randomNumberForNumbers);
        }

        try {

            Path targetLocation = type == 1 ? this.fileStorageLocation.resolve(pictureName + ".jpg")
                    : this.fileStorageLocationPosts.resolve(pictureName + ".jpg");
            byte[] bytes = file.getBytes();
            Files.write(targetLocation, bytes);
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        return pictureName;
    }

    public void deleteFile(String fileName, int type) {

        try {            
            Path targetLocation = type == 1 ? this.fileStorageLocation.resolve(fileName)
                    : this.fileStorageLocationPosts.resolve(fileName);

            Files.deleteIfExists(targetLocation);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}