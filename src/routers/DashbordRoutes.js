import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { EditarUsuario } from "../components/mantenedorUsuario/EditarUsuario";
import { ListarUsuario } from "../components/mantenedorUsuario/ListarUsuario";
import { MantenedorUsuario } from "../components/mantenedorUsuario/MantenedorUsuario";
import { Configuracion } from "../components/perfil/Configuracion";

import { Perfil, PerfilScreen } from "../components/perfil/PerfilScreen";
import { ScreenTarea } from "../components/tareas/ScreenTarea";
import { Aside } from "../components/ui/Aside";
import { Navbar } from "../components/ui/Navbar";
import { EventosScreen } from "../components/eventos/EventosScreen";
import { CalendarScreen } from "../components/calendario/CalendarScreen";
import { ChatScreen } from "../components/chat/ChatScreen";
export const DashbordRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="main__content">
        <Aside />
        
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/perfil" component={PerfilScreen} />
            <Route exact path="/usuarios" component={ListarUsuario} />
            <Route exact path="/mantenedorusuario" component={MantenedorUsuario} />
            <Route exact path="/editarusuario" component={EditarUsuario} />
            <Route exact path="/configuracion" component={Configuracion} />
            <Route exact path="/tareas" component={ScreenTarea} />
            <Route exact path="/eventos" component={EventosScreen} />
            <Route exact path="/calendario" component={CalendarScreen} />
            <Route exact path="/chat" component={ChatScreen} />
            
            <Redirect to="/" />
          </Switch>
        
      </div>
    </div>
  );
};
