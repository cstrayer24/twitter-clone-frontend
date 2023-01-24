function CenterLayout(props) {
  return (
    <div className=" border-solid  border-slate-700 border-2  col-span-2 mr-5 ">
      {props.children}
    </div>
  );
}

export default CenterLayout;
