/**
 * Generates avatar url for users
 * @param {Number} userId 
 * @param {String} type
 */
export default function avatarUrlGenerator(userId, type) {
    const seed = Math.round(Math.random()*100000)
    const folder = userId - (userId % 1000)
    switch(type.toLowerCase()){
        case "little":
            return `https://av.macrojuegos.com/users/${folder}/${userId}/little.jpg?r=${seed}`
        case "normal":
            return `https://av.macrojuegos.com/users/${folder}/normal.jpg?r=${seed}`
        case "full":
            return `https://av.macrojuegos.com/users/${folder}/${userId}/full.jpg?r=${seed}`
        default:
            throw new Error()
    }
}

