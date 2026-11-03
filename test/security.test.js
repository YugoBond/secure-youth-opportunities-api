const test = require('node:test');
const assert = require('node:assert/strict');
const { getPublicOpportunities } = require('../opportunities');

test('public response keeps the approved opportunity fields', () => {
  const [firstOpportunity] = getPublicOpportunities();
  assert.deepStrictEqual(firstOpportunity, {
    id: 'opp-001',
    title: 'Digital Skills Exchange',
    organization: 'Youth Centre Tivat',
    location: 'Tivat, Montenegro',
    deadline: '2026-12-15',
    summary: 'A fictional peer-led workshop for young people exploring web development.',
  });
});

test('public response excludes internal fields', () => {
    for(const opportunity of getPublicOpportunities()) {
        assert.equal('internalContact' in opportunity, false);
        assert.equal('reviewNotes' in opportunity, false);
    }
});