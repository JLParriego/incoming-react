import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({
  ingresoGasto,
  setIngresoGasto,
  handleChange,
  ingresosGastos,
  setIngresosGastos,
  totalGastos,
  setTotalGastos,
  totalIngresos,
  setTotalIngresos,
  saldo,
  setSaldo,
  registroCantidad,
}) => {
  const [error, setError] = useState(false);

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validación del formulario
    const { fecha, selector, descripcion, categoria, cantidad, comentarios } =
      ingresoGasto;
    if (
      [fecha, selector, descripcion, categoria, cantidad, comentarios].includes(
        ''
      )
    ) {
      setError(true);
    } else {
      setError(false);
      let editado = [];

      if (ingresoGasto.id) {
        console.log('editando');
        console.log(ingresoGasto.cantidad);
        editado = ingresosGastos.filter(
          (registro) => registro.id !== ingresoGasto.id
        );

        setIngresosGastos([...editado, ingresoGasto]);
        console.log(editado);
        if (ingresoGasto.selector === 'ingreso') {
          setTotalIngresos(
            (totalIngresos =
              totalIngresos -
              registroCantidad +
              parseFloat(ingresoGasto.cantidad))
          );
        } else {
          setTotalGastos(
            (totalGastos =
              totalGastos -
              registroCantidad +
              parseFloat(ingresoGasto.cantidad))
          );
        }
      } else {
        console.log('nuevo registro');
        //Generamos un id automático
        ingresoGasto.id = generarId();
        setIngresosGastos([...ingresosGastos, ingresoGasto]);
        //Asignamos un ingreso o gasto a la db de ingresos o gastos

        //Cogemos la cantidad de cada ingreso o gasto y la añadimos al total de ingresos o gastos
        if (ingresoGasto.selector === 'ingreso') {
          setTotalIngresos(
            (totalIngresos += parseFloat(ingresoGasto.cantidad))
          );
        } else {
          setTotalGastos((totalGastos += parseFloat(ingresoGasto.cantidad)));
        }
      }
    }

    //Calculamos el saldo de la cuenta
    setSaldo(totalIngresos - totalGastos);

    //Reiniciamos el formulario
    setIngresoGasto({
      fecha: '',
      selector: '-- select an option --',
      descripcion: '',
      categoria: '',
      cantidad: '',
      comentarios: '',
      id: '',
    });
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3">
      <h2 className="font-black text-3xl text-center">
        Formulario de Resgistro
      </h2>
      <p className="text-lg mt-3 text-center mb-5">
        Añade {''}
        <span className="text-emerald-500 font-bold ">Ingresos</span> y{' '}
        <span className="text-red-400 font-bold ">Gastos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-10 px-5"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            name="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ingresoGasto.fecha}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="selectorIngresoGasto"
            className="block text-gray-700 uppercase font-bold"
          >
            Elige Ingreso o Gasto
          </label>
          <select
            id="selectorIngresoGasto"
            type="text"
            name="selector"
            placeholder="Descripción del ingreso o gasto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ingresoGasto.selector}
            onChange={(e) => handleChange(e)}
          >
            <option hidden disabled>
              {' '}
              -- select an option --{' '}
            </option>
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripción
          </label>
          <input
            id="descripcion"
            type="text"
            name="descripcion"
            placeholder="Descripción del ingreso o gasto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ingresoGasto.descripcion}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="categoria"
            className="block text-gray-700 uppercase font-bold"
          >
            Categoría
          </label>
          <input
            id="categoria"
            type="text"
            name="categoria"
            placeholder="Categoría del ingreso o gasto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ingresoGasto.categoria}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cantidad"
            className="block text-gray-700 uppercase font-bold"
          >
            Cantidad
          </label>
          <input
            id="cantidad"
            type="number"
            name="cantidad"
            inputMode="numeric"
            placeholder="Cantidad"
            min={0}
            step={0.01}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ingresoGasto.cantidad}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="comentarios"
            className="block text-gray-700 uppercase font-bold"
          >
            Comentarios
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            placeholder="Escribe comentarios"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ingresoGasto.comentarios}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="flex flex-row justify-center">
          <input
            type="submit"
            className="bg-emerald-200 basis-4/5 rounded-md  p-3 text-white uppercase font-bold hover:bg-emerald-600 cursor-pointer transition-all mr-3"
            value={ingresoGasto.id ? 'Editar Registro' : 'Agregar Registro'}
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
