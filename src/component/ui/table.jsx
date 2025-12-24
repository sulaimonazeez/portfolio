import React from "react";

const Table = () => {
  return (
    <section className="mt-4 container-fluid contact-info">
        <table>
          <tbody>
            <tr>
              <td><h6 className="text-light">Name: </h6></td>
              <td className="cont text-light">Sulaimon Azeez</td>
            </tr>
            <tr>
              <td><h6 className="text-light">Birthday: </h6></td>
              <td className="cont text-light">6th July, 2001</td>
            </tr>
            <tr>
              <td><h6 className="text-light">Age: </h6></td>
              <td className="cont text-light">22</td>
            </tr>
            <tr>
              <td><h6 className="text-light">Address: </h6></td>
              <td className="cont text-light">Lagos, Nigeria</td>
            </tr>
            <tr>
              <td><h6 className="text-light">Phone: </h6></td>
              <td className="cont text-light">+2348080891605</td>
            </tr>
          </tbody>
        </table>
      </section>
  );
}

export default Table;