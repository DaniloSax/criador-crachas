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
        cropSuccess(imageDataUrl, field) {
            console.log(field);
            this.photo = imageDataUrl;
        },

        registerCard() {
            console.log('registrando')
            firebase.database().ref("registers/").push().set(this.register);
        },

        prepareData(urlimage) {
            console.log('preparando data')
            let register = {
                fullname: this.register.fullname,
                cpf: this.register.cpf.replace(/[^\d]+/g, ''),
                office: this.register.office,
                urlimage: urlimage,
            }
            this.register = register
        },

        onUploadPhoto() {

            const url = this.photo;
            fetch(url)
                .then((res) => res.blob())
                .then((blob) => {
                    const file = new File([blob], "File name", { type: "image/png" });

                    let storageRef = firebase.storage().ref();
                    let uploadTask = storageRef
                        .child(`images/${this.register.cpf.replace(/[^\d]+/g, '')}_${this.register.office}`)
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
                                this.prepareData(downloadURL)
                                    // console.log("File available at", this.urlImge);
                                this.registerCard()
                            })
                        }
                    );
                })
        },
    },
}