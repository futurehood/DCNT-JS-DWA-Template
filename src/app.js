import {NetworkManager} from "./DCNT-JS/NetworkManager.js"

const listeners = {}

// Create a new NetworkManager instance
const networkManager = new NetworkManager(
    listeners,
    ["stun:YOUR-STUN-SERVER-HERE:PORT"], // See: https://gist.github.com/mondain/b0ec1cf5f60ae726202e
    ["YOUR-APPLICATION-PROTOCOL-HERE"]
)
