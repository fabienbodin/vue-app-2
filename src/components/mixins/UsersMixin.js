import {uuid} from "vue-uuid";

var UsersMixin = {
    data: () => ({
        users: []
    }),
    methods: {
        loadUsers: function() {
            if (this.hasSaveUsers()) {
                this.users = JSON.parse(localStorage.getItem('users'));
                console.log('Users loaded.');
            } else {
                this.setDefaultUsers();
            }
        },
        setDefaultUsers: function () {
            this.users = [{ uuid: uuid.v4(), firstname: "John", lastname: "Doe", email: "john.doe@unknown.com", gender: "Homme" },
                { uuid: uuid.v4(), firstname: "Jane", lastname: "Doe", email: "jane.doe@unknown.com", gender: "Femme" },
                { uuid: uuid.v4(), firstname: "Javier", lastname: "Arnold", email: "javier.arnold@unknown.com", gender: "Homme" },
                { uuid: uuid.v4(), firstname: "Stella", lastname: "Larson", email: "stella.larson@unknown.com", gender: "Femme" },
                { uuid: uuid.v4(), firstname: "Amelia", lastname: "Owens", email: "amelia.owens@unknown.com", gender: "Femme" },
                { uuid: uuid.v4(), firstname: "Jessie", lastname: "Holmes", email: "jessie.holmes@unknown.com", gender: "Homme" },
                { uuid: uuid.v4(), firstname: "Jimmy", lastname: "Carroll", email: "jimmy.carroll@unknown.com", gender: "Homme" },
                { uuid: uuid.v4(), firstname: "Sarah", lastname: "Robinson", email: "sarah.robinson@unknown.com", gender: "Femme" }];
            console.log('Set default users.');
            this.saveUsers();
        },
        hasSaveUsers: function () {
            const users = localStorage.getItem('users');
            return users !== null;
        },
        saveUsers: function () {
            localStorage.setItem('users', JSON.stringify(this.users));
            console.log('Users saved.');
        }
    }
}

export default UsersMixin;