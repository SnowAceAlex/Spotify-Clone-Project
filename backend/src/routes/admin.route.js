import { Router } from "express";
import {
  createSong,
  deleteSong,
  createAlbum,
  deleteAlbum,
  checkAdmin,
} from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoute, requireAdmin);

// router.get("/auth/callback", authCallback);
router.get("/check", checkAdmin);

// router.get("/users", getUsers);
router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);

// router.get("/albums", getAlbums);
router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;
