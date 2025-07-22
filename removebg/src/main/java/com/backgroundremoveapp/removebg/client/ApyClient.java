package com.backgroundremoveapp.removebg.client;

import com.backgroundremoveapp.removebg.config.FeignSupportConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

@FeignClient(
        name = "apyClient",
        url = "https://api.apyhub.com",
        configuration = FeignSupportConfig.class
)
public interface ApyClient {
    @PostMapping(value ="/processor/image/remove-background/file", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    byte[] removeBackground(@RequestPart("image") MultipartFile file,
                            @RequestParam(name = "output", required = false) String outputFileName,
                            @RequestHeader("apy-token") String apiKey);

}
