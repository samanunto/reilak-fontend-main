import React, { useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSockets';
import { useDispatch, useSelector } from 'react-redux';
import { notificacionLoaded } from '../actions/events';
 
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    'http://localhost:4000'
  );
  const { uid } = useSelector((state) => state.auth);
 
  useEffect(() => {
    if (uid) {
      conectarSocket();
    }
  }, [uid, conectarSocket]);
 
  useEffect(() => {
    if (!uid) {
      desconectarSocket();
    }
  }, [uid, desconectarSocket]);

  // useEffect(() => {
  //   socket?.on('notificacion', (notificacion)=>{
  //     console.log('object')
  //     dispatch(notificacionLoaded(notificacion))
  //   })

  // }, [socket])
 
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
};