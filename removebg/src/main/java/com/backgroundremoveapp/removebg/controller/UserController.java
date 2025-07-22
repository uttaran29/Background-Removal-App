package com.backgroundremoveapp.removebg.controller;

import com.backgroundremoveapp.removebg.dto.UserDTO;
import com.backgroundremoveapp.removebg.response.RemoveBgResponse;
import com.backgroundremoveapp.removebg.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ResponseEntity<?> createOrUpdate(@RequestBody UserDTO userDTO, Authentication authentication){
        RemoveBgResponse response = null;
        try{

            if(!authentication.getName().equals(userDTO.getClerkId())){
                response = RemoveBgResponse.builder()
                        .success(false)
                        .data("User doesn't have permission to access the resource.")
                        .statusCode(HttpStatus.FORBIDDEN)
                        .build();
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
            }

            UserDTO user = userService.saveUser(userDTO);

            response = RemoveBgResponse.builder()
                    .success(true)
                    .data(user)
                    .statusCode(HttpStatus.OK)
                    .build();

            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            response =  RemoveBgResponse.builder()
                    .success(false)
                    .data(e.getMessage())
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                    .build();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/credits")
    public ResponseEntity<?> getUserCredits(Authentication authentication){
        RemoveBgResponse removeBgResponse = null;

        try{
            if(authentication.getName().isEmpty() || authentication.getName() == null){
                removeBgResponse = RemoveBgResponse.builder()
                        .statusCode(HttpStatus.FORBIDDEN)
                        .data("User not authorized to access this resource")
                        .success(false)
                        .build();

                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(removeBgResponse);
            }

            String clerkId = authentication.getName();

            UserDTO existingUser = userService.getUserByClerkId(clerkId);
            Map<String, Integer> map = new HashMap<>();
            map.put("credits", existingUser.getCredits());
            removeBgResponse = RemoveBgResponse.builder()
                    .statusCode(HttpStatus.OK)
                    .data(map)
                    .success(true)
                    .build();
            return ResponseEntity.status(HttpStatus.OK).body(removeBgResponse);
        } catch (Exception e) {
            removeBgResponse = RemoveBgResponse.builder()
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                    .data("Something went wrong")
                    .success(false)
                    .build();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(removeBgResponse);
        }
    }
}
