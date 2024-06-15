describe("Pruebas en <DemoComponent />", () => {
  test("Esta prueba no debe de fallar", () => {
    //Las pruebas generalmente tiene tres pasaso

    // 1. inicialización
    const message1 = "Hola Mundo";

    // 2. estímulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento... esperado
    //expect viene en jest
    expect(message1).toBe(message2);
  });
});
