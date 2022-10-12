import React from "react";
import { Navbar } from "../Navbar";

export const SubjectTimetableDisplay = () => {
  return (
    <div>
      <Navbar/>
      <div
        style={{
          width: "50%",
          marginLeft: "25%",
          marginRight: "25%",
          marginTop: "10%",
        }}
      >
        <h1 className="text-center">Subject Time Table</h1>
        <table class="table table-bordered shadow rounded-4 text-center mt-5 mb-5 bg-light">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wendsday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09-09-22</td>
              <td>09.00 am</td>
              <td>11.00 am</td>
              <td>Chemistry</td>
              <td>Biological Science</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10-09-22</td>
              <td>10.00 am</td>
              <td>12.00 am</td>
              <td>Biology</td>
              <td>Biological Science</td>
              <td>12</td>
            </tr>
            <tr>
              <td>12-09-22</td>
              <td>09.00 am</td>
              <td>11.00 am</td>
              <td>Physics</td>
              <td>Biological Science</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
