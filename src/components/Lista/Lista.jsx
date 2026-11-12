function Lista({ itens }) {
  return (
    <ul className="list-disc space-y-1 pl-6 text-gray-700">
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default Lista;
