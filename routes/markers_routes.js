const { Router } = require('express');
const { check } = require('express-validator');
const { markersGet, markersPut, markersPost, markersDelete } = require('../controllers/markers_controllers');
const { titleExists, urlExists, markerExistsById } = require('../helpers/db_validators');
const { validateFiels } = require('../middlewares/validate_fiels');


const router = Router();


router.get('/', markersGet );

router.post('/',[
    check('title','El titulo debe tener mas de 2 caracteres').isLength({min: 2}),
    check('title').custom( titleExists ),
    check('url','No es una url valida').isURL({ protocols: ['http','https'], require_valid_protocol: true }),
    check('url').custom( urlExists ),
    validateFiels
],markersPost);

router.put('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    validateFiels,
    check('id').custom( markerExistsById ),
    validateFiels
] , markersPut);


router.delete('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    validateFiels,
    check('id').custom( markerExistsById ),
    validateFiels
],markersDelete);


module.exports = router;