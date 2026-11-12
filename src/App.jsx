import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Lista from './components/Lista/Lista';
import Button from './components/Button/Button';
import Badge from './components/Badge/Badge';
import Input from './components/Input/Input';
import Alert from './components/Alert/Alert';

function App() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const emailValido = email.includes('@') && email.includes('.');
  const erroEmail = enviado && !emailValido ? 'Digite um e-mail válido.' : '';

  const cards = [
    { id: 1, titulo: 'JSX', descricao: 'Sintaxe que permite escrever HTML dentro do JavaScript.', badge: 'Básico', cor: 'green' },
    { id: 2, titulo: 'Props', descricao: 'Dados passados de um componente pai para um filho.', badge: 'Essencial', cor: 'blue' },
    { id: 3, titulo: 'Tailwind', descricao: 'Classes utilitárias para estilizar direto no JSX.', badge: 'Novo', cor: 'yellow' },
  ];

  const tecnologias = ['React', 'Vite', 'Tailwind CSS', 'clsx'];

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header titulo="Biblioteca UI com Tailwind" />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Button</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="primary" size="sm">Pequeno</Button>
            <Button variant="primary" size="lg">Grande</Button>
            <Button variant="primary" disabled>Desabilitado</Button>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Badge</h2>
          <div className="flex flex-wrap gap-2">
            <Badge color="blue">Azul</Badge>
            <Badge color="green">Verde</Badge>
            <Badge color="red">Vermelho</Badge>
            <Badge color="yellow">Amarelo</Badge>
            <Badge color="gray">Cinza</Badge>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Card</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <Card key={card.id} titulo={card.titulo} descricao={card.descricao}>
                <Badge color={card.cor}>{card.badge}</Badge>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Input</h2>
          <div className="flex max-w-md flex-col gap-4">
            <Input
              label="E-mail"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={erroEmail}
            />
            <Button variant="primary" onClick={() => setEnviado(true)}>
              Enviar
            </Button>
            {enviado && emailValido && <Alert variant="success">E-mail enviado com sucesso.</Alert>}
            {enviado && !emailValido && <Alert variant="error">Corrija o e-mail antes de enviar.</Alert>}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Alert</h2>
          <div className="flex flex-col gap-3">
            <Alert variant="success">Operação realizada com sucesso.</Alert>
            <Alert variant="error">Não foi possível salvar os dados.</Alert>
            <Alert variant="warning">Sua sessão vai expirar em 5 minutos.</Alert>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Tecnologias usadas</h2>
          <Lista itens={tecnologias} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
