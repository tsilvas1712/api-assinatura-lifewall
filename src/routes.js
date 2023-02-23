import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import AddressController from './app/controllers/AddressController';
import ProfileController from './app/controllers/ProfileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.get('/users', authMiddleware, UserController.index);
routes.post('/address', authMiddleware, AddressController.store);

routes.get('/profile', authMiddleware, ProfileController.show);
routes.get('/profile/address', authMiddleware, ProfileController.showAddress);

routes.post('/auth', AuthController.store);

routes.post(
  '/file',
  authMiddleware,
  upload.single('file'),
  FileController.store
);
routes.get('/file', authMiddleware, FileController.index);

export default routes;
