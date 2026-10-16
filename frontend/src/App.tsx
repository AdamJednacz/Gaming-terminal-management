import { ConfigProvider, App as AntdApp } from "antd";
import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ConfigProvider
      theme={themeConfig}
      drawer={{ mask: { blur: false } }}
      modal={{ mask: { blur: false } }}
    >
      <AntdApp>
        <div className="app-container">
          <RouterProvider router={router} />
        </div>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
