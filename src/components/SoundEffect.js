export default function playSound(src) {
    const sources = {
        enter: require("../sounds/lever.wav")
    }

    new Audio(sources[src]).play().catch(error => 0);
}