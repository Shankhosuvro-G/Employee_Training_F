import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";

import AdminCourses from "./pages/Admin/Courses";
import AdminEmployees from "./pages/Admin/Employees";
import AdminQuizzes from "./pages/Admin/Quizzes";
import AdminQuizResponses from "./pages/Admin/ViewQuiz";

import ManagerCourses from "./pages/Manager/Courses";
import ManagerEmployees from "./pages/Manager/Employees";
import ManagerQuizzes from "./pages/Manager/Quizzes";
import ManagerQuizResponses from "./pages/Manager/ViewQuiz";

import EmployeeCourses from "./pages/Employee/Courses";
import EmployeeRegister from "./pages/Employee/Register";
import EmployeeProgress from "./pages/Employee/Progress";
import EmployeeQuiz from "./pages/Employee/Quizzes";

import { AuthProvider } from "./context/AuthContext";
import CalendarComponent from "./components/CalendarComponent";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="admin/courses"
          element={
            <PrivateRoute role="Admin">
              <AdminCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="admin/employees"
          element={
            <PrivateRoute role="Admin">
              <AdminEmployees />
            </PrivateRoute>
          }
        />
        <Route
          path="admin/quizzes"
          element={
            <PrivateRoute role="Admin">
              <AdminQuizzes />
            </PrivateRoute>
          }
        />
        <Route
          path="admin/responses"
          element={
            <PrivateRoute role="Admin">
              <AdminQuizResponses />
            </PrivateRoute>
          }
        />

        <Route
          path="manager/courses"
          element={
            <PrivateRoute role="Manager">
              <ManagerCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="manager/employees"
          element={
            <PrivateRoute role="Manager">
              <ManagerEmployees />
            </PrivateRoute>
          }
        />
        <Route
          path="manager/quizzes"
          element={
            <PrivateRoute role="Manager">
              <ManagerQuizzes />
            </PrivateRoute>
          }
        />
        <Route
          path="manager/responses"
          element={
            <PrivateRoute role="Manager">
              <ManagerQuizResponses />
            </PrivateRoute>
          }
        />

        <Route
          path="employee/courses"
          element={
            <PrivateRoute role="Employee">
              <EmployeeCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="employee/register"
          element={
            <PrivateRoute role="Employee">
              <EmployeeRegister />
            </PrivateRoute>
          }
        />
        <Route
          path="employee/progress"
          element={
            <PrivateRoute role="Employee">
              <EmployeeProgress />
            </PrivateRoute>
          }
        />
        <Route
          path="employee/quizzes"
          element={
            <PrivateRoute role="Employee">
              <EmployeeQuiz />
            </PrivateRoute>
          }
        />
        <Route path="/calendar" element={<CalendarComponent />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
