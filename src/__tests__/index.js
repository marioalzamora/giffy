import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders without crashing', async () => {
  render(<App />);
  const title = await screen.findByText(/Última Búsqueda/i);
  expect(title).toBeInTheDocument();
});

test('search form could be used', async ()=> {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, {target: {value:'matrix'} })
  fireEvent.click(button)

  const title = await screen.findByText('matrix')
  expect(title).toBeVisible()
})