export default function Button01(props) {
  return (
    <button style={{ backgroundColor: props.isActive ? "pink" : "" }}>
      {props.title}
    </button>
  );
}
