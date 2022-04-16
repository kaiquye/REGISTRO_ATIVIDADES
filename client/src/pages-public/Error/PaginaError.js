import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Error } from "../../Error/Error";
import './style.css'
import img from './error.png'
import { DrawerAdmin } from "../../componets/drawer-admin";
export function PaginaError() {

  const { status } = useParams();
  const [message, setMessage] = useState()

  useEffect(() => {
    if (status >= 400 && status <= 403) {
      return setMessage(Error.ErrorAuth().message);
    }
    if (status >= 404) {
      return setMessage(Error.ErrorServer().message)
    }
  }, [])

  return (
    <>
      <DrawerAdmin />
      <section className="page-error">
        <img src={img} style={{ width: "19%" }} />
        <div style={{ width: "25%" }} >
          <label>{message}</label>
          <button>Voltar</button>
        </div>
      </section>
    </>
  )
}
