package com.backgroundremoveapp.removebg.service;

import com.backgroundremoveapp.removebg.dto.UserDTO;

public interface UserService {
    UserDTO saveUser(UserDTO userDTO);

    UserDTO getUserByClerkId(String clerkId);

    void deleteUserByClerkId(String clerkId);
}
