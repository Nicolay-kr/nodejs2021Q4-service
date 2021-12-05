const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const task = await tasksService.remove(req.params.id);
  if (task) {
    res.status(204).send('The task has been deleted');
  } else {
    res.status(201).send('Bad request');
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.save({
    ...req.body,
    boardId: req.params.boardId,
  });
  res.status(201).json(task);
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(400).send('Bad request');
  }
});

module.exports = router;
