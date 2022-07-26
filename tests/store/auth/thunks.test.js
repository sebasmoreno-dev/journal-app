import { checkingCredential } from "../../../src/store/auth/authSlice"
import { checkingAuthentication } from "../../../src/store/auth/thunks"

jest.mock('./../../../src/firebase/providers')

describe('Pruebas eb AuthThunks', () => {

  const dispatch = jest.fn()
  beforeEach( () => jest.clearAllMocks());

  test('debe de invocar el checkingCredential', async () => {

    await checkingAuthentication()( dispatch );
    expect( dispatch ).toHaveBeenCalledWith(checkingCredential())
  })
})