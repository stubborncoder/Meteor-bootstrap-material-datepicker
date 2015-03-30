# Meteor package for T00rk/bootstrap-material-datepicker

Datetime picker for bootstrap-material-design.

# Acknowledgments 

- TOOrk/bootstrap-material-datepicker(https://github.com/T00rk/bootstrap-material-datepicker)
- fezvrasta/bootstrap-material-design(http://fezvrasta.github.io/bootstrap-material-design/)


### Prerequisites

- underscore
- momentjs:moment
- jquery
- fezvrasta:bootstrap-material-design

# Documentation

- Datepicker API(https://github.com/T00rk/bootstrap-material-datepicker/blob/gh-pages/README.md)

# Basic Usage

	Template.hello.events({
	    'focus #datepicker': function(e, template){
	      var f = Template.instance().$('#datepicker');
	      f.bootstrapMaterialDatePicker({format:'DD/MM/YYYY HH:mm'});
	    }
  	});
