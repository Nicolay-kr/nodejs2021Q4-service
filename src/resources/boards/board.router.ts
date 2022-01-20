import { Request, Response, NextFunction } from 'express';

const router = require('express').Router();
const boardsService = require('./board.service.ts');

router
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    try {
      const boards = await boardsService.getAll();
      res.json(boards);
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:boardId')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { boardId } = req.params;
      const board = await boardsService.get(boardId);
      if (board) {
        res.status(200).json(board);
      } else {
        res.status(404).send('Board not found');
      }
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:boardId')
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { boardId } = req.params;
      const board = await boardsService.remove(boardId);
      if (board) {
        res.status(204).json(boardId);
      } else {
        res.status(201).send('Bad request');
      }
    } catch (err) {
      next(err);
    }
  });

router
  .route('/')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const board = await boardsService.save(req.body);
      res.status(201).json(board);
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:boardId')
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      let board
      const { boardId } = req.params;
      if (boardId) {
        board = await boardsService.update(boardId, req.body);
      }
      
      if (board) {
        res.status(200).send(board);
      } else {
        res.status(400).send('Bad request');
      }
    } catch (err) {
      next(err);
    }
  });

export { router };
