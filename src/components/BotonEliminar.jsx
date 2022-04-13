const BotonEliminar = ({
  eliminarRegistro,
  id,
  setRegistroCantidad,
  elementoIngresoGasto,
  selector,
  cantidad,
}) => {
  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar el registro?');
    if (respuesta) {
      eliminarRegistro(id, selector, cantidad);
    }
  };

  return (
    <button
      type="button"
      className="py-2 px-10 mr-3 bg-red-400 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
      onClick={handleEliminar}
    >
      Eliminar
    </button>
  );
};

export default BotonEliminar;
