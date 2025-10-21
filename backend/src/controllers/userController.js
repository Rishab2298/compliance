// controllers/userController.js

import prisma from "../../prisma/client.js";


/**
 * User Controller
 * 
 * This file contains all controller functions for the User resource.
 * Each function's expected payload, params, and response are described in comments.
 */

//////////////////////////////////////////////
// getAllUsers
//////////////////////////////////////////////
/**
 * Method: GET
 * URL: /api/users
 * Params: none
 * Body: none
 * Response: 
 *   200: Array of user objects
 *   500: { error: "error message" }
 */
export const getAllUsers = async (req, res) => {
    console.log("first")
   try {
    const users = await prisma.user.findMany();
    res.json(users);
    console.log(users)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//////////////////////////////////////////////
// getUserById
//////////////////////////////////////////////
/**
 * Method: GET
 * URL: /api/users/:id
 * Params: 
 *   id: integer (user ID)
 * Body: none
 * Response:
 *   200: { id, name, email, createdAt, updatedAt }
 *   404: { message: "User not found" }
 *   500: { error: "error message" }
 */
export const getUserById = async (req, res) => {
  // TODO: Fetch user by ID
};

//////////////////////////////////////////////
// createUser
//////////////////////////////////////////////
/**
 * Method: POST
 * URL: /api/users
 * Params: none
 * Body: 
 *   {
 *     name: string,
 *     email: string
 *   }
 * Response:
 *   201: { id, name, email, createdAt, updatedAt }
 *   400: { error: "error message" }
 */
export const createUser = async (req, res) => {
  // TODO: Create a new user
};

//////////////////////////////////////////////
// updateUser
//////////////////////////////////////////////
/**
 * Method: PUT
 * URL: /api/users/:id
 * Params: 
 *   id: integer (user ID)
 * Body:
 *   {
 *     name?: string,
 *     email?: string
 *   }
 * Response:
 *   200: { id, name, email, updatedAt }
 *   400: { error: "error message" }
 *   404: { message: "User not found" }
 */
export const updateUser = async (req, res) => {
  // TODO: Update a user by ID
};

//////////////////////////////////////////////
// deleteUser
//////////////////////////////////////////////
/**
 * Method: DELETE
 * URL: /api/users/:id
 * Params:
 *   id: integer (user ID)
 * Body: none
 * Response:
 *   200: { message: "User deleted" }
 *   400: { error: "error message" }
 *   404: { message: "User not found" }
 */
export const deleteUser = async (req, res) => {
  // TODO: Delete user by ID
};
