import collectionsDal from "../Dal/collections-dal.js"


const getAllEmptyCollections = async () => {
    return await collectionsDal.getAllEmptyCollections()
}

export default {
    getAllEmptyCollections
}