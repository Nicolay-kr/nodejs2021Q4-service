const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await userService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await userService.get(req.params.id);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).send('User not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const user = await userService.remove(req.params.id);
  if (user) {
    res.status(204).send('The user has been deleted');
  } else {
    res.status(200).send('Bad request');
  }
});

router.route('/').post(async (req, res) => {
  const user = await userService.save(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(400).send('Bad request');
  }
});

module.exports = router;
