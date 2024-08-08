export default function Button({
  mode = "filled",
  className,
  Icon,
  children,
  ...props
}) {
  let classes = `button ${mode}-button`;

  if (className) {
    classes += " " + className;
  }

  if (Icon) {
    classes += ' ' + 'icon-button'
  }

  return (
    <button className={classes} {...props}>
      
      {Icon && <span className="button-icon"><Icon /></span>}
      <span>{children}</span>
    </button>
  );
}
