import BalanceElement from './BalanceElement';

const Balance = ({ totalIngresos, totalGastos, saldo }) => {
  let euros = Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' });
  const elementoIngreso = {
    concepto: 'Ingresos',
    color: 'text-emerald-500',
    cantidad: euros.format(totalIngresos),
    icono: 'plus',
  };
  const elementoGasto = {
    concepto: 'Gastos',
    color: 'text-red-400',
    cantidad: euros.format(totalGastos),
    icono: 'minus',
  };
  const elementoSaldo = {
    concepto: 'Saldo',
    color: 'text-emerald-500',
    cantidad: euros.format(saldo),
    icono: 'equals',
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-8">Balance</h1>
      <div className="flex mt-8 ">
        <div className="flex flex-col bg-white shadow-md rounded-md justify-between  w-1/2 mx-auto border  border-solid border-gray-200  text-xl ">
          <BalanceElement elemento={elementoIngreso} />
          <BalanceElement elemento={elementoGasto} />
          <div className=" h-[2px] bg-emerald-300 bg-opacity-50 mx-2"></div>
          <BalanceElement elemento={elementoSaldo} />
        </div>
      </div>
    </div>
  );
};

export default Balance;
