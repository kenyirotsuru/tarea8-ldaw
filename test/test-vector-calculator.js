const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator');

describe('VectorCalc', () => {
    describe('#sum', () => {
        let v1 = { x: 4, y: 3 }
        let v2 = { x: 1, y: 3 }
        it('should sum the vectors', () => {
            assert.deepEqual({ x: 5, y: 6}, VectorCalculator.sum(v1,v2))
        })  
    })

    describe('#sub', () => {
        let v1 = { x: 4, y: 3 }
        let v2 = { x: 1, y: 3 }
        it('should substract the vectors', () => {
            assert.deepEqual({ x: 3, y: 0}, VectorCalculator.sub(v1,v2))
        })
    })

    describe('#scalar', () => {
        let v1 = { x: 4, y: 3 }
        it('should get the scalar of the vector', () => {
            assert.deepEqual({ x: 8, y: 6}, VectorCalculator.scalar(v1,2))
        })
    })

    describe('#dot', () => {
        let v1 = { x: 4, y: 3 }
        let v2 = { x: 1, y: 3 }
        it('should substract the vectors', () => {
            assert.equal(13, VectorCalculator.dot(v1,v2))
        })
    })
    
})
