import React from "react";



export const CumpleañosCercanos = () => {
  return (
    <div className="cumpleaños">
        <div className="cupleaños__titulo">
          <i class="fas fa-birthday-cake"></i>
          <span> cumpleaños del dia</span>
        </div>
      <div className="card__cumpleaños">
        
        <div className="usuario__cumpleaño-deldia">
          <div className="imagen">
            <i class="fas fa-user fa-3x"></i>
          </div>
          <div>Victor Almonacid</div>
          <div className="fecha__cumpleaño">14/04</div>
          <button className="btn__publicar">Felicitar</button>
        </div>
        <div className="usuario__cumpleaño-deldia">
          <div className="imagen">
            <i class="fas fa-user fa-3x"></i>
          </div>
          <div>Yonathan Soto</div>
          <div className="fecha__cumpleaño">14/04</div>
          <button className="btn__publicar">Felicitar</button>
        </div>
        
      </div>
    </div>
  );
};
