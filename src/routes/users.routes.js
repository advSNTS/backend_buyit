import { Router } from "express";
import { getUsers, createUser } from "../controller/users.controller.js";


const router = Router();

router.get("/users",  getUsers);

router.post("/users", {});

router.put("/users/:id", {});

router.delete("/users/:id", {});