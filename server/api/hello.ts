export default defineEventHandler((event) => {

const runtimeConfig = useRuntimeConfig()

    return {
      hello: 'world',
      xxxx: runtimeConfig.nuxtMongodbUri
    }
  })
