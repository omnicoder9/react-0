

export default function Comp1() {
    return (
        <div>
            <p>inside component 1</p>
        </div>
    )
}

//use of converter to use existing HTML
export function TodoList() {
    return (
      <>
        <h1>Hedy Lamarr's Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </>
    );
    }