import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina múltiples valores de clase CSS en una sola cadena,
 * eliminando clases duplicadas y resolviendo conflictos de Tailwind CSS.
 *
 * @param inputs - Un array de valores de clase CSS que pueden ser strings,
 * objetos (con valores booleanos para inclusión condicional) o arrays anidados.
 * @returns Una cadena de clases CSS combinadas.
 */
export default function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}