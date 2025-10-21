import express from "express";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { getAllUsers } from "../controllers/userController.js";

const userRoutes = express.Router();

// ROUTE DEFINITIONS
userRoutes.get("/", authMiddleware, getAllUsers);   // GET /api/users
// userRoutes.get("/:id", requireAuth, getUserById); // GET /api/users/:id
// userRoutes.post("/", createUser);                 // POST /api/users
// userRoutes.put("/:id", updateUser);               // PUT /api/users/:id
// userRoutes.delete("/:id", deleteUser);            // DELETE /api/users/:id

export default userRoutes;
