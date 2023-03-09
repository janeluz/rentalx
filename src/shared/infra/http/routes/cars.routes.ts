import uploadConfig from '@config/uploadConfig';
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCarSpecification/createCarSpecificationController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListCarsController';
import { Router} from 'express';
import multer from 'multer';
import { ensureAdmin } from '../middlewares/ensureAdmin';
// import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig);

carsRoutes.post("/",
ensureAuthenticated,

createCarController.handle);

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post("/specifications/:id",
ensureAuthenticated,
//ensureAdmin,
createCarSpecificationController.handle);

carsRoutes.post("/images/:id",
ensureAuthenticated,
//ensureAdmin,
upload.array("images"),
uploadCarImagesController.handle);



export { carsRoutes };