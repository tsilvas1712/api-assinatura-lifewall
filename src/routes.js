import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController';

import AddressController from './app/controllers/AddressController';
import DeliveryController from './app/controllers/DeliveryController';
import FileController from './app/controllers/FileController';
import PlanController from './app/controllers/PlanController';
import ProfileController from './app/controllers/ProfileController';
import authMiddleware from './app/middlewares/auth';
import AdminController from './app/controllers/AdminController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/plans', PlanController.store);
routes.get('/plan', authMiddleware, PlanController.index);

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
routes.get('/file/:id', authMiddleware, FileController.delete);
routes.get('/print', authMiddleware, FileController.print);

routes.post('/delivery', authMiddleware, DeliveryController.store);
routes.get('/delivery', authMiddleware, DeliveryController.index);

routes.get('/admin', authMiddleware, AdminController.index);
routes.get('/admin/users', authMiddleware, AdminController.listUsers);
routes.get('/admin/deliveries', authMiddleware, AdminController.listDeliveries);

export default routes;
