export default class PostCollection {
    constructor() {
        const storedPosts = JSON.parse(localStorage.getItem('posts'));
        this.posts = storedPosts && storedPosts.length > 0 ? storedPosts : [
            { id: 1, name: "Miku", description: "Lovely dog", imgURL: "https://thumbs.dreamstime.com/b/terrier-de-toro-de-staffordshire-21772037.jpg", birthDate: "2022-06-01", price: 100, petCode: "DOG001", sold: false },
        ];

        this.save();
    }

    save() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }

    getAllPosts() {
        return this.posts;
    }

    getPostById(id) {
        return this.posts.find((post) => post.id == id);
    }

    addNewPost(newPost) {
        const exists = this.posts.some((post) => post.id == newPost.id);
        if (exists) return 0;

        this.posts.push(newPost);
        this.save();
        return newPost.id;
    }

    updatePost(updatedPost) {
        const index = this.posts.findIndex((post) => post.id == updatedPost.id);
        if (index < 0) return false;

        this.posts[index] = updatedPost;
        this.save();
        return true;
    }

    deletePost(id) {
        this.posts = this.posts.filter((post) => post.id !== Number(id));
        this.save();
    }

    clearAll() {
        this.posts = [];
        this.save();
    }
}

// Done by Francisco Alexandru Babei