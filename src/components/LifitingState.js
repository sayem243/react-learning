export default function LifitingState({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p> The Water would boil.</p>;
    }

    return <p>Water would not boil</p>;
}
