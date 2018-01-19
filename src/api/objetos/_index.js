// Joi Validate
import readValidate from './_validates/read.validate';

// Middleware
import readObject from './read';

export default (route) => {

    route.get('/track/:_trackId/:_outputType', readValidate, readObject);
    
};