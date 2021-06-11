import React from 'react'

export const EditarUsuario = () => {
    return (
        <div className="container-fluid general-mu">

            <div className="row cabezera-mu">

                <div className="col-1 espacioizq-cabezera-mu">

                </div>
                <div className="col titulo-cabezera-mu titulo-label-mu">
                    Modificar Usuario
                    </div>

                <div className="col espacioder-cabezera-mu">

                </div>

            </div>


            <div className="row formulario-mu ">

                <div className="col-1 izquierda-formulario-mu">

                </div>

                <div className="col contenedor-formulario-mu card border border-secondary">

                    <div className="row datos-contenedor-mu label-mu">

                        <div className="col-1 espacio-datos-mu">

                        </div>

                        <div className="col datos-dato-mus">
                            <div className="row primera-datos-mu paddtop-mu">
                                <div className="col rut-primera-mu">
                                    <div className="row rut-mu">
                                        <div className="col-4 label-rut-mu">Rut</div>
                                        <div className="col input-rut-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>
                                <div className="col-1 espaciador-primera-mu">
                                    
                                </div>
                                <div className="col nombre-primera-mu">
                                    <div className="row nombre-mu">
                                        <div className="col-4 label-nombre-mu">Nombre</div>
                                        <div className="col input-nombre-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>

                            </div>
                            <div className="row segunda-datos-mu paddtop-mu">
                                <div className="col segundonombre-primera-mu">
                                    <div className="row segundonombre-mu">
                                        <div className="col-4 label-segundonombre-mu">Segundo Nombre</div>
                                        <div className="col input-segundonombre-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>
                                <div className="col-1 espaciador-primera-mu">
                                    
                                </div>
                                <div className="col apellidopaterno-segunda-mu">
                                    <div className="row apellidopaterno-mu">
                                        <div className="col-4 label-apellidopaterno-mu">Apellido Paterno</div>
                                        <div className="col input-apellidopaterno-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>


                            </div>
                            <div className="row tercera-datos-mu paddtop-mu">
                                <div className="col apellidomaterno-segunda-mu">
                                    <div className="row apellidomaterno-mu">
                                        <div className="col-4 label-apellidomaterno-mu">Apellido Materno</div>
                                        <div className="col input-apellidomaterno-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>
                                <div className="col-1 espaciador-primera-mu">
                                    
                                </div>
                                <div className="col area-segunda-mu">
                                    <div className="row area-mu">
                                        <div className="col-4 label-area-mu">Área</div>
                                        <div className="col input-area-mu">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option selected>Selecciona un área...</option>
                                                <option>Recursos humanos</option>
                                                <option>Finanzas</option>
                                                <option>Marketing</option>
                                            </select></div>
                                    </div>
                                </div>



                            </div>

                            <div className="row cuarta-datos-mu paddtop-mu">
                                <div className="col cargo-tercera-mu">
                                    <div className="row cargo-mu">
                                        <div className="col-4 label-cargo-mu">Cargo</div>
                                        <div className="col input-cargo-mu">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option selected>Selecciona un cargo...</option>
                                                <option>Administrativo Credito</option>
                                                <option>Gerente Administrativo</option>
                                                <option>Jefe de control de calidad</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 espaciador-primera-mu">
                                    
                                </div>
                                <div className="col mailcorp-tercera-mu">
                                    <div className="row mailcorp-mu">
                                        <div className="col-4 label-mailcorp-mu">Mail corporativo</div>
                                        <div className="col input-mailcorp-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>


                            </div>
                            <div className="row quinta-datos-mu paddtop-mu">
                                <div className="col foto-cuarta-mu">
                                    <div className="row foto-mu">
                                        <div className="col-4 label-foto-mu">Foto Usuario</div>
                                        <div className="col input-foto-mu"><input type="file" class="form-control" id="customFile" /></div>
                                    </div>
                                </div>
                                <div className="col-1 espaciador-primera-mu">
                                    
                                </div>
                                <div className="col fono-tercera-mu">
                                    <div className="row fono-mu">
                                        <div className="col-4 label-fono-mu">Fono</div>
                                        <div className="col input-fono-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>

                            </div>
                            <div className="row sexta-datos-mu paddtop-mu">
                                <div className="col fechanac-cuarta-mu">
                                    <div className="row fechanac-mu">
                                        <div className="col-4 label-fechanac-mu">Fecha Nacimiento</div>
                                        <div className="col input-fechanac-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>
                                <div className="col-1 espaciador-primera-mu">
                                    
                                </div>
                                <div className="col fechaingreso-cuarta-mu ">
                                    <div className="row fechaingreso-mu">
                                        <div className="col-4 label-fechaingreso-mu">Fecha ingreso</div>
                                        <div className="col input-fechaingreso-mu"><input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                    </div>
                                </div>

                            </div>
                            <div className="row sexta-datos-mu paddtop-mu">
                                <div className="col Roles-cuarta-mu">
                                    <div className="row Roles-mu">
                                        <div className="col-4 label-Roles-mu">Roles</div>
                                        <div className="col input-Roles-mu"><select class="form-control" id="exampleFormControlSelect1">
                                            <option selected>Selecciona un rol...</option>
                                            <option>Colaborador</option>
                                            <option>Jefatura</option>
                                            <option>Administrador</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div className="col-1 espaciador-primera-mu">
                                    
                                </div>
                                <div className="col permisos-cuarta-mu ">
                                    <div className="row permisos-mu">
                                        <div className="col-4 label-permisos-mu">Permisos</div>
                                        <div className="col input-permisos-mu">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">Publicaciones</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                <label class="form-check-label" for="inlineCheckbox2">Eventos</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-1 espacio-datos-mu">

                        </div>
                    </div>


                    <div className="row btn-formulario-mu">

                        <div className="col-9 espacio-btn-mu">

                        </div>

                        <div className="col-1 btn-btn-mu">
                            <button type="button" class="btn btn-primary btn-mu">Modificar</button>
                        </div>
                        <div className="col btn-btn-mu">
                            <button type="button" class="btn btn-primary btn-mu">Cancelar</button>
                        </div>

                    </div>

                </div>


                <div className="col-1 derecha-formulario-mu">

                </div>
            </div>


        </div>
    )
}