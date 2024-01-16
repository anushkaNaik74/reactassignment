import axios from "axios"

export class UsersService{
    private static URL:string = "https://jsonplaceholder.typicode.com"

    public static getAllUsers(){
        let UserUrl:string = `${this.URL}/users`

        return axios.get(UserUrl)
    }
}