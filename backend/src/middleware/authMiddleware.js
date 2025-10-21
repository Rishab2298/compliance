import { clerkClient } from "@clerk/express";

// export const authMiddleware = async (req, res, next) => {
//     try {
//         const { userId } = req.auth();
//         console.log(userId)
//         if (!userId) {
//             return res.status(401).json({ message: "Unauthorized" });
//         }

//         const user = await clerkClient.users.getUser(userId);
//         req.user = user;
//         next();
//     } catch (error) {
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// };

export const authMiddleware = async (req, res, next) => {
  try {
    const { userId } =await req.auth();
    console.log(userId + "middle");
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await clerkClient.users.getUser(userId);
    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
