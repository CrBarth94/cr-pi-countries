const { Router } = require('express');
const getCountries = require('../controllers/getCountries');
const getCountryById = require('../controllers/getCountryById');
const getCountryByName = require('../controllers/getCountryByName');
const postActivity = require('../controllers/postActivitie');
const getActivities = require('../controllers/getActivities');
const { deletActivitie } = require('../../../client/src/redux/actions');
const router = Router();

router.get('/countries/name', getCountryByName);

router.get('/countries', getCountries);

router.get('/countries/:id', getCountryById);

router.post('/activities', postActivity);

router.get('/activities', getActivities);

router.delete('/activities/name', deletActivitie);

module.exports = router;
