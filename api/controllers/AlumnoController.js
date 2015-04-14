/**
 * AlumnoController
 *
 * @description :: Server-side logic for managing alumnoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getAlumnos: function (req, res) {
    	Alumno.find().done(function(err,alumnos){
		  res.view({
		    alumnos:alumnos
		  });
		});
  }
};

