import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/subjectnote">
          Student
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/studentanswersheetUpload">
                StudentAnswersUpload
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/feedback">
                FeedBack
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/examtimetable">
                ExamTimeTable
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/subjecttimetable">
                subjecttimetable
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Subject Notes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/commentforsubjectnote">
                CommentForSubject_Notes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/displayanswers">
                DisplayAnswersheets
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
