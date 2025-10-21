import express from "express";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import "dotenv/config";


import userRoutes from "./routes/userRoutes.js";
import prisma from "../prisma/client.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { getAllUsers } from "./controllers/userController.js";




const app = express();

// Middleware
app.use(cors({
  origin: "*",
  credentials: true,
}));
app.use(express.json());
app.use(clerkMiddleware());
// Sample route
app.get("/", (req, res) => {
  res.send("Compliance Backend is running");
});



// Clerk sends JSON

app.use("/api/users",authMiddleware, getAllUsers);

// Webhook to handle Clerk events
app.post("/api/clerk-webhook", async (req, res) => {
  const event = req.body;

  try {
    // Only handle user creation
    if (event.type === "user.created") {
      const clerkUser = event.data;

      // Avoid duplicates
      const existingUser = await prisma.user.findUnique({
        where: { clerkUserId: clerkUser.id },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            clerkUserId: clerkUser.id,
            email: clerkUser.email_addresses[0].email_address,
          }
        });
        
      }
    }

    res.status(200).send("OK");
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(500).send("Server Error");
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
