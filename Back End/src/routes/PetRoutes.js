import {Router} from 'express'
import {PetsController} from '../controllers/PetController.js'

const petRoutes =  Router()
const petController = new PetsController()

petRoutes.get('/', petController.animalList)
petRoutes.get('/:id', petController.animalListId)
petRoutes.post('/', petController.petAdd)
petRoutes.put('/:pet_id', petController.petUpdate)
petRoutes.delete('/:pet_id', petController.petDelete)




export {petRoutes}
