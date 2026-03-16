// Utility to group certificates by category and sort categories
function groupAndSortCertificates(certificatesData, categoryOrder) {
    const groupedCertificates = certificatesData.reduce((acc, cert) => {
        acc[cert.category] = acc[cert.category] || [];
        acc[cert.category].push(cert);
        return acc;
    }, {});

    const allCategories = Object.keys(groupedCertificates);
    const sortedCategories = [
        ...categoryOrder.filter(cat => allCategories.includes(cat)),
        ...allCategories.filter(cat => !categoryOrder.includes(cat))
    ];
    return { groupedCertificates, sortedCategories };
}

export { groupAndSortCertificates };
