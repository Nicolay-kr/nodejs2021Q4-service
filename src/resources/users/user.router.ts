import {Router, Request, Response} from 'express';

const router = Router();
const userService = require('./user.service.ts');

router.route('/').get(async (req: Request, res: Response) => {
  console.log(req);
  const users = await userService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await userService.get(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await userService.remove(id);
  if (user) {
    res.status(204).send('The user has been deleted');
  } else {
    res.status(200).send('Bad request');
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const user = await userService.save(req.body);
  res.status(201).json(user);
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await userService.update(id, req.body);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).send('Bad request');
  }
});

export {router};
