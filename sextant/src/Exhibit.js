function Exhibit(props){
  return (
    <div className="rounded shadow-2xl border flex flex-col m-4 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-900 via-g-900 to-stone-900 py-4">
        <h2 className="text-white font-bold text-lg">{props.exhibitheading}</h2>
      </div>
      <div className="p-4">
        {props.exhibitcomponent}
      </div>
    </div>
  )
}

export default Exhibit