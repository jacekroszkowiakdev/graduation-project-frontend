import "./App.css";

function App(props) {
    const { children } = props;
    return (
        <div className="App">
            <header className="App-header" />
            <main>
                <div className="main-content">{children}</div>
            </main>
        </div>
    );
}

export default App;
