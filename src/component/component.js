import { Route, Routes, NavLink, useParams } from "react-router-dom";

var contents = {
    1: { id: 1, title: 'HTML', desc: 'HTML is ...' },
    2: { id: 2, title: 'JS', desc: 'JS is ...' },
    3: { id: 3, title: 'React', desc: 'React is ...' }
}
function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    );
}
function Topic() {
    var params = useParams();
    console.log('params', params);
    var topic_id = params.Topic_id; // URL 파라미터 값
    var selected_topic = {
        title: 'Sorry',
        desc: 'Not Found'
    }
    for (var key in contents) {
        if (contents[key].id === Number(topic_id)) {
            selected_topic = contents[key];
            break;
        }
    }
    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.desc}
        </div>
    );
}
function Topics() {
    var params = useParams();
    console.log('params', params);
    var lis = [];
    for (var key in contents) {
        lis.push(<li key={contents[key].id}>
            <NavLink to={'/Topics/' + contents[key].id}>{contents[key].title}</NavLink></li>);
    }
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {lis}
            </ul>
            <Routes>
                <Route path="/:Topic_id" element={<Topic />} />
            </Routes>
        </div >
    );
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    );
}

export { Home, Topics, Contact };