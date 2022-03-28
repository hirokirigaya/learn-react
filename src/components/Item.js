import PropsTypes from 'prop-types';

function Item({ modelo, ano_lançamento }) {
  return (
    <>
      <li>{modelo} - {ano_lançamento}</li>
    </>
  );
};

Item.propTypes = {
  modelo: PropsTypes.string.isRequired,
  ano_lançamento: PropsTypes.number.isRequired,
};

Item.defaultProps = {
  modelo: 'Faltou o modelo',
  ano_lançamento: 0,
}

export default Item;