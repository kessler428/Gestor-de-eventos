import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fecth";
import { setListAsistence, setPaginationAsistence } from "./slices/asistenceSlices";
import { setLoginAuth, setLogout } from "./slices/authSlices";
import {
  setIdentificationCatalog,
  setServiceCatalog,
} from "./slices/catalogsSlices";
import {
  setListOrder,
  setGetOneOrder,
  setPagination,
  setSuccess,
} from "./slices/orderSlices";
import { setIsLoading } from "./slices/uiSlices";

const baseUrl = process.env.REACT_APP_API_URL;

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      let resp = await fetchSinToken(
        "auth/login",
        {
          email,
          password,
        },
        "POST"
      );

      const body = await resp.json();

      if (resp.status === 200) {
        localStorage.setItem("token", body.token);
			  localStorage.setItem("token-init-date", new Date().getTime());


        dispatch(setLoginAuth({
          token: body.token,
          email: body.user.email,
          userId: body.user.userId,
          name: body.user.nombre
        }))

        window.location = '/order'

      } else {
        Swal.fire({
          title: "error",
          text: "Usuario o contraseña incorrecta",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const Logout = (token) => {
	return async (dispacth) => {

		const resp = await fetchConToken(
			"auth/logout",
			{ 
        token 
      },
			"PUT"
		);

		if (resp.status === 200) {
			dispacth(setLogout());
		} 

		if (resp.status === 406) {
			dispacth(setLogout());
		} 
		dispacth(setIsLoading(false));
	};
};

export const getServiceAreas = () => {
  return async (dispatch) => {
    try {
      let resp = await fetchSinToken("catalogos?name=Area%20de%20servicio");
      const body = await resp.json();

      dispatch(setIsLoading(false))
      if (body.success === true) {
        dispatch(setServiceCatalog(body.catalogos));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getIdTypes = () => {
  return async (dispatch) => {
    try {
      let resp = await fetchSinToken("catalogos?name=identificacion");
      const body = await resp.json();
      dispatch(setIsLoading(false))
      if (body.success) {
        dispatch(setIdentificationCatalog(body.catalogos));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createOrder = (
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
) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const data = await fileUploadFetch(`upload`, comprobante);

      if (data.status === 200) {
        const fileData = await data.json();
        const resp = await fetchSinToken(
          "pedido",
          {
            nombreCompleto,
            tipoIdentificacionId,
            identificacion,
            cantidadHijos,
            codigoPaisTelefono,
            telefono,
            email,
            emailBeneficiario,
            aniosMamaOasis,
            areaServicioId,
            comprobantePago: fileData.url,
            aprobado: false,
            ingreso: false,
            esVisible: true,
          },
          "POST"
        );

        dispatch(setIsLoading(false))

        if (resp.status === 200) {
          Swal.fire({
            title: "¡Felicidades!",
            text: "Registro creado correctamente",
            icon: "success",
          });
          dispatch(setSuccess(true));
        } else {
          Swal.fire({
            title: "¡Error!",
            text: "Ah ocurrido un problema al registrarse",
            icon: "error",
          });
        }
      }
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

const fileUploadFetch = (endpoint, file) => {
  const url = `${baseUrl}/${endpoint}`;

  const formData = new FormData();
  formData.append("file", file);

  return fetch(url, {
    method: "POST",
    body: formData,
  });
};

export const getAllOrders = () => {
  return async (dispatch) => {
    try {
      let resp = await fetchConToken("pedido");
      const body = await resp.json();

      if (body.success === true) {
        dispatch(setIsLoading(false))
        dispatch(setListOrder(body.pedidos));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOneOrderById = (id) => {
  return async (dispatch) => {
    try {
      let resp = await fetchConToken(`pedido/${id}`);
      const body = await resp.json();

      if (body.success === true) {
        dispatch(setGetOneOrder(body.pedido));
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      // console.log(error)
    }
  };
};

export const searchOrder = (search) => {
  return async (dispatch) => {
    try {
      let resp = await fetchConToken(`pedido?search=${search}`);

      const body = await resp.json();

      dispatch(setIsLoading(false));

      if (resp.status === 200) {
        dispatch(setListOrder(body.pedidos));
        dispatch(setPagination(body.paginationData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const paginationOrders = (pageSize, pageNumber) => {
  return async (dispatch) => {
    try {
      let resp = await fetchConToken(
        `pedido?page=${pageNumber}&size=${pageSize}`
      );

      const body = await resp.json();

      
      if (resp.status === 200) {
        dispatch(setIsLoading(false));
        dispatch(setListOrder(body.pedidos));
        dispatch(setPagination(body.paginationData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const aproveOrder = (pedidoId, aprobado) => {
  return async (dispatch) => {
    try {
      let resp = await fetchConToken(
        `pedido/${pedidoId}`,
        {
          aprobado,
        },
        "PATCH"
      );

      const data = await resp.json();

      dispatch(setIsLoading(false))
      
      if (data.success === true) {
        Swal.fire({
          title: "¡Felicidades!",
          text: "Pedido aprobado exitosamente",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(getAllOrders());
          }
        });
      } else {
        Swal.fire({
          title: "¡Error!",
          text: "Ah ocurrido un problema al registrarse",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const resendOrderById = (id) => {
  return async(dispatch) =>{
    try {
      let resp = await fetchConToken(
        `pedido/${id}/notification`,
        {

        },
        "POST"
      )

      if(resp.status === 200){
        dispatch(setIsLoading(false));
        Swal.fire({
          title:'¡Éxito!',
          text: 'Correo reenviado exitosamente',
          icon: 'success'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAllAsistences = () => {
  return async (dispatch) => {
    try {
      let resp = await fetchConToken(`pedido?aprobado=1`);
      const body = await resp.json();
      
      dispatch(setIsLoading(false))

      if (body.success === true) {
        dispatch(setListAsistence(body.pedidos));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchAsistence = (search) => {
  return async (dispatch) => {
    try {
      let resp = await fetchConToken(
        `pedido?search=${search}&aprobado=1`
      );

      const body = await resp.json();

      dispatch(setIsLoading(false));
      
      if (resp.status === 200) {
        dispatch(setListAsistence(body.pedidos));
        dispatch(setPaginationAsistence(body.paginationData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const paginationAsistences = (pageSize, pageNumber) => { 
  return async (dispatch) => {
    try {
      let resp = await fetchConToken(
        `pedido?page=${pageNumber}&size=${pageSize}&aprobado=1`
      );

      const body = await resp.json();
      dispatch(setIsLoading(false));

      
      if (resp.status === 200) {
        dispatch(setListAsistence(body.pedidos));
        dispatch(setPaginationAsistence(body.paginationData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const entranceByQrCode = (id, name, redirectAsistences) => {
  return async(dispacth) =>{
    try {
      let resp = await fetchConToken(
        `pedido/${id}`,
        {
          ingreso: true
        },
        "PATCH"
      )

      if(resp.status === 200){
        Swal.fire({
          title:'¡Éxito!',
          text: `${name} ha ingresado al evento`,
          icon: 'success',
          confirmButtonText: 'Siguiente'
        }).then((result) => {
          if(result.isConfirmed){
            if (redirectAsistences) {
              dispacth(getAllAsistences());
            } else {
              window.location.replace('/scanner');
            }
          }
        })
      } else{
        if(resp.status === 409){
          Swal.fire({
            title:'¡Error!',
            text: 'Este participante ya ingresó al evento',
            icon: 'error'
          });
        }
        else {
          Swal.fire({
            title:'¡Error!',
            text: 'Id no detectado',
            icon: 'error'
          });
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}