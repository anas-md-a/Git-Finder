class Git{

    async getUser(user){
        const get= await fetch (`https://api.github.com/users/${user}`)
        const profile = await get.json();
         
        return profile;
    }
}
