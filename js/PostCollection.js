export default class PostCollection {
    constructor() {
        const  storedPosts = JSON.parse(localStorage.getItem('posts'));
        this.posts = storedPosts && storedPosts.lenght > 0 ? storedPosts : [
            { id: 1, name: "Miku", description: "Lovely dog", image: "https://place-puppy.com/200x200", birthDate: "2022-06-01", price: 100, petCode: "DOG001", sold: false },
        ];

        this.save();
    }

    save() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }

    getAllPosts() {
    return this.posts;
    }

    }