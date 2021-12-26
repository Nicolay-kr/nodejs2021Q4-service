import {Request, Response} from 'express';

const router = require('express').Router();
const boardsService = require('./board.service.ts');

router.route('/').get(async (req:Request, res:Response) => {
  console.log(req);
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req:Request, res:Response) => {
  const {id} = req.params;
  const board = await boardsService.get(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/:id').delete(async (req:Request, res:Response) => {
  const {id} = req.params;
  const board = await boardsService.remove(id);
  if (board) {
    res.status(204).json(id);
  } else {
    res.status(201).send('Bad request');
  }
});

router.route('/').post(async (req:Request, res:Response) => {
  const board = await boardsService.save(req.body);
  res.status(201).json(board);
});

router.route('/:id').put(async (req:Request, res:Response) => {
  const {id} = req.params;
  const board = await boardsService.update(id, req.body);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(400).send('Bad request');
  }
});

export {router};