import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ClientLayout } from "layouts";
import routes from "routes";
import Home from "views/home";

function App() {
  const location = useLocation();
  let layout;

  useEffect(() => {
    routes.forEach((route) =>
      location.pathname.includes(route.path)
        ? (document.title = `TouchPoint: ${route.name}`)
        : null
    );
  }, [location]);

  const getRoutes = (routes, layout) => {
    console.log(layout);
    return routes.map((route, i) => {
      if (route.layout === layout) {
        return <Route path={route.path} element={route.component} key={i} />;
      }

      return null;
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes[0].path} />} />
      <Route
        path="/"
        element={
          <ClientLayout>
            <Outlet />
          </ClientLayout>
        }
      >
        {getRoutes(routes, (layout = "client"))}
      </Route>
    </Routes>
  );
}

export default App;
