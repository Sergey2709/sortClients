import React from 'react';
import { Table } from 'reactstrap';

function TableClients(props) {
  const arr = props.data;


  // eto razobrat
  const arrlenght = arr.lenght;
  console.log(arrlenght);
  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th>
              {
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6.875C0 7.22 0.279999 7.5 0.625 7.5H6.04172C6.29501 7.5 6.52252 7.34756 6.61911 7.11411C6.71585 6.8808 6.66245 6.61163 6.48331 6.43326L4.14078 4.09088C5.67581 2.565 7.75589 1.66672 10 1.66672C14.595 1.66672 18.3333 5.40497 18.3333 10C18.3333 10.4601 18.7059 10.8333 19.1667 10.8333C19.6275 10.8333 20 10.4601 20 10C20 4.48578 15.5142 0 10 0C7.30423 0 4.7966 1.06995 2.9541 2.90421L1.06674 1.01669C0.887451 0.837555 0.619202 0.784149 0.385895 0.88089C0.152435 0.977478 0 1.2059 0 1.45828V6.875Z"
                    fill="#2C7DFA"
                  />
                  <path
                    d="M20 13.1243C20 12.7793 19.72 12.4993 19.375 12.4993H13.9583C13.705 12.4993 13.4775 12.6517 13.3809 12.8852C13.2851 13.1185 13.3376 13.3877 13.5167 13.566L15.8592 15.9084C14.3242 17.4343 12.2441 18.3326 10 18.3326C5.40497 18.3326 1.66672 14.5943 1.66672 9.9993C1.66672 9.53925 1.2941 9.16602 0.833282 9.16602C0.372467 9.16602 0 9.53925 0 9.9993C0 15.5135 4.48578 19.9993 10 19.9993C12.6958 19.9993 15.2034 18.9294 17.0459 17.0951L18.9333 18.9826C19.0533 19.1027 19.2125 19.166 19.375 19.166C19.4559 19.166 19.5366 19.1501 19.6141 19.1184C19.8476 19.0218 20 18.7934 20 18.541V13.1243Z"
                    fill="#2C7DFA"
                  />
                </svg>
              }
            </th>
            <th>Знайдено {arrlenght} клієнтів</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((el, index) => {
            return (
              <tr key={index + el.telephonNumber}>
                <th>
                  <img src={el.icon} alt="icon" />
                </th>
                <th>
                  {`${el.firstName} ${el.lastName}`}
                  <br />
                  {`${el.telephonNumber}`}
                </th>
                <th>{el.text}</th>
                <th>{el.time}</th>
                <th>{el.date}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableClients;
