import { useCount } from "../hooks/useCount";

  function Error404() {

    const timer = useCount(3, "/mas-info")

    console.log(timer);

  return (
    <div className="vh-100 pt-5" style={{
      backgroundColor: "#000cac"
    }}>

      <div className="pt-5 ">
        <div className="py-4">

          <div className="text-center p-5 mx-5">

            <h1 style={{ backgroundColor: "#acacac", color: "#000cac", fontFamily: 'Handjet' }}

              className="d-inline-block border p-2"> 404 - NOT FOUND :c</h1>

          </div>

        </div>

        <div className="py-3">

          <div style={{ display: "flex2", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

            <h3 style={{ color: "#acacac", fontFamily: 'Handjet' }}>
              Un error a ocurrido, no se encontro la dirección solicitada...</h3>

            <ul style={{ color: "#acacac", fontFamily: 'Handjet', listStyleType: "none", paddingleft: "0" }}>
              <li><h3>*Redireccionando a la página inicial en <span name="countdown">{timer}</span> segundos...</h3></li>

              <li><h3>*Disculpe el inconveniente c:</h3></li>
            </ul>

          </div>
        </div>

      </div>

    </div >)
}

export default Error404