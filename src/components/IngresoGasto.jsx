import BotonEditar from './BotonEditar';
import BotonEliminar from './BotonEliminar';

const IngresoGasto = ({
  elementoIngresoGasto,
  setIngresoGasto,
  setRegistroCantidad,
  eliminarRegistro,
}) => {
  const { cantidad, categoria, comentarios, descripcion, fecha, selector, id } =
    elementoIngresoGasto;
  let colorElemento = '';
  if (selector === 'ingreso') {
    colorElemento = 'capitalize font-bold text-emerald-500';
  } else {
    colorElemento = 'capitalize font-bold text-red-400';
  }

  let euros = Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' });
  return (
    <div className="mx-3 bg-white shadow-md px-5 py-10 rounded-xl my-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Tipo: <span className={colorElemento}>{selector}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripción:{' '}
        <span className="capitalize font-normal ">{descripcion}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Categoría: <span className="font-normal capitalize">{categoria}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Cantidad:{' '}
        <span className="font-normal normal-case">
          {euros.format(cantidad)}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Comentarios:{' '}
        <span className="font-normal normal-case">{comentarios}</span>
      </p>
      <BotonEditar
        setIngresoGasto={setIngresoGasto}
        elementoIngresoGasto={elementoIngresoGasto}
        setRegistroCantidad={setRegistroCantidad}
      />
      <BotonEliminar
        eliminarRegistro={eliminarRegistro}
        id={id}
        selector={selector}
        cantidad={cantidad}
        setRegistroCantidad={setRegistroCantidad}
        elementoIngresoGasto={elementoIngresoGasto}
      />
    </div>
  );
};

export default IngresoGasto;
