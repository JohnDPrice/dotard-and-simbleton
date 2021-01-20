export const Business = (businessObject) => {
    return `<section class="business-card">
    <h2 class="business-name">${businessObject.companyName}</h2>
    <p class="business-address">${businessObject.addressFullStreet}      
    ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
    </section>`
}