import {manufacturingBusinesses, useBusinesses} from "./BusinessProvider.js"
import {Business} from "./Business.js"
import {newYorkBusinesses} from "./BusinessProvider.js"

const businessContainer = document.querySelector(".business-container")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    businessContainer.innerHTML = "<h1 class='business-heading'>Active Businesses</h1>"

    businessArray.forEach(
        (bussinessObject) => {
            businessContainer.innerHTML += Business(bussinessObject)
        }
    );
}


const newYorkContainer = document.querySelector(".businessList--newYork")

export const newYorkBusinessList = () => {
    const newYorkArray = newYorkBusinesses
    newYorkContainer.innerHTML = "<h1 class='new-york-heading'>New York Businesses</h1>"

    newYorkArray.forEach(
        (businessObject) => {
            newYorkContainer.innerHTML += Business(businessObject)
        }
    )
}


const manufacturingContainer = document.querySelector(".businessList--manufacturing")

export const manufacturingList = () => {
    const manufacturingArray = manufacturingBusinesses
    manufacturingContainer.innerHTML = "<h1 class='manufacturing-heading'>Manufacturing Businesses</h1>"

    manufacturingArray.forEach(
        (businessObject) => {
            manufacturingContainer.innerHTML += Business(businessObject)
        }
    )
}