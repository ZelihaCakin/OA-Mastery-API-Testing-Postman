class Data {

    headerPayload() {
        const headerBody = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
        return headerBody;
    }

    bodyPayload() {
        const postData = {
            "id": 1,
            "username": "zeliha",
            "firstName": "Zeliha",
            "lastName": "Çakın",
            "email": "zeliha@gmail.com",
            "password": "123456",
            "phone": "02021121",
            "userStatus": 1
          }
        return postData;
    }

    updatePayload(userName, firstName) {
        const postData = {
            "id": 1,
            "username": userName,
            "firstName": firstName,
            "lastName": "Çakın",
            "email": "zeliha@gmail.com",
            "password": "123456",
            "phone": "02021121",
            "userStatus": 1
          }
        return postData;
    }

    /*userSign(username, password) {
        const queryBody = {
            "username": username,
            "password": password
        }
        return queryBody;
    }

    listPostData() {
        const postData = [
            {
                "id": 1,
                "username": "ahmet",
                "firstName": "Ahmet",
                "lastName": "Öz",
                "email": "ahmet1@gmail.com",
                "password": "1234",
                "phone": "345",
                "userStatus": 0
            },
            {
                "id": 2,
                "username": "mehmet",
                "firstName": "Mehmet",
                "lastName": "Masad",
                "email": "mehmet@gmail.com",
                "password": "234",
                "phone": "123213",
                "userStatus": 0
            }
        ]
        return postData;
    }
    arrayPostData(){
        const postData=[
            {
              "id": 3,
              "username": "duygu",
              "firstName": "Duygu",
              "lastName": "Öz",
              "email": "duygu@gmail.com",
              "password": "3456",
              "phone": "123456",
              "userStatus": 0
            }
          ]
          return postData;
    }*/


}

export default Data;