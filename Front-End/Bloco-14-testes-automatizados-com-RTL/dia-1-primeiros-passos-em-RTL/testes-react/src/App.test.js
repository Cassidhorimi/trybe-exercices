import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';

test('testa se input esta na tela', () => {
  render(<App />);
  const input = screen.getByLabelText(/digite sua tarefa:/i);
  expect(input).toBeInTheDocument();
});

test('testa se button esta na tela', () => {
  render(<App />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});

test('testa se ao clicar no botao o texto aparece na tela', () => {
  render(<App />);
  const input = screen.getByLabelText(/digite sua tarefa:/i);
  const btn = screen.getByRole("button");
  const task = screen.getByTestId("task-id");

  userEvent.type(input, "teste");
  userEvent.type(input, "teste 1");
  userEvent.type(input, "teste 3");
  userEvent.click(btn);

  expect(input).toHaveValue("");
  expect(task).toHaveTextContent("teste");
})
