const ButtonMenu = props => {
  return (
    <div
      role="input"
      className="cursor-pointer fixed top-0 right-0 m-6 z-50 w-12 h-12 md:w-16 md:h-16"
      onClick={props.clicky}
    >
      <img
        className="inline icon "
        src={!props.clicked ? '/imgs/menu.png' : '/imgs/error.png'}
      />
    </div>
  );
};

export default ButtonMenu;
