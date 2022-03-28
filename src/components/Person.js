function Person( {foto, nome, idade, profissão}) {
  return (
    <div>
      <img src={foto} alt={nome}></img>
      <h1>Nome: {nome}</h1>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissão}</p>
    </div>
  );
};

export default Person;