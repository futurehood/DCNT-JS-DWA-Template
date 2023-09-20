import {NetworkManager} from "./DCNT-JS/NetworkManager.js"

const listeners = {}

// Create a new NetworkManager instance
const networkManager = new NetworkManager(
    listeners,
    ["stun:iphone-stun.strato-iphone.de:3478"],
    ["SAMPLE-APP"]
)
