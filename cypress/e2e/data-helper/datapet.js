class DataPet{
    headerPayload() {
        const headerBody = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
        return headerBody;
    }

    bodyPayload() {
        const postData = {
            "id": 100,
            "category": {
                "id": 1,
                "name": "black"
            },
            "name": "black doggie",
            "photoUrls": [
                "https://compote.slate.com/images/7ae6d256-563e-4f94-ac877cb9579ad3ff.jpg?crop=590%2C421%2Cx0%2Cy0&width=1280"
            ],
            "tags": [
                {
                    "id": 10,
                    "name": "tall doggie"
                }
            ],
            "status": "available"
        }
        return postData;
    }


    updatePayload(tagsname) {
        const postData = {
            "id": 100,
            "category": {
                "id": 1,
                "name": "black"
            },
            "name": "black doggie",
            "photoUrls": [
                "https://compote.slate.com/images/7ae6d256-563e-4f94-ac877cb9579ad3ff.jpg?crop=590%2C421%2Cx0%2Cy0&width=1280"
            ],
            "tags": [
                {
                    "id": 10,
                    "name": tagsname
                }
            ],
            "status": "available"
        }
        return postData;
    }

    updatePayloadFormData(cname,status) {
        const postData = {
            "id": 100,
            "category": {
                "id": 1,
                "name": cname
            },
            "name": "black doggie",
            "photoUrls": [
                "https://compote.slate.com/images/7ae6d256-563e-4f94-ac877cb9579ad3ff.jpg?crop=590%2C421%2Cx0%2Cy0&width=1280"
            ],
            "tags": [
                {
                    "id": 10,
                    "name": "tall doggie"
                }
            ],
            "status": status
        }
        return postData;
    }

    bodyPayloadOrder(){
        const postData = {
                "id": 1,
                "petId": 10,
                "quantity": 1,
                "shipDate": "2024-08-10T19:48:57.463Z",
                "status": "placed",
                "complete": true
        }
        return postData;
    }

}
export default DataPet;



