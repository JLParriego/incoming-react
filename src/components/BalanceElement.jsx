import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BalanceElement = ({ elemento }) => {
  const { concepto, cantidad, color, icono } = elemento;

  return (
    <div className="flex flex-row  justify-between mx-5 mb-2 mt-5 hover:scale-105 transition transform duration-500 cursor-pointer">
      <p className={color}>{concepto} </p>
      <p className="mr-5">
        {cantidad}
        <FontAwesomeIcon icon={['fas', icono]} className={`${color} ml-3`} />
      </p>
    </div>
  );
};

export default BalanceElement;
