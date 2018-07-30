var invariant = require('invariant');

var someTruthyVal=true;
var someFalseyVal=false;

invariant(someTruthyVal, 'This will not throw');
// No errors

invariant(someFalseyVal, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
