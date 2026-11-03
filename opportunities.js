const opportunities = [
    {
        id: 'opp-001', 
        title: 'Digital Skills Exchange',
        organization: 'Youth Centre Tivat',
        location: 'Tivat, Montenegro',
        deadline: '2026-12-15',
        summary: 'A fictional peer-led workshop for young people exploring web development.',
        internalContact: 'Internal coordinator channel 17',
        reviewNotes: 'Demo-only note. Do not expose this field',
    },
    {
        id: 'opp-002',
        title: 'Regional Leadership Sprint',
        organization: 'Youth European Ambassadors',
        location: 'Podgorica, Montenegro',
        deadline: '2026-01-20',
        summary: 'A fictional leadership sprint for young people to develop their leadership skills.',
        internalContact: 'Internal coordinator channel 23',
        reviewNotes: 'Demo-only note. Do not expose this field',
    }
];

function toPublicOpportunity(opportunity) {
    return {
        id: opportunity.id,
        title: opportunity.title,
        organization: opportunity.organization,
        location: opportunity.location,
        deadline: opportunity.deadline,
        summary: opportunity.summary
    };
}
function getPublicOpportunities() {
    return opportunities.map(toPublicOpportunity);
}
module.exports ={ opportunities, toPublicOpportunity, getPublicOpportunities };