// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate'; // <-- yarn add setimmediate

require('dotenv').config({
  path: '.env.test'
})

//Crear un mock
jest.mock('./src/helpers/getEnvironments', () => ({
  getEnvironments: () => ({ ...process.env })
}));

