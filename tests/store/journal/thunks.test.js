import { startNewNote } from "../../../src/store/journal/thunks";


describe('Pruebas en Journal Thunks', () => {

  const dispatch = jest.fn();

  beforeEach( () => jest.clearAllMocks());

  test('startNewNote debe de crear una nueva nota en blanco', () => {

    const uid = 'TEST-UID';
    getState.mockReturnValue({ auth: { uid: uid }});

    await startNewNote()( dispatch, getState );
  })
})