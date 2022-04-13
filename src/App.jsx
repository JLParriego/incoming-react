import { useState, useEffect } from 'react';
import Balance from './components/Balance';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoIngresosGastos from './components/ListadoIngresosGastos';

function App() {
  const [ingresosGastos, setIngresosGastos] = useState([]);

  const [ingresoGasto, setIngresoGasto] = useState({
    fecha: '',
    selector: '-- select an option --',
    descripcion: '',
    categoria: '',
    cantidad: '',
    comentarios: '',
    id: '',
  });

  const [totalIngresos, setTotalIngresos] = useState(0);
  const [totalGastos, setTotalGastos] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [registroCantidad, setRegistroCantidad] = useState(0);
  // Revisamos si tenemos algo en memoria
  useEffect(() => {
    const obtenerLS = () => {
      const ingresosyGastosLS =
        JSON.parse(localStorage.getItem('ingresosyGastos')) ?? [];
      setIngresosGastos(ingresosyGastosLS);
      const totalIngresosLS =
        JSON.parse(localStorage.getItem('totalIngresos')) ?? 0;
      setTotalIngresos(totalIngresosLS);
      const totalGastosLS =
        JSON.parse(localStorage.getItem('totalGastos')) ?? 0;
      setTotalGastos(totalGastosLS);
      const saldoLS = JSON.parse(localStorage.getItem('saldodeCuenta')) ?? 0;
      setSaldo(saldoLS);
    };
    obtenerLS();
  }, []);

  //Escuchamos cambios en los estados y guardamos en memoria
  useEffect(() => {
    localStorage.setItem('ingresosyGastos', JSON.stringify(ingresosGastos));
    localStorage.setItem('totalIngresos', JSON.stringify(totalIngresos));
    localStorage.setItem('totalGastos', JSON.stringify(totalGastos));
    localStorage.setItem('saldodeCuenta', JSON.stringify(saldo));
  }, [ingresosGastos, totalIngresos, totalGastos, saldo]);

  const handleChange = (e) => {
    setIngresoGasto({ ...ingresoGasto, [e.target.name]: e.target.value });
  };

  const eliminarRegistro = (id, selector, cantidad) => {
    console.log(cantidad);
    const ingresosGastosActualizados = ingresosGastos.filter(
      (registro) => registro.id !== id
    );
    setIngresosGastos(ingresosGastosActualizados);
    if (selector === 'ingreso') {
      setTotalIngresos(totalIngresos - cantidad);
      setSaldo(saldo - parseFloat(cantidad));
    } else {
      setTotalGastos(totalGastos - cantidad);
      setSaldo(saldo + parseFloat(cantidad));
    }
  };

  return (
    <div className="container mx-auto bg-slate-50 mt-8 ">
      <Header />
      <Balance
        totalIngresos={totalIngresos}
        totalGastos={totalGastos}
        saldo={saldo}
      />
      <div className="mt-10 md:flex">
        <Formulario
          ingresoGasto={ingresoGasto}
          setIngresoGasto={setIngresoGasto}
          handleChange={handleChange}
          ingresosGastos={ingresosGastos}
          setIngresosGastos={setIngresosGastos}
          totalIngresos={totalIngresos}
          setTotalIngresos={setTotalIngresos}
          totalGastos={totalGastos}
          setTotalGastos={setTotalGastos}
          saldo={saldo}
          setSaldo={setSaldo}
          registroCantidad={registroCantidad}
        />
        <ListadoIngresosGastos
          ingresosGastos={ingresosGastos}
          setIngresoGasto={setIngresoGasto}
          setRegistroCantidad={setRegistroCantidad}
          eliminarRegistro={eliminarRegistro}
        />
      </div>
    </div>
  );
}

export default App;
