export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    console.log('Nitro plugin request', event)
  })

  nitroApp.hooks.hook('afterResponse', (event) => {
    console.log('Nitro plugin afterResponse', event)
  })


})
