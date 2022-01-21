import express, { Request, Response, NextFunction } from 'express';

const tasksService = require('./task.service.ts');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { boardId } = req.params;
      if (boardId) {
        const tasks = await tasksService.getAll(boardId);
        res.json(tasks);
      } else {
        res.status(404).send('Board not found');
      }
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:id')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      let task
      const { boardId } = req.params;
      const { id } = req.params;
      if(boardId && id){
        task = await tasksService.get(boardId, id);
      }
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:id')
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { boardId } = req.params;
      if (boardId && id) {
        await tasksService.remove(boardId, id);
        res.status(204).send('The task has been deleted');
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
      let task;
      const { boardId } = req.params;
      if(boardId){
        task = await tasksService.save(boardId, req.body);
      }
      if(task){
        res.status(201).send(task);
      }
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:id')
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      let task
      const { boardId } = req.params;
      const { id } = req.params;
      if(boardId && id){
        task = await tasksService.update(boardId, id, req.body);
      }
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(400).send('Bad request');
      }
    } catch (err) {
      next(err);
    }
  });

export { router };
