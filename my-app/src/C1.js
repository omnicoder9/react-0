

export default function Comp1() {
    return (
        <div>
            <p>inside component 1</p>
        </div>
    )
}
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}
//use of converter to use existing HTML
export function TodoList() {
    return (
      <>
        <h1>Hedy Lamarr's Todos for {formatDate(today)}</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul style={{
      backgroundColor: 'black',
      color: 'pink' }}>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </>
    );
    }


    export function Avatar() {
        const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
        const description = 'Gregorio Y. Zara';
        return (
          <img
            className="avatar"
            src={avatar}
            alt={description}
          />
        );
      }