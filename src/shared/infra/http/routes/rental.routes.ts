import { CreateRentalController } from '@modules/rentals/useCases/createRental/createController';
import { Router } from 'express';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();


export { rentalRoutes };