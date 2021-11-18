import "./MyLabel.css";

interface Props {
  /**
   * Este es el texto que se va a mostrar en la etiqueta.
   */
  label: string;

  /**
   * Este es el tamaño de la etiqueta.
   */
  size: "normal" | "h3" | "h2" | "h1";

  /**
   * Sirve para capitalizar el texto.
   */
  allCaps?: boolean;

  /**
   * Sirve para cambiar el color del texto.
   */

  color?: "primary" | "secondary" | "tertiary";

  /**
   *  Color personalizado de la fuente.
   */

  fontColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: Props) => {
  const className = ["label", size, `text-${color}`].join(" ");
  const textToDisplay = allCaps ? label.toUpperCase() : label;
  return (
    <span
      className={className}
      style={{
        color: fontColor,
      }}
    >
      {textToDisplay}
    </span>
  );
};