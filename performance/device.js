var testConfig = window.testConfig();

var testRunner = require('./testRunner');
var testSuiteGenerator = require('./testSuiteGenerator');

var models = testConfig.models;
var formats = testConfig.formats;
var tests = testConfig.get;
var suite = testConfig.suite;

suite.tests = testSuiteGenerator({

    iterations: 15,

    models: {
        'model' : models.model,
        'mdp' : models.mdp
    },

    tests: {
        'simple': tests.simple,
        'reference': tests.reference,
        'complex': tests.complex,
        'scrollGallery': tests.scrollGallery
    }
});

onTestsLoaded(suite);