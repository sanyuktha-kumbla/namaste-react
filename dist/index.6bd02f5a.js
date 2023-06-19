const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h1", {}, "I'm an h1 tag")
]));
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
