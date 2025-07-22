package com.backgroundremoveapp.removebg.service.impl;

import com.backgroundremoveapp.removebg.client.ApyClient;
import com.backgroundremoveapp.removebg.service.RemoveBackgroundService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class RemoveBackgroundServiceImpl implements RemoveBackgroundService {

    @Value("${apy.apiKey}")
    private String apiKey;

    private final ApyClient apyClient;

    @Override
    public byte[] removeBackground(MultipartFile file) {
        String outputFileName = "output.png";
        return apyClient.removeBackground(file, outputFileName,apiKey);
    }
}
