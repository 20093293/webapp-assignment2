import Actor from './actorModel';
import express from 'express';
import {
    getTopActors
  } from '../tmdb-api';

  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
        const actors = await Actor.find();
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ code: 500, msg: 'Server Error' });
    }
});

router.get('/tmdb/popular', async (req, res) => {
    try {
      const popularActors = await getTopActors();
      res.status(200).json(popularActors);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;