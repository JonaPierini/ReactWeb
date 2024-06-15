import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

//NO HAY QUE EVALUAR LOS HOOKS. TENEMOS QUE PROBAR NUESTRAS COSAS y como nuestras funciones interactuan con esos estados

describe("Pruebas en el <CounterApp />", () => {
  const initialValue = 10;

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100 <CounterApp value={100}>", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')
  });

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    //+1 es porque en el componente existe ese +1
    fireEvent.click(screen.getByText("+1"));
    //Si hacemos +1 el valor que espera es 11
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    //-1 es porque en el componente existe ese -1
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("debe de funcionar el botón de reset", () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    //ANTES del resete espera el numero 358
    expect(screen.getByText("358")).toBeTruthy();

    //LLAMAMOS AL EVENTE RESETE
    fireEvent.click(screen.getByText("Reset"));

    //SI en vez de apuntar al texto reset apuntamos a algo mas particular => NOMBRE QUE ESTA EN EL COMPONENTE
    // fireEvent.click(screen.getByRole('button', {name: 'btn-rest'}))

    //RESETEA y vuelve al valor inicial (355)
    expect(screen.getByText(355)).toBeTruthy();
  });
});
