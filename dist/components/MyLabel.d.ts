/// <reference types="react" />
import "./MyLabel.css";
export interface Props {
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
    /**
     *  Color personalizado del fondo.
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: Props) => JSX.Element;
