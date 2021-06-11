import React from 'react'

export const ResumenUsuario = () => {
    return (
        <div>                                  
            <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog " role="document">
                <div class="modal-content fondo-modal-ru border border-secondary">
                <div class="modal-header ">
                    <h5 className="modal-title label-titulo-ru" id="exampleModalLabel">Yonathan Soto</h5>
                </div>
                <div class="modal-body label-descripcion-ru">
                    <div class="row espacio-row-ru">
                        <div class="col">Rut:</div>
                        <div class="col">20097637-1</div>
                    </div>
                    <div class="row espacio-row-ru">
                        <div class="col">Área:</div>
                        <div class="col"></div>
                    </div>
                    <div class="row espacio-row-ru">
                        <div class="col">Cargo:</div>
                        <div class="col"></div>
                    </div>
                    <div class="row espacio-row-ru">
                        <div class="col">Mail corporativo:</div>
                        <div class="col">yonathan.soto@reilak.com</div>
                    </div>
                    <div class="row espacio-row-ru">
                        <div class="col">Fono:</div>
                        <div class="col">+56 9 5847 5737</div>
                    </div>
                    <div class="row espacio-row-ru">
                        <div class="col">Fecha Nacimiento:</div>
                        <div class="col">08-11-1998</div>
                    </div>
                    <div class="row espacio-row-ru">
                        <div class="col">Fecha ingreso:</div>
                        <div class="col">14-04-2021</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary clo-bt-ru" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
