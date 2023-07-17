import {Router} from 'express'
import {getEmployees} from'../controllers/employeesControllers.js'

const router = Router()

router.get('/', getEmployees)

router.post('/', (req, res) => {
    res.send('Obteniendo empleados')
})

router.put('/', (req, res) => {
    res.send('Obteniendo empleados')
})

router.delete('/', (req, res) => {
    res.send('Obteniendo empleados')
})

export default router