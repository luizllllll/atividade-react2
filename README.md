# Atividade React 2 - Biblioteca UI com Tailwind CSS

Biblioteca de componentes reutilizáveis (**Button**, **Badge**, **Input**, **Card** e **Alert**) feita com React + Vite e estilizada totalmente com **Tailwind CSS**. As variações visuais são controladas por props.

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── components/
│   ├── Alert/Alert.jsx     → variantes success, error e warning
│   ├── Badge/Badge.jsx     → cores blue, green, red, yellow e gray
│   ├── Button/Button.jsx   → variantes primary, secondary, success, danger e outline + tamanhos sm, md e lg
│   ├── Card/Card.jsx       → card da semana anterior refatorado com Tailwind
│   ├── Footer/Footer.jsx
│   ├── Header/Header.jsx
│   ├── Input/Input.jsx     → label, placeholder e mensagem de erro
│   └── Lista/Lista.jsx
├── App.jsx                 → vitrine de todos os componentes
├── main.jsx                → importa o index.css
└── index.css               → diretivas @tailwind base, components e utilities
```

## Partes do exercício

- **Parte 1:** Tailwind CSS v3 instalado com PostCSS e Autoprefixer (`npm install -D tailwindcss@3 postcss autoprefixer` e `npx tailwindcss init -p`). No `tailwind.config.js`, a opção `content` aponta para `./index.html` e `./src/**/*.{js,jsx,ts,tsx}`. O `index.css` tem as diretivas do Tailwind e é importado no `main.jsx`.
- **Parte 2:** componentes `Button`, `Badge` e `Input` estilizados com Tailwind e com variações por props, por exemplo `<Button variant="primary">` e `<Button variant="danger">`. O `Card` da semana anterior foi refatorado: saiu o CSS tradicional e entraram as classes do Tailwind.
- **Parte 3:** componente `Alert` com as variantes `success`, `error` e `warning`. A cor de fundo e a cor do texto mudam de acordo com a prop `variant`.
- **Parte 4:** reflexão abaixo.

### Como as classes dinâmicas foram feitas

As classes de cada variante ficam num objeto (ex.: `variantes[variant]`) e são combinadas com a biblioteca `clsx`. Não usei template literal como `bg-${cor}-500` porque o Tailwind procura as classes lendo o código como texto. Se o nome da classe for montado em tempo de execução, ele não aparece inteiro no código e o Tailwind não gera o CSS correspondente. Com o objeto, todas as classes estão escritas por extenso e funcionam.

## Reflexão: Tailwind CSS x CSS tradicional

**Quais as vantagens e desvantagens de usar Tailwind CSS em vez de arquivos CSS tradicionais na componentização do React?**

### Vantagens

- **Estilo junto do componente:** a estrutura (JSX) e o visual ficam no mesmo arquivo. Para entender ou mudar um componente, não é preciso procurar a regra em outro arquivo CSS.
- **Sem conflito de nomes:** não é preciso inventar nomes de classe como `.card-titulo` nem se preocupar com uma regra de um componente afetando outro, já que as classes utilitárias valem só onde são usadas.
- **Variações por props ficam simples:** é fácil ligar uma prop (`variant="danger"`) a um conjunto de classes, o que combina muito bem com a ideia de componentes reutilizáveis do React.
- **Consistência visual:** cores, espaçamentos e tamanhos vêm de uma escala pronta (`p-4`, `text-lg`, `bg-blue-600`), então a interface fica padronizada mesmo com várias pessoas mexendo.
- **CSS final pequeno:** o Tailwind gera só as classes que aparecem no código, então o arquivo de produção fica leve.
- **Desenvolvimento mais rápido:** responsividade (`sm:`, `lg:`) e estados (`hover:`, `focus:`, `disabled:`) se resolvem direto na classe, sem escrever media queries ou seletores.

### Desvantagens

- **JSX poluído:** a lista de classes pode ficar muito longa e deixar o código difícil de ler.
- **Curva de aprendizado:** é preciso decorar ou consultar os nomes das classes, e quem não conhece Tailwind estranha no começo.
- **Classes dinâmicas exigem cuidado:** montar nomes como `bg-${cor}-500` não funciona, porque o Tailwind precisa encontrar a classe escrita por extenso no código.
- **Repetição:** se o mesmo conjunto de classes aparece em vários lugares, é preciso criar um componente ou usar `@apply`. Senão, a mudança tem que ser feita em vários pontos.
- **Configuração extra:** depende de instalar e configurar o Tailwind e o PostCSS, e o `content` precisa estar certo para as classes serem geradas.
- **Mistura de responsabilidades:** algumas pessoas preferem separar estrutura e estilo, como no CSS tradicional, e acham que o Tailwind mistura as duas coisas.

**Conclusão:** em projetos React, o Tailwind combina bem com a componentização. Cada componente carrega o próprio estilo e as variações viram props. O cuidado principal é manter o JSX organizado e não montar nomes de classe dinamicamente.
