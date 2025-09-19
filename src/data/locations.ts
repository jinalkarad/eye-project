export const locationsName = {
    FAJARDO: 'Fajardo',
    HUMACAO: 'Humacao',
    RIO_GRANDE: 'Rio Grande',
    ISABELA: 'Isabela',
    PLAZA_LAS_AMERICAS: 'Plaza Las Americas',
    CAGUAS: 'Caguas' // Placeholder (no data shared yet)
};

const locations = [
    {
        id: 1,
        name: locationsName.FAJARDO,
        locationUrl: 'https://g.co/kgs/DkuzN12',
        address: '150 Carr 940, Fajardo, 00738, Puerto Rico'
    },
    {
        id: 2,
        name: locationsName.HUMACAO,
        locationUrl: 'https://g.co/kgs/tRXctAL',
        address: '350 Carretera 3, Humacao, 00791, Puerto Rico'
    },
    {
        id: 3,
        name: locationsName.RIO_GRANDE,
        locationUrl: 'https://g.co/kgs/dwugqYZ',
        address: 'Río Grande, 00745, Puerto Rico'
    },
    {
        id: 4,
        name: locationsName.ISABELA,
        locationUrl: 'https://g.co/kgs/C3VCvpk', // You can add if you find Google link for Isabela
        // address: '3535 Ave. Militar, Isabela, PR 00662'
        address:'200 Av. Rafael Cordero, Caguas, 00725, Puerto Rico'
    },
    {
        id: 5,
        name: locationsName.PLAZA_LAS_AMERICAS,
        locationUrl: '', // You can add if you find Google link for Plaza Las Americas
        address: '525 Avenida F.D. Roosevelt, San Juan, PR 00918'
    },
    {
        id: 6,
        name: locationsName.CAGUAS,
        locationUrl: 'https://g.co/kgs/C3VCvpk', // Will add when you give the link
        address: '200 Av. Rafael Cordero, Caguas, 00725, Puerto Rico'
    }
];

export default locations;