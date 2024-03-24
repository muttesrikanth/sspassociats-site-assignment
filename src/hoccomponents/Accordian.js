export default function Accordion(props) {
  return (
    <div className="border my-6 rounded-md">
      <button
        className="w-full p-2 text-left text-xl font-bold"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          }  
                                 transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && <div className="p-4 bg-white">{props.data}</div>}
    </div>
  );
}
