import express, {Request, Response} from 'express';

const tasksService = require('./task.service.ts');

const router = express.Router({ mergeParams: true });


router.route('/').get(async (req:Request, res:Response) => {
  const { boardId } = req.params
  if(boardId){
    const tasks = await tasksService.getAll(boardId);
    res.json(tasks);
  }else{
    res.status(404).send('Board not found');
  }
});

router.route('/:id').get(async (req:Request, res:Response) => {
  const { boardId } = req.params
  const {id} = req.params;
  const task = await tasksService.get(boardId, id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

router.route('/:id').delete(async (req:Request, res:Response) => {
  const {id} = req.params;
  const { boardId } = req.params
  const task = await tasksService.remove(boardId, id);
  if (task) {
    res.status(204).send('The task has been deleted');
  } else {
    res.status(201).send('Bad request');
  }
});

router.route('/').post(async (req:Request, res:Response) => {
  const {boardId} = req.params;
  const task = await tasksService.save({
    ...req.body,
    boardId,
  });
  res.status(201).json(task);
});

router.route('/:id').put(async (req:Request, res:Response) => {
  const {boardId} = req.params;
  const {id} = req.params;
  const task = await tasksService.update(boardId, id, req.body);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(400).send('Bad request');
  }
});

export {router};
