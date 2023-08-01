import CountButton from "./components/CountButton.tsx";
import useCount from "./jotai/store.ts";

function App() {
    const [count, setCount] = useCount()

    return (
        <>
            <h1>Remote Application  </h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

                <CountButton/>
            </div>
        </>
    )
}

export default App
