import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

router.get('/list', defineEventHandler(() => {
    return {
        message: 'list product'
    }
}))

router.get('/list2', defineEventHandler(() => {
    return {
        message: 'list product2'
    }
}))

router.post('/create', defineEventHandler(() => 'create product'))

export default useBase('/api/product', router.handler)
