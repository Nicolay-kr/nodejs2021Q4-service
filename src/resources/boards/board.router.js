const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.remove(req.params.id);
  if (board) {
    res.status(204).json(req.params.id);
  } else {
    res.status(201).send('Bad request');
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.save(req.body);
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(400).send('Bad request');
  }
});

module.exports = router;