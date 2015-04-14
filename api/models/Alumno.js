/**
* Alumno.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    matricula:{
      type:'string',
      required:true,
      unique:true
    },
  	nombre:{
  		type:'string',
  		required:true
  	},
  	apellido:{
  		type:'string',
  		required:true
  	},
  	tutor:{
  		type:'string',
  		required:true
  	},
  	foto:{
  		type:'string',
  		required:false
  	},
  	fechaNacim:{
  		type:'date',
  		required:true
  	},
  	foto:{
  		type:'string',
  		required:true
  	},
  	condicionMedica:{
  		type:'string',
  		required:true
  	},
  	grado:{
  		type:'string',
  		required:true
  	}
  }
};