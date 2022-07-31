import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Header } from "../components/Register/Header";
import { SpeakerCard } from "../components/SpeakerCard";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { createOrder, getServiceAreas } from "../redux/thunks";

import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import es from "react-phone-number-input/locale/es.json";

import _ from "lodash";
import { setSuccess } from "../redux/slices/orderSlices";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const sortedCountries = (countries, labels) => {
  const listOfCountries = [];
  countries.forEach((country) => {
    listOfCountries.push({
      label: `${labels[country]} +${getCountryCallingCode(country)}`,
      value: `${labels[country]} +${getCountryCallingCode(country)}`,
      numericValue: parseInt(getCountryCallingCode(country)),
    });
  });
  return [
    {
      label: "Costa Rica +506",
      value: "Costa Rica +506",
      numericValue: 506,
    },
  ].concat(
    _.sortBy(listOfCountries, (c) => {
      return c.label;
    })
  );
};

const Register = () => {
  const dispatch = useDispatch();
  const query = useQuery();

  const [file, setFile] = useState();
  const [serviceId, setServiceId] = useState();
  const [registrionType, setRegistrionType] = useState(null);
  const [formError, setFormError] = useState(null);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const registrationType = query.get("type");
    if (registrationType) {
      setRegistrionType(registrationType);
    }
  }, [query]);

  const { serviceCatalog } = useSelector((state) => state.catalogs);
  const { isLoading } = useSelector((state) => state.ui);
  const { creationSuccess } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getServiceAreas());
    dispatch(setSuccess(false));
  }, [dispatch]);

  const [datos, setDatos] = useState({
    fullName: "",
    identificationNumber: "",
    numOfChildren: "",
    phoneNumber: "",
    email: "",
    emailGift: "",
    yearsOfOasisMom: "",
    countryCode: "",
  });

  const handleService = (e) => {
    setServiceId(e.target.value);
  };

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setFormError(false);
    setFormSent(true);
    if (
      datos.fullName &&
      datos.numOfChildren &&
      datos.phoneNumber &&
      datos.email &&
      (!registrionType !== "gift" || datos.emailGift) &&
      datos.yearsOfOasisMom &&
      datos.countryCode
    ) {
      const values = {
        nombreCompleto: datos.fullName,
        cantidadHijos: Number(datos.numOfChildren),
        codigoPaisTelefono: datos.countryCode,
        telefono: datos.phoneNumber,
        email: datos.email,
        emailBeneficiario: datos.emailGift || '',
        aniosMamaOasis: Number(datos.yearsOfOasisMom),
        areaServicioId: Number(serviceId),
        comprobante: file,
      };

      const {
        nombreCompleto,
        tipoIdentificacionId,
        identificacion,
        cantidadHijos,
        codigoPaisTelefono,
        telefono,
        email,
        aniosMamaOasis,
        areaServicioId,
        comprobante,
        emailBeneficiario,
      } = values;

      dispatch(
        createOrder(
          nombreCompleto,
          tipoIdentificacionId,
          identificacion,
          cantidadHijos,
          codigoPaisTelefono,
          telefono,
          email,
          aniosMamaOasis,
          areaServicioId,
          emailBeneficiario,
          comprobante
        )
      );
    } else {
      setFormError("Debe completar todos los espacios");
      setFormSent(false);
    }
  };

  return (
    <div className="bg-purple">
      {formSent && creationSuccess && <Navigate to="/" />}
      {isLoading && <SpinnerLoading />}
      <Header />
      <div className="zig-zag-top pb-10">
        <div className="flex flex-col justify-center text-white items-center mt-8 w-5/6 mx-auto rounded-2xl border-4 border-white p-8">
          <h2 className="text-4xl">Formulario de registro</h2>
          <form className="w-11/12 mt-4" onSubmit={onsubmit}>
            <div className="w-full xl:text-xl md:text-base">
              <div className="flex gap-8 flex-col xl:flex-row w-full">
                <div className="xl:w-1/2">
                  <label className="flex flex-col">
                    Nombre Completo
                    {registrionType === "gift" ? " de mamá*" : "*"}
                    <input
                      className="px-4 py-2 text-black"
                      type="text"
                      value={datos.fullName}
                      name="fullName"
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="xl:w-1/2">
                  <label className="flex flex-col">
                    Email{registrionType === "gift" ? " de mamá*" : "*"}
                    <input
                      className="px-4 py-2 text-black"
                      type="email"
                      name={registrionType ? "emailGift" : "email"}
                      value={registrionType ? datos.emailGift : datos.email}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="w-full flex flex-col xl:flex-row gap-8 mt-4">
                <div className="xl:w-4/12 w-full">
                  <div>
                    <label className="flex flex-col">
                      Código País*
                      <select
                        name="countryCode"
                        className="px-4 py-2 text-black h-11 w-full"
                        onChange={(evt) => {
                          setDatos({
                            ...datos,
                            countryCode: evt.target.value,
                          });
                        }}
                        value={datos.countryCode}
                        required
                      >
                        <option value="none">Selecciona un código</option>
                        {sortedCountries(getCountries(), es).map((item, index) => {
                          return (
                            <option
                              key={index}
                              value={item.numericValue}
                            >
                              {item.label}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                </div>
                <div className="xl:w-4/12">
                  <label className="flex flex-col">
                    Telefono*
                    <input
                      className="px-4 py-2 text-black"
                      type="number"
                      name="phoneNumber"
                      value={datos.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="xl:w-4/12">
                  <label className="flex flex-col ">
                    Cantidad de hijos*
                    <input
                      min={0}
                      className="px-4 py-2 text-black"
                      type="number"
                      name="numOfChildren"
                      value={datos.numOfChildren}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="w-full flex flex-col xl:flex-row gap-8 mt-4">
                <div className="xl:w-1/2 w-full">
                  <label className="flex flex-col ">
                    Cuantos años de ser mama Oasis*
                    <input
                      min={0}
                      className="px-4 py-2 text-black"
                      type="number"
                      name="yearsOfOasisMom"
                      value={datos.yearsOfOasisMom}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="xl:w-1/2 w-full">
                  <label className="flex flex-col w-full">
                    Area de servicio*
                    <select
                      id="serviceId"
                      name="serviceId"
                      onChange={handleService}
                      className="px-4 py-2 text-black h-11"
                      required
                    >
                      <option value="none">Selecciona una opcion</option>
                      {serviceCatalog.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.valor}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              {registrionType === "gift" && (
                <div className="flex gap-8 flex-col md:flex-row w-full mt-4">
                  <div className="xl:w-1/2">
                    <label className="flex flex-col">
                      Email de quien regala*
                      <input
                        className="px-4 py-2 text-black"
                        type="email"
                        name="email"
                        value={datos.email}
                        onChange={handleInputChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="hidden xl:block w-1/2" />
                </div>
              )}
              <div className="mt-5">
                <label className="flex flex-col">
                  Comprobante de pago*
                  <input
                    type="file"
                    name="images"
                    onChange={onChangeFile}
                    className="text-sm mt-4 text-grey-500
                                file:mr-5 file:py-3 file:px-10
                                file:rounded-full file:border-0
                                file:text-md file:font-semibold
                                file:bg-gradient-to-r file:bg-white file:text-purple
                                hover:file:cursor-pointer hover:file:opacity-80"
                    required
                  />
                </label>
              </div>
              {formError && (
                <div className="mt-8">
                  <p className="text-yellow-500">
                    Por favor complete todos los espacios del formulario
                    marcados con *
                  </p>
                </div>
              )}
              <div className="mt-8 flex flex-row justify-center w-full">
                <button
                  to="/register"
                  className="text-white rounded-3xl border-4 px-6 py-4"
                >
                  Enviar {registrionType === "gift" ? "regalo" : "registro"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="py-20 w-5/6 mx-auto">
        <SpeakerCard />
      </div>
    </div>
  );
};

export default Register;
