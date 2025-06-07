import { Router } from 'express';
import { generateMockPet } from '../mocks/petMocks.js';
import { generateUsersMock } from '../mocks/userMocker.js';
import { usersService, petsService } from '../services/index.js';
import { generateAndInsertData } from '../mocks/dataSeeder.js';


const router = Router();

//Mock de pets
router.get('/mockingpets', (req, res) => {
  const pets = Array.from({ length: 50 }, () => generateMockPet());
  res.send({ status: 'success', payload: pets });
});


// Mock de users
router.get('/mockingusers', async (req, res) => {
  const users = await generateUsersMock(50);
  res.send({ status: 'success', payload: users });
});


// Mock de generateData
router.post('/generateData', async (req, res) => {
  await generateAndInsertData(req.body, usersService, petsService);
  res.send({ status: 'success', message: 'Datos generados exitosamente' });
});


export default router;
