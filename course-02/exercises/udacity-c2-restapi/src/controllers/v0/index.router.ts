import { Router, Request, Response } from 'express';
import { FeedRouter } from './feed/routes/feed.router';
import { UserRouter } from './users/routes/user.router';

const router: Router = Router();

router.use('/feed', FeedRouter);  // FeedRouter controls actions on the /feed endpoint
router.use('/users', UserRouter); // UseRouter controls actions on the /users endpoint

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;