import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

router.get('/list', defineEventHandler(() => {
    return {
        message: 'list product'
    }
}))

router.post('/create', defineEventHandler(() => 'create product'))

export default useBase('/api/hello', router.handler)
