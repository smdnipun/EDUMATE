import React from "react";
import { Navbar } from "../Navbar";

export const CommentForSubject_Notes = () => {
  return (
    <div>
      <Navbar />
      <div
        className=""
        style={{ marginLeft: "30%", marginRight: "30%", marginTop: "10%" }}
      >
        <div className="border shadow rounded-3 bg-light">
          <form className="mx-5 mt-5 mb-5" onSubmit>
            <h2 className="text-center mb-4">Subject Comment</h2>
            <div class="form-group">
              <label for="exampleInputPassword1">Subject Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Unite Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Comment</label>
              <textarea rows={5} type="text" class="form-control" />
            </div>
            <div align="center">
              <button type="submit" class="btn btn-primary mt-5 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
