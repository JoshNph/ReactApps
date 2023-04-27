// User class

// 1. Username
// 2. Password
// 3. Age

class User {
    #username;
    #password;
    #age;

    constructor(username, password, age) {
        this.#username = username;
        this.#password = password;
        this.#age = age;
    }

    static getUsername(obj) {
        return obj.#username;
    }
}

const user1 = new User("johndoe", "password123", 25);
console.log(User.getUsername(user1)); // Output: "johndoe"
