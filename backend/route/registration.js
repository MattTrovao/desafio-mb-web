import express from "express";
import { body } from 'express-validator';

const router = express.Router()

const users = []

router.get("/registration", (req, res) => {
  res.json({ message: "API funcionando!", status: "success" });
});

router.post('/registration', [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('document').notEmpty(),
  body('date').notEmpty(),
  body('phone').notEmpty(),
  body('password').notEmpty(),
], async(req, res) => {
  const {
    name, email, document, date, phone, password, type
  } = req.body

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'E-mail já cadastrado' });
  }

  const newUser = {
    id: users.length + 1,
    name, email, document, date, phone, password, type
  }
  users.push(newUser)
  res.status(200).json({message:`O usuário ${name} foi registrado com sucesso!`})
})

export default router;
