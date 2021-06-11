import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';
import { notificacionStartLoading, notificacionStartUpdate } from '../../actions/events';
import moment from "moment";
export const Navbar = () => {

    const {name,uid} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }
let aquamarina=[];
let visto=[];
    const {notificacion} = useSelector(state => state.Notification)
    console.log(notificacion)
    const notificationIds = notificacion.map(notificacion => notificacion.vistopor);
    const green = notificacion[0]
    if(green){
        aquamarina = green.id
        visto = green.vistopor
    }
    
    console.log(green)
    console.log(aquamarina)
 

    console.log(notificationIds)

const handleVerNotificacion = (uid,aquamarina)=>{
    console.log(uid);
    console.log(aquamarina)
const prueba={uid,aquamarina}

    dispatch(notificacionStartUpdate(aquamarina));
}
    useEffect(() => {
        dispatch(notificacionStartLoading());
    }, [])
    console.log(notificacion)
    return (
        
        
        <div className="container-fluid">
            
            <div className="row">
                    <nav className="navbar navbar-expand-sm ">
                        <div className="col-2 text-center">
                            <Link 
                                className="navbar-brand"
                                to="/"
                            >
                                <p className="h2 navbar-logo font-weight-bold">Reilak</p>
                            </Link>
                        </div>
                        <div className="col-9 ">
                            <div className="row ">
                                <div className="col ">                                   
                                </div>
                                    <div className="navbar-nav col-1 ">
                                        <NavLink 
                                            activeClassName="active"
                                            className="nav-item nav-link " 
                                            exact
                                            to="/"
                                        >
                                            <i className="fas fa-user-circle navbar-iconos"></i>
                                        </NavLink>

                                        <NavLink 
                                            activeClassName="active"
                                            className="nav-item nav-link nombre " 
                                            exact
                                            to="/perfil"
                                        >
                                         {name}
                                        </NavLink>
                                        
                                    </div>                                
                            </div>    
                        </div>
                        <div className="col-1">
                            <div className="navbar-collapse">
                                <div className="navbar-nav">
                                
                                    <li class="nav-item dropdown"
                                 
                                        activeClassName="active"
                                        className="nav-item nav-link dropdown-toggle "
                                        id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>{handleVerNotificacion(uid,aquamarina)}}>
{
// notificacion.map(({vistopor},i)=>(
//     (vistopor.includes(uid)) ?
//     <i className="fas fa-bell navbar-iconos"></i> :
//     <i className="fas fa-bell navbar-iconos" style={{color: "red"}}></i> 
// ))
// (vistopor.includes(uid))?
// <div>Esta</div>:
// <div>No esta</div>
(visto!="")?(
(visto.includes(uid))?
<i className="fas fa-bell navbar-iconos" style={{color: "#0fffff"}}></i> :
<i className="fas fa-bell navbar-iconos" style={{color: "red"}}></i> 
):(
    <i className="fas fa-bell navbar-iconos" style={{color: "#0fffff"}}></i>
)
}

{/* <i className="fas fa-bell navbar-iconos" style={{color: "red"}}></i>                               */}
                                   
                                    
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                            <h6 class="dropdown-header nombre">Notificaciones</h6>

                                            <div className="dropdown-divider">
                                                
                                            </div>
                                          {
                                              notificacion.map(({descripcion, fecha},i)=>(
                                                <a className="dropdown-item rounded border border-secondary" href="/"> {descripcion} el {moment(fecha).format("DD-MM-YYYY, h:mm a")}</a>
                                              ))
                                          }
                                                

                                        </div>
                                    </li>
                                    

                                    {/* <li class="nav-item dropdown">
                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link dropdown-toggle" 
                                        id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                                        exact
                                        to="/"
                                    >
                                        <i class="fab fa-facebook-messenger navbar-iconos"></i>
                                    </NavLink>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                            <h6 class="dropdown-header nombre ">Mensajes</h6>
                                            <div className="dropdown-divider"></div>
                                                                                    
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco te ha enviado un mensaje</a>
                                                                                        
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco te ha enviado un mensaje</a>
                                                                                                                                                                             
                                            <a className="dropdown-item rounded border border-secondary" href="#"><img src="https://i1.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1" className="rounded-circle nabvar-img" alt="Cinque Terre"></img>   Francisco te ha enviado un mensaje</a>
                                            
                                            
                                        </div>
                                    </li> */}

                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link" 
                                        exact
                                        to="/configuracion"
                                    >
                                        <i class="fas fa-cog navbar-iconos"></i>
                                    </NavLink>

                                    <NavLink 
                                        activeClassName="active"
                                        className="nav-item nav-link" 
                                        
                                        to="/login"
                                    >
                                        <i class="fas fa-sign-out-alt navbar-iconos" onClick={handleLogout}></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
        </div>
                
            
        
        

            
        
      
    )
}