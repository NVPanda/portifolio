import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Bem-vindo à Home!');
});

export default router;
