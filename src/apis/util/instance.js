import axios from "axios";

const liveServerAddress = "http://15.165.96.196";
const localServerAddress = "http://localhost:8080";
export const IMAGE_ADDRESS = "https://mn-image-s3-bucket.s3.ap-northeast-2.amazonaws.com/";

export const instance = axios.create({
    baseURL: liveServerAddress,
    headers: {
        Authorization: localStorage.getItem("accessToken")
    }
});