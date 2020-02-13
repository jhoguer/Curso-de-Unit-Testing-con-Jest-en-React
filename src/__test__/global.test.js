const text = "Hola mundo";
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/mundo/)
});

test('¿Tenemos una banana?', () => {
  expect(fruits).toContain('banana')
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('Es Verdadero?', () => {
  expect(true).toBeTruthy()
})

const revertString = (str, callback) => {
  callback(str.split("").reverse().join(""))
};

test('Probar un Callback', () => {
  revertString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});


const revertString2 = str => {
  return new Promise((resolve, reject) => {
    if( !str) {
      reject(Error('Error'))
    }
    resolve(str.split("").reverse().join(""));
  })
};


test('Probar una promesa', () => {
  return revertString2('Hola')
    .then(string =>{
      expect(string).toBe('aloH');
    });
});

test('Probar async/await', async () => {
  const str = await revertString2('Hola')
  expect(str).toBe('aloH');
})

// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de toas las pruebas'));