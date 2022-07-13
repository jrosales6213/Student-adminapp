import React from 'react'

const Dashboard = React.lazy(() => import('../src/components/Dashboard'))
const Student = React.lazy(() => import('./components/students/StudentForm'))
const Partner = React.lazy(() => import('../src/components/partners/PartnerForm'))
const Employees = React.lazy(() => import('../src/components/employees/EmployeeForm'))
const Budgets = React.lazy(() => import('./components/payroll/BudgetForm'))
const Events = React.lazy(() => import('../src/components/events/EventsForm'))
const Tasks = React.lazy(() => import('../src/components/tasks/TaskForm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/students', name: 'Students', element: Student },
  { path: '/partners', name: 'Partners', element: Partner },
  { path: '/employees', name: 'Employees', element: Employees },
  { path: '/budgets', name: 'Budgets', element: Budgets },
  { path: '/events', name: 'Events', element: Events },
  { path: '/tasks', name: 'Tasks', element: Tasks },
]

export default routes
