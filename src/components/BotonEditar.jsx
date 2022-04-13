const BotonEditar = ({
  setIngresoGasto,
  elementoIngresoGasto,
  setRegistroCantidad,
}) => {
  return (
    <button
      type="button"
      className="py-2 px-10 mr-2 bg-sky-200 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
      onClick={() => {
        setIngresoGasto(elementoIngresoGasto);
        setRegistroCantidad(parseFloat(elementoIngresoGasto.cantidad));
      }}
    >
      Editar
    </button>
  );
};

export default BotonEditar;
