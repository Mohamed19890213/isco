export default class MediaHandler {

    getPermissions() {
        return new Promise((res, rej) => {
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            })
            .then((stream) => {
                res(stream);
            })
            .catch((error) => {
                throw new Error(`Unable to fetch stream ${error}`);
            });
        });
    }

}