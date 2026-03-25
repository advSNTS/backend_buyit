import { Router } from "express";
import { getUsers } from "../controller/users.controller.js";


const router = Router();

router.get("/users",  {});

router.post("/users", {});

router.put("/users/:id", {});

router.delete("/users/:id", {});