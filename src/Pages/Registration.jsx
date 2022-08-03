import React from "react";

function Registration() {
  return (
    <div className="registration">
      <h3>Qeydiyyat</h3>
      <hr />
      <div className="fromDiv">
        <table>
          <tr>
            <td id="firstt">
              <label htmlFor="">Ad:</label>
            </td>
            <td>
              <input type="text" placeholder="Adınızı daxil edin" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Soyad:</label>
            </td>
            <td>
              <input type="text" placeholder="Soyadınızı daxil edin" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Təvəllüd:</label>
            </td>
            <td>
              <input type="date" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">E-mail:</label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Elektron poçt ünvanınızı daxil edin"
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Şifrə:</label>
            </td>
            <td>
              <input type="password" placeholder="Şifrəni daxil edin" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Təkrar şifrə:</label>
            </td>
            <td>
              <input type="password" placeholder="Şifrəni təkrar daxil edin" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Ölkə:</label>
            </td>
            <td>
              <input type="text" placeholder="Şəhəri daxil edin" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Şəhər:</label>
            </td>
            <td>
              <input type="text" placeholder="Ölkəni daxil edin" />
            </td>
            <td></td>
          </tr>
        </table>

        <div className="regBTN">
          <button>Göndər</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
