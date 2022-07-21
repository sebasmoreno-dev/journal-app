import { fileUpload } from './../../src/helpers/fileUpload';


describe('File Upload', () => {

  test('Debe subir el archivo correctamente', async () => {

    const imageUrl = 'https://images.pexels.com/photos/12912306/pexels-photo-12912306.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load';
    const resp = await fetch( imageUrl );
    const blob = await resp.blob();
    const file = new File([blob], 'test.jpg');

    const url = await fileUpload(file);
    expect( typeof url ).toBe('string');
  })
})