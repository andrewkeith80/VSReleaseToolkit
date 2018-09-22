const lockVersion = require('./lockVersion');
const assert = require('assert');

it("lock version, results version locked",() =>{
    const sample = "<some>xml</some>";
    const results = lockVersion.lockVSProjVersion(sample);
    assert(results == sample); 
});