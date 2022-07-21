import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from './../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'duf3yksmd',
  api_key: '941558362379815',
  api_secret: '-lGfpGqWTdn4LJ_Qip42wYHcWc0',
  secure: true,
})

describe('File Upload', () => {

  test('Debe subir el archivo correctamente', async () => {

    const imageUrl = 'https://images.pexels.com/photos/12912306/pexels-photo-12912306.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load';
    const resp = await fetch( imageUrl );
    const blob = await resp.blob();
    const file = new File([blob], 'test.jpg');

    const url = await fileUpload(file);
    expect( typeof url ).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');

    const cloudResp = await cloudinary.api.delete_resources(['journal-app/' + imageId], {
      resource_type: 'image',
    });
    console.log(cloudResp);

  });

  test('Debe de retornar null', async () => {
    const file = new File([], 'test.jpg');

    const url = await fileUpload(file);
    expect( url ).toBe(null);
  });


});