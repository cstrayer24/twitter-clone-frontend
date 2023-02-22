function CenterLayout(props) {
  return (
    <div className=" border-solid  border-slate-700 border-2  col-span-2 mr-5 max-sm:col-span-1 max-sm:border-hidden max-sm:mr-0 ">
      {props.children}
    </div>
  );
}

export default CenterLayout;
