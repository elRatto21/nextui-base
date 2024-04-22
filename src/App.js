import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  return (
    <NextUIProvider navigate={nav}>
      <main className="dark text-foreground bg-gray-950 h-screen w-screen">
        <Routes>
          <Route path="/" element={<div>Hi!</div>} />
        </Routes>
      </main>
    </NextUIProvider>
  );
}

export default App;
