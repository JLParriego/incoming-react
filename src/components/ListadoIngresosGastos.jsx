import IngresoGasto from './IngresoGasto';

const ListadoIngresosGastos = ({
  ingresosGastos,
  setIngresoGasto,
  setRegistroCantidad,
  eliminarRegistro,
}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {ingresosGastos && ingresosGastos.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Ingresos y Gastos
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{' '}
            <span className="text-emerald-500 font-bold ">Ingresos</span> y{' '}
            <span className="text-red-400 font-bold ">Gastos</span>
          </p>
          {ingresosGastos.map((elementoIngresoGasto) => (
            <IngresoGasto
              key={elementoIngresoGasto.id}
              elementoIngresoGasto={elementoIngresoGasto}
              setIngresoGasto={setIngresoGasto}
              setRegistroCantidad={setRegistroCantidad}
              eliminarRegistro={eliminarRegistro}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Aquí aparecerá un listado de tus Ingresos y Gastos
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Introduce tus{' '}
            <span className="text-emerald-500 font-bold ">Ingresos</span> y{' '}
            <span className="text-red-400 font-bold ">Gastos</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoIngresosGastos;
