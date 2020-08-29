import firebase from "firebase";

export default {

    data() {
        return {
            register: {},
            urlimage: "",
            progress: 0,

        }
    },

    methods: {
        cropSuccess(imageDataUrl) {
            this.register.urlimage = imageDataUrl;
        },


        uploadImage() {
            const url = this.register.urlimage;
            fetch(url)
                .then((res) => res.blob())
                .then((blob) => {
                    const file = new File([blob], "File name", { type: "image/png" });

                    let storageRef = firebase.storage().ref();
                    let uploadTask = storageRef
                        .child(`images/${this.register.cpf.replace(/[^\d]+/g, '')}_${this.register.fullname}`)
                        .put(file);

                    uploadTask.on(
                        firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot) => {
                            let progress =
                                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            this.progress = progress
                            console.log("Upload is " + progress + "% done");
                        },
                        function(error) {
                            switch (error.code) {
                                case "storage/unauthorized":
                                    break;

                                case "storage/canceled":
                                    break;

                                case "storage/unknown":
                                    break;
                            }
                        },
                        () => {

                            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                                this.register.urlimage = downloadURL
                            })
                        }
                    );
                })

        },

        update() {
            console.log("upload imagem register");
            this.uploadImage()
            console.log("deleting register");
            firebase
                .database()
                .ref("registers/" + this.id)
                .remove();
            console.log("update register");
            firebase.database().ref("registers/").push().set(this.register);

        },
    },
}