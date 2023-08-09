/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - user_name
 *         - password
 *       properties:
 *         user_name:
 *           type: string
 *           description: username of user
 *         password:
 *           type: string
 *           description: password of user
 *       example:
 *         user_name: d5fE_asz
 *         password: 232fd34!@#
 */
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication Routes
 * /api/v1/login:
 *   post:
 *     summary: Login
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       500:
 *         description: Some server error
 *
 */

import { Router } from "express";
import Joi from "joi";
import LoginController from "../../controller/authentication/login.controller";
import JoiValidator from "../../middleware/validation.middleware";
import constant from "../../utils/constant.util";
const { API } = constant;
const loginRouter = Router();

/**
 * Defining the validating schema
 * Put here all the field that you want to get by request
 */
const schema = Joi.object({
  user_name: Joi.string().trim().min(1).max(128).required(),
  password: Joi.string().trim().min(1).max(128).required(),
});

loginRouter.post(
  `/${API.LOGIN}`,
  JoiValidator(schema, "body"),
  LoginController
);
export default loginRouter;
